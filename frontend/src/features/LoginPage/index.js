'use client'
import React, { useState } from "react";
import "./index.scss";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import LoginPageHook from "./loginPageHooks";
import Link from "next/link";

function LoginPage() {
  const { breadData, IsForgot, handleForgetPassword, handleBacktoLogin, router } =
    LoginPageHook();

  return (
    <Box className="Login-page">
      <BreadCrumb data={breadData} />
      <Container component="main" maxWidth="xs" className="login-form">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {IsForgot ? (
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              className="mt-4"
            >
              <Typography className="w-100 sub-texts">
                {"Can't remember your password? Kindly type in your email address.An email with a password creation link will be sent to you."}
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                color="grey"
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="login-button"
                sx={{ mt: 3, mb: 2 }}
              >
                Get New Password
              </Button>
              <Link
                href="#"
                variant="body2"
                className="d-block sub-texts links"
                onClick={handleBacktoLogin}
              >
                Back to Login page
              </Link>
            </Box>
          ) : (
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                color="grey"
                id="email"
                label="Username or Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                color="grey"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="login-button"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Link
                  href="#"
                  variant="body2"
                  className="w-100 sub-texts links"
                  onClick={handleForgetPassword}
                >
                  Forgot password?
                </Link>
                <Grid item className="w-100 sub-texts">
                  {"Don't have an account?"}
                  <span onClick={()=>{router.push("/sign-up")}} variant="body2" className="links">
                    {" Sign Up"}
                  </span>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
export default LoginPage;
