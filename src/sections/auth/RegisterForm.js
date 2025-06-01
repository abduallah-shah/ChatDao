import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IconButton,
  InputAdornment,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import { LoadingButton } from "@mui/lab";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../redux/slices/actions/authActions";

import FormProvider, { RHFTextField } from "../../components/hook-form";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name Required")
      .min(3, "Must be at least 3 characters")
      .max(16, "Max 16 characters")
      .matches(/^[a-zA-Z]+$/, "Only alphabets allowed"),
    lastName: Yup.string()
      .required("Last Name Required")
      .min(3, "Must be at least 3 characters")
      .max(16, "Max 16 characters")
      .matches(/^[a-zA-Z]+$/, "Only alphabets allowed"),
    email: Yup.string().required("Email Required").email("Invalid Email"),
    password: Yup.string()
      .required("Password Required")
      .min(8, "Min 8 characters")
      .max(16, "Max 16 characters")
      .matches(/[0-9]/, "Requires a number")
      .matches(/[a-z]/, "Requires a lowercase letter")
      .matches(/[A-Z]/, "Requires an uppercase letter")
      .matches(/[^\w]/, "Requires a symbol"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    dispatch(RegisterUser(data));
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={isSmallScreen ? 0 : 3}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={isSmallScreen ? 0 : 2}
        >
          <RHFTextField name="firstName" label="First Name" />
          <RHFTextField name="lastName" label="Last Name" />
        </Stack>
        <RHFTextField name="email" label="Email" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          loading={isLoading}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
