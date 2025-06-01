import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { AddOtpEmail, SendOTP, VerifyOTP } from "../../redux/slices/actions/authActions";

import FormProvider, { RHFOtp, RHFTextField } from "../../components/hook-form";

// ---------------------- Email for OTP Form ----------------------
export const EmailForm = () => {
  const { isLoading, otpEmail } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const EmailSchema = Yup.object().shape({
    email: Yup.string().required("Email Required").email("Invalid Email"),
  });

  const defaultValues = {
    email: otpEmail || "",
  };

  const methods = useForm({
    resolver: yupResolver(EmailSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    if (otpEmail) {
      dispatch(SendOTP(data));
    } else {
      dispatch(AddOtpEmail(data));
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!otpEmail && (
        <Typography sx={{ pl: 1, color: (theme) => theme.palette.error.main }}>
          Please enter email and click Add Email first
        </Typography>
      )}

      <Stack direction="row" justifyContent="center" alignItems="end" spacing={2}>
        <RHFTextField
          name="email"
          label="Email address"
          InputProps={{
            endAdornment: (
              <LoadingButton
                loading={isLoading}
                size="small"
                type="submit"
                variant="outlined"
                sx={{
                  py: 1,
                  width: "9rem",
                  color: (theme) => (theme.palette.mode === "light" ? "common.black" : ""),
                  "&:hover": { bgcolor: "primary.main", color: "common.white" },
                }}
              >
                {!otpEmail ? "Add Email" : "Resend OTP"}
              </LoadingButton>
            ),
          }}
        />
      </Stack>
    </FormProvider>
  );
};

// ---------------------- OTP Form ----------------------
const VerifyForm = () => {
  const { isLoading, otpEmail } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const VerifySchema = Yup.object().shape({
    otp1: Yup.string().required("Required"),
    otp2: Yup.string().required("Required"),
    otp3: Yup.string().required("Required"),
    otp4: Yup.string().required("Required"),
    otp5: Yup.string().required("Required"),
    otp6: Yup.string().required("Required"),
  });

  const defaultValues = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(VerifySchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    dispatch(
      VerifyOTP({
        email: otpEmail,
        otp: `${data.otp1}${data.otp2}${data.otp3}${data.otp4}${data.otp5}${data.otp6}`,
      })
    );
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFOtp
          disabled={!otpEmail}
          keyName="otp"
          inputs={["otp1", "otp2", "otp3", "otp4", "otp5", "otp6"]}
        />

        <LoadingButton
          loading={isLoading}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={!otpEmail}
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
          Verify OTP
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
};

export default VerifyForm;
