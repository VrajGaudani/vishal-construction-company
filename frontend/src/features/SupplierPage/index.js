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
import SupplierPageHook from "./supplierPageHooks";
import SelectPlaceholder from "../../components/Select";

function SupplierPage() {
  const { breadData, router, pageName, miniScreenMatch, isRight, pageData } =
    SupplierPageHook();

  return (
    <Box className="supplier-page">
      <BreadCrumb data={breadData} />
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
          <Typography className="sub-label">{pageName + " Service"}</Typography>
          <h4>{pageData.heading}</h4>
          <p className="p">{pageData.Description}</p>
        </Box>
      </Box>
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
              Submit Your Supplier Form
            </Typography>
            <h1>Supplier Form</h1>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              className="inquiry-form-box d-flex flex-wrap"
              noValidate
              sx={{ mt: 1 }}
            >
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
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Select Position/Job Role</label>
                <SelectPlaceholder
                  placeholder="Select Position/Job Role"
                  options={["Commercial", "Residental"]}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-50">
                <label className="filter-label">Enter Location</label>
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
                <label className="filter-label">Select Position/Job Role</label>
                <SelectPlaceholder
                  placeholder="Select Position/Job Role"
                  options={["Commercial", "Residental"]}
                />
              </div>
              <div className="d-flex flex-wrap input-box w-100">
                <label className="filter-label">MESSAGE</label>
                <textarea
                  className="form-control w-100 mw-100 inquiry-text-area"
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>
              <div className="d-flex flex-wrap input-box w-100">
                <label className="filter-label">Price list/ Quotation</label>
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
export default SupplierPage;
