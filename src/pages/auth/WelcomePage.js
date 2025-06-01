import React from "react";
import {
  Stack,
  Typography,
  Box,
  Button,
  Container,
  useTheme,
  Fade,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Rocket,
  Shield,
  Lightning,
} from "phosphor-react";

import ChatDaoLogo from "../../assets/icons/logo/TwinkConnect.png";

// Social array configuration
const SocialArray = [
  {
    bg: "#2b3137",
    link: "https://github.com/abduallah-shah",
    icon: <GithubLogo weight="duotone" />,
    label: "GitHub",
  },
  {
    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    link: "https://instagram.com/abduallah-shah",
    icon: <InstagramLogo />,
    label: "Instagram",
  },
  {
    bg: "#0A66C2",
    link: "https://www.linkedin.com/in/abduallah-shah",
    icon: <LinkedinLogo />,
    label: "LinkedIn",
  },
];

// Features array configuration
const features = [
  {
    icon: <Rocket weight="fill" />,
    title: "Lightning Fast",
    description: "Experience real-time messaging with zero lag",
  },
  {
    icon: <Shield weight="fill" />,
    title: "Secure & Private",
    description: "End-to-end encryption for all your conversations",
  },
  {
    icon: <Lightning weight="fill" />,
    title: "Seamless Experience",
    description: "Intuitive interface across all devices",
  },
];

const WelcomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Fade in timeout={1200}>
        <Stack
          spacing={{ xs: 6, sm: 8, md: 10 }}
          alignItems="center"
          width="100%"
          maxWidth="1200px"
        >
          {/* Hero Section */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 6, sm: 8, md: 10 }}
            width="100%"
            sx={{
              backgroundColor: theme.palette.mode === "dark"
                ? "rgba(0, 0, 0, 0.2)"
                : "rgba(255, 255, 255, 0.95)",
              borderRadius: { xs: "20px", md: "24px" },
              p: { xs: 4, sm: 5, md: 6 },
              boxShadow: theme.palette.mode === "dark"
                ? "0 10px 40px rgba(0, 198, 255, 0.15)"
                : "0 20px 80px rgba(0, 114, 255, 0.12)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.02)"}`,
            }}
          >
            {/* Left Content */}
            <Stack
              spacing={{ xs: 4, sm: 5 }}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              width="100%"
              maxWidth={{ xs: '100%', md: '50%' }}
            >
              <Typography
                component="h1"
                textAlign={{ xs: "center", md: "left" }}
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem', lg: '3.5rem' },
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 50%, #2E3192 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  width: '100%',
                  maxWidth: { xs: '300px', sm: '500px', md: '100%' },
                }}
              >
                Transform Your Communications
              </Typography>

              <Typography
                component="h2"
                textAlign={{ xs: "center", md: "left" }}
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  fontWeight: 500,
                  color: "text.secondary",
                  maxWidth: { xs: '280px', sm: '400px', md: '500px' },
                }}
              >
                Experience the next evolution of messaging with intelligent features
                and seamless connectivity.
              </Typography>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                width={{ xs: '100%', sm: 'auto' }}
                alignItems="center"
              >
                <Button
                  component={Link}
                  to="/auth/register"
                  variant="contained"
                  fullWidth={isMobile}
                  size={isMobile ? "large" : "medium"}
                  sx={{
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 4, md: 5 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontWeight: 600,
                    borderRadius: '12px',
                    background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
                    transition: 'all 0.3s ease',
                    minWidth: { xs: '100%', sm: '180px' },
                    '&:hover': {
                      transform: isTablet ? 'none' : 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0,114,255,0.4)',
                    },
                  }}
                >
                  Get Started Free
                </Button>

                <Button
                  component={Link}
                  to="/auth/login"
                  variant="outlined"
                  fullWidth={isMobile}
                  size={isMobile ? "large" : "medium"}
                  sx={{
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 4, md: 5 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontWeight: 600,
                    borderRadius: '12px',
                    borderWidth: 2,
                    minWidth: { xs: '100%', sm: '180px' },
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  Sign In
                </Button>
              </Stack>

              {/* Social Links */}
              <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                width="100%"
                pt={{ xs: 2, sm: 3 }}
              >
                {SocialArray.map((social, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      width: { xs: 40, sm: 45 },
                      height: { xs: 40, sm: 45 },
                      borderRadius: '12px',
                      background: social.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: isTablet ? 'none' : 'translateY(-3px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    {React.cloneElement(social.icon, {
                      size: isMobile ? 20 : 24,
                      color: "#ffffff"
                    })}
                  </Box>
                ))}
              </Stack>
            </Stack>

            {/* Hero Image */}
            <Box
              component="img"
              src={ChatDaoLogo}
              alt="ChatDao Platform Preview"
              sx={{
                width: { xs: '90%', sm: '70%', md: '45%' },
                maxWidth: { xs: 280, sm: 400, md: 500 },
                height: 'auto',
                objectFit: 'contain',
                mx: 'auto',
                filter: theme.palette.mode === "dark"
                  ? "drop-shadow(0 0 30px rgba(0,198,255,0.3))"
                  : "drop-shadow(0 20px 40px rgba(0,114,255,0.15))",
                transition: 'all 0.5s ease',
                '&:hover': {
                  transform: isTablet ? 'none' : 'translateY(-10px)',
                },
              }}
            />
          </Stack>

          {/* Features Grid */}
          <Grid
            container
            spacing={{ xs: 4, sm: 5 }}
            justifyContent="center"
            alignItems="stretch" // Add this to ensure equal height
            sx={{ width: '100%' }}
          >
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    height: '100%', // Make box take full height
                    p: { xs: 4, sm: 5 },
                    borderRadius: '20px',
                    backgroundColor: theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.02)",
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center', // Add this for vertical centering
                    textAlign: 'center',
                    '&:hover': {
                      transform: isTablet ? 'none' : 'translateY(-5px)',
                      boxShadow: theme.palette.mode === "dark"
                        ? "0 10px 30px rgba(0,198,255,0.1)"
                        : "0 10px 30px rgba(0,114,255,0.1)",
                    },
                  }}
                >
                  <Stack
                    spacing={3} // Add consistent spacing
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: '100%' }}
                  >
                    <Box
                      sx={{
                        p: { xs: 2, sm: 2.5 },
                        borderRadius: '15px',
                        backgroundColor: theme.palette.mode === "dark"
                          ? "rgba(0,198,255,0.1)"
                          : "rgba(0,114,255,0.1)",
                      }}
                    >
                      {React.cloneElement(feature.icon, {
                        size: isMobile ? 24 : 28,
                        color: theme.palette.primary.main
                      })}
                    </Box>
                    <Typography
                      component="h3"
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                        mb: 1, // Reduced margin
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        maxWidth: { xs: '240px', sm: '280px' },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Fade>
    </Container>
  );
};

export default WelcomePage;