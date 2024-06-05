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
import BookOnlinePageHook from "./BookOnlinePageHooks";
import PropertyImage from "../../assets/Slider images/sec-slider1.jpg";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SelectPlaceholder from "../../components/Select";

function BookOnlinePage() {
  const { breadData, miniScreenMatch, sliderImagesOfPartners, handleChange, formValues } =
    BookOnlinePageHook();

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
            THE BEST PLACE TO FIND THE HOUSE YOU WANT
          </Typography>
          <h4>ONLINE BOOKING</h4>
          <p className="p">
            Vishal Construction Company believes in continuous improvement and
            total customer focus in cooperative working environments. We deliver
            properties in Jaipur for sale in a cost effective range because we
            value money. We adopt risk managed process, while constantly
            challenging ourselves as we strive to find better ways of working.
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
            <Typography className="sub-label">Booking Form</Typography>
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
                <label className="filter-label">Property type</label>
                <SelectPlaceholder
                  placeholder="Property type"
                  options={["Commercial", "Residental"]}
                  handleChange={handleChange}
                  name={"property_type"}
                  value={formValues?.property_type}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Property Name</label>
                <SelectPlaceholder
                  placeholder="Property Name"
                  options={["Commercial", "Residental"]}
                  handleChange={handleChange}
                  name={"property_name"}
                  value={formValues?.property_name}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Name</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="Name"
                  onChange={handleChange}
                  name={"name"}
                  value={formValues?.name}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">E-mail</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="Email"
                  onChange={handleChange}
                  name={"email"}
                  value={formValues?.email}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Phone Number</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  name={"phone"}
                  value={formValues?.phone}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">PAN Number</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="PAN Number"
                  onChange={handleChange}
                  name={"pan"}
                  value={formValues?.pan}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Booking Amount</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="Amount"
                  onChange={handleChange}
                  name={"amount"}
                  value={formValues?.amount}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">City</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="City"
                  onChange={handleChange}
                  name={"city"}
                  value={formValues?.city}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">State</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="State"
                  onChange={handleChange}
                  name={"state"}
                  value={formValues?.state}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Country</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="Country"
                  onChange={handleChange}
                  name={"country"}
                  value={formValues?.country}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Pin Code</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                  placeholder="PinCode"
                  onChange={handleChange}
                  name={"pincode"}
                  value={formValues?.pincode}
                />
              </div>
              <Typography variant="p" className="inline-span w-100 ms-3 my-2">
                I has paid Rs. {formValues?.amount}(in numbers) as against my expression of
                interest for Flat No.
                <input type="number" className="inline-input-field" />
                 of Project.
              </Typography>
              <FormControlLabel
                className="d-block text-start ms-2"
                name={"terms_conditions"}
                onChange={handleChange}
                value={formValues?.terms_conditions}
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
                className="submit-button"
                sx={{ mt: 3, mb: 2 }}
              >
                Book Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default BookOnlinePage;
