'use client'
import React from "react";
import "./index.scss";
import {
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import CareerPageHook from "./CareerPageHooks";
import CareerBox from "../../components/CareerBox";
import SelectPlaceholder from "../../components/Select";

function CareerPage() {
  const { breadData, handleDialogClose, applyDialog, handleDialogOpen } =
    CareerPageHook();

  return (
    <Box className="career-page">
      <BreadCrumb data={breadData} />
      <Container className="career-page-container">
        <Box className="w-100 text-start">
          <Typography className="sub-label">Come, Join Us!</Typography>
          <h1>We’re Hiring</h1>
          <p className="p">
            We believe that each one of us should be able to find our dream job,
            and we constantly strive hard to make that possible. Apply now!
          </p>
        </Box>
        <CareerBox handleApply={handleDialogOpen} />
        <CareerBox handleApply={handleDialogOpen} />
        <CareerBox handleApply={handleDialogOpen} />
        <CareerBox handleApply={handleDialogOpen} />
      </Container>
      <Dialog
        fullWidth
        open={applyDialog}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title"
        className="apply-dialog"
      >
        <DialogTitle id="responsive-dialog-title" className="dialog-header">
          {"Career form"}
        </DialogTitle>
        <DialogContent className="dialog-content">
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">First Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="First Name"
            />
          </div>
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">Last Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="Last Name"
            />
          </div>
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">E-mail</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="Email"
            />
          </div>
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">Phone</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="Phone"
            />
          </div>
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">Last Qualification</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="Phone"
            />
          </div>
          <div className="d-flex flex-wrap input-box w-100">
            <label className="filter-label">Message</label>
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
        </DialogContent>
        <DialogActions>
          <Typography
            id="book-online"
            onClick={handleDialogClose}
            variant="span"
            className="submit-dialog-button"
          >
            Submit
          </Typography>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default CareerPage;
