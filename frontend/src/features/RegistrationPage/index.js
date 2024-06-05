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
import RegistrationPageHook from "./registrationPagePageHooks";

function RegistrationPage() {
  const { breadData, router } = RegistrationPageHook();

  return (
    <Box className="Registration-page">
      <BreadCrumb data={breadData} />
      <Container component="main" maxWidth="xs" className="Registration-form">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
              label="First Name"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              color="grey"
              id="email"
              label="Last Name"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              color="grey"
              id="email"
              label="Email"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              color="grey"
              id="email"
              label="Mobile Number"
              name="email"
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
            />
            <FormControlLabel
              className="d-block text-start"
              control={<Checkbox className="checkboxx" />}
              label={
                <span className="checkbox-text">
                  I agree to the{" "}
                  <Typography variant="span" color="error">
                    Privacy & Policy *
                  </Typography>
                </span>
              }
            />
            <FormControlLabel
              className="d-block text-start"
              control={<Checkbox className="checkboxx" />}
              label={
                <span className="checkbox-text">
                  I agree with all{" "}
                  <Typography variant="span" color="error">
                    terms & conditions *
                  </Typography>
                </span>
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="Registration-button"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item className="w-100 sub-texts">
                Already have an account? Please login
                <span onClick={()=>{router.push("/login")}} variant="body2" className="links">
                  {" Here"}
                </span>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default RegistrationPage;
