'use client'
import React from "react";
import "./index.scss";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import ContactUsPageHook from "./ContactUsPageHooks";
import CareerBox from "../../components/CareerBox";
import { MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import LocationIcon from "@/assets/icons/LocationIcon";

function ContactUsPage() {
  const { breadData } = ContactUsPageHook();

  const LeftBox = ({ title, des, logo }) => {
    return (
      <Box className="w-100 left-single-box">
        <Box className="icon-box">{logo}</Box>
        <Box className="left-description">
          <h4>{title}</h4>
          <span>{des}</span>
        </Box>
      </Box>
    );
  };

  return (
    <Box className="contact-page">
      <BreadCrumb data={breadData} />
      <Container className="mt-5">
        <Box className="w-100 text-center heading-container">
          <h1 className="text-center">{"Let's get in touch"}</h1>
          <p className="p">
            Contact us with the following details. and fillup the form with the
            details.
          </p>
        </Box>
      </Container>
      <Container className="contact-page-container">
        <Box className="left-container text-start">
          <LeftBox
            title={"Our Location"}
            des={"Jaipur Rajasthan - 302017"}
            logo={<LocationIcon isCustom={"#ffffff"} />}
          />
          <LeftBox
            logo={<FiPhone size={32} color="#ffffff" className="icon" />}
            title={"Phone Number"}
            des={"+91 9571647680"}
          />
          <LeftBox
            logo={<RiMailSendLine size={32} color="#ffffff" className="icon" />}
            title={"Our Email"}
            des={"info@vishalconstructioncompany.com"}
          />
        </Box>
        <Box className="right-container">
          <Box className="form-box">
            <Typography variant="span" className="form-label d-block">
              Get In Touch
            </Typography>
            <div className="d-flex flex-wrap input-box w-100">
              <label className="filter-label">Your Name</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field w-100"
                placeholder="Enter your name..."
              />
            </div>
            <div className="d-flex flex-wrap input-box w-100">
              <label className="filter-label">Email Address</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field w-100"
                placeholder="Enter your email..."
              />
            </div>
            <div className="d-flex flex-wrap input-box w-100">
              <label className="filter-label">Your Phone</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field w-100"
                placeholder="Enter your Your Phone..."
              />
            </div>
            <div className="d-flex flex-wrap input-box w-100">
              <label className="filter-label">Subject</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field w-100"
                placeholder="Subject..."
              />
            </div>
            <div className="d-flex flex-wrap input-box w-100">
              <label className="filter-label">Your Message</label>
              <div className="d-flex flex-wrap input-box w-100">
                <textarea
                  className="form-control w-100 mw-100 inquiry-text-area"
                  id="exampleFormControlTextarea1"
                  placeholder="Message..."
                ></textarea>
              </div>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="submit-button"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default ContactUsPage;
