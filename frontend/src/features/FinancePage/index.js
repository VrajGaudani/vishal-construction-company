'use client'
import React from "react";
import "./index.scss";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import FinancePageHook from "./financePageHooks";
import PropertyImage from "../../assets/Slider images/sec-slider1.jpg";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function FinancePage() {
  const { breadData, miniScreenMatch, sliderImagesOfPartners } =
    FinancePageHook();

  return (
    <Box className="finance-page">
      <BreadCrumb data={breadData} />
      <Box
        className={
          miniScreenMatch ? "container-fluid rent-section" : "rent-section"
        }
      >
        <Box className="rent-desc">
          <Typography className="sub-label">
            Finance with Partner Bank
          </Typography>
          <h4>Challenges</h4>
          <p className="p">
            Vishal Construction Company believes in continuous improvement and
            total customer focus in cooperative working environments. We deliver
            properties in Jaipur for sale in a cost effective range because we
            value money. We adopt risk managed process, while constantly
            challenging ourselves as we strive to find better ways of working.
          </p>
          <h4>Client-Focused Approach</h4>
          <p className="p">
            We adopt all the flexible approaches for satisfying our client
            requirements. We are the best Real Estate Company in Jaipur that has
            been at the forefront of working in partnerships with the clients.
          </p>
          <h4>Co-operation</h4>
          <p className="p">
            We are committed to working collaboratively with other companies to
            ensure the successful delivery of our client’s projects.
          </p>
        </Box>
        <Box
          className="rent-image inquiry-section d-flex align-items-center"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${PropertyImage.src})`,
          }}
        >
          <Box className="w-75 inquiry-form mx-auto">
            <Typography className="sub-label">Loan Calculation</Typography>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              className="inquiry-form-box d-flex flex-wrap"
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography variant="span" className="form-label">
                INFORMATION
              </Typography>
              <div className="d-flex flex-wrap input-box w-100">
                <label className="filter-label">Loan Amount *</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Interest Rate *</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Loan Tenure *</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <FormControl className="ps-3">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="months"
                    control={<Radio color="default" className="radio-button" />}
                    label="Months"
                  />
                  <FormControlLabel
                    value="years"
                    control={<Radio color="default" className="radio-button" />}
                    label="Years"
                  />
                </RadioGroup>
              </FormControl>
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
        </Box>
      </Box>
      <Container className="finance-section-container">
        <h2 className="partner-heading">OUR FINANCE BANK</h2>
        <Box className="build-material-section container">
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              520: {
                slidesPerView: 3,
              },
              990: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper material-slider"
          >
            {sliderImagesOfPartners.map((image,index) => (
              <SwiperSlide key={index+1}>
                <div
                  className="slider-image-material"
                  style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
export default FinancePage;
