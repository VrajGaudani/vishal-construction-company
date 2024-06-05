'use client'
import React from "react";
import "./index.scss";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import ServicePageHook from "./servicePageHooks";
import SelectPlaceholder from "../../components/Select";

function ServicePage() {
  const { breadData, router, pageName, miniScreenMatch, isRight, pageData } =
    ServicePageHook();

  return (
    <Box className="service-page">
      <BreadCrumb data={breadData} />
      {isRight ? (
        <Box
          className={
            miniScreenMatch ? "container-fluid about-section" : "about-section"
          }
        >
          <Box
            className="about-image"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${pageData.image.src})`,
            }}
          ></Box>
          <Box className="about-desc">
            <Typography className="sub-label">
              {pageName + " Service"}
            </Typography>
            <h4>{pageData.heading}</h4>
            <p className="p">{pageData.Description}</p>
          </Box>
        </Box>
      ) : (
        <Box
          className={
            miniScreenMatch ? "container-fluid rent-section" : "rent-section"
          }
        >
          <Box className="rent-desc">
            <Typography className="sub-label">
              {pageName + " Service"}
            </Typography>
            <h4>{pageData.heading}</h4>
            <p className="p">{pageData.Description}</p>
            {/* <div className="read-more">
              <h3>Rent A Home</h3>
              <p>
                Extensive upgrades and thorough maintenance have kept this home
                in prime condition. Hardwood floors and new carpets create a
                very comfortable living space.
              </p>
              <img src={RightArrowIcon} alt="arrow" />
            </div> */}
          </Box>
          <Box
            className="rent-image"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${pageData.image.src})`,
            }}
          ></Box>
        </Box>
      )}
      <Box
        className="inquiry-section"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${pageData.formImage.src})`,
          backgroundAttachment: "fixed",
        }}
      >
        <Container className={"d-flex inquiry-container flex-row-reverse"}>
          <Box className="w-50 inquiry-form">
            <Typography className="sub-label">
              Submit Your Real Estate Inquiry Today!
            </Typography>
            <h1>Inquiry Form</h1>
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
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">First Name</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Last Name</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">E-mail</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Phone Number</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <Typography variant="span" className="form-label mt-4">
                PROPERTY
              </Typography>
              <div className="d-flex flex-wrap input-box w-100">
                <label className="filter-label">Property type</label>
                <SelectPlaceholder
                  placeholder="Property type"
                  options={["Commercial", "Residental"]}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Total Area</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Max Price</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Floor</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Property Address</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Property City</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Property State</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <Typography variant="span" className="form-label mt-4">
                YOUR LOCATION
              </Typography>
              <div className="d-flex flex-wrap input-box w-100">
                <label className="filter-label">Address</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">City</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">State</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="text-field w-100"
                />
              </div>
              <Typography variant="span" className="form-label mt-4">
                MESSAGE
              </Typography>
              <div className="d-flex flex-wrap input-box w-100">
                <textarea
                  className="form-control w-100 mw-100 inquiry-text-area"
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>
              <div className="d-flex flex-wrap input-box w-100">
                <label className="filter-label">Upload file</label>
                <input type="file" id="fileId" className="d-none" />
                <label
                  htmlFor="fileId"
                  className="form-control w-100 mw-100 upload-div"
                  id="exampleFormControlTextarea1"
                >
                  <span>Upload Files</span>
                </label>
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
    </Box>
  );
}
export default ServicePage;
