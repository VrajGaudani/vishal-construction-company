"use client";
import React from "react";
import "./index.scss";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import PostPropertyPageHook from "./postPropertyPageHooks";
import SelectPlaceholder from "../../components/Select";

function PostPropertyPage() {
  const {
    breadData,
    onTypeChange,
    clientData,
    handleSelectChange,
    propertyType,
    totalFlatCount,
    otherSelects,
    handleRadioChange,
    radioButtonData,
  } = PostPropertyPageHook();

  const CommercialPlaces = [
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
    "Commercial Land",
    "Warehouse/ Godown",
    "Industrial Shed",
  ];

  const IsIdealForBusiness = [
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
  ];

  const RegulerFeatures = [
    "Flat/ Apartment",
    "Residential House",
    "Villa",
    "Farm House",
    "Pent house",
  ];

  const LandFeatures = [
    "Industrial Shed",
    "Agricultural Land",
    "Commercial Land",
    "Residential Land/ Plot",
  ];

  const CommercialOfficeFeatures = [
    "Warehouse/ Godown",
    "Commercial Office Space",
    "Commercial Shop",
    "Commercial Showroom",
  ];

  const housing = ["Residential House", "Farm House", "Villa"];

  const oneToTen = Array.from({ length: 10 }, (_, index) => String(index + 1));

  const twoHundredArray = Array.from({ length: 200 }, (_, index) => index + 1);

  const SelectorInput = (label, key, allData, value) => {
    return (
      <div className="d-flex flex-wrap input-box">
        <label className="filter-label">{label}</label>
        <SelectPlaceholder
          placeholder={label}
          handleChange={handleSelectChange}
          name={key}
          value={value}
          options={allData}
        />
      </div>
    );
  };

  const renderOwnerDetails = () => {
    if (clientData?.clientType !== "Owner") return null;

    return (
      <div className="w-100 d-flex flex-wrap owner-detail-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Personal Details
        </Typography>
        {["Name", "Mobile", "Email"].map((label) => (
          <div key={label} className="d-flex flex-wrap input-box">
            <label className="filter-label">{label}</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
              placeholder={`Enter Your ${label}`}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderPropertyDetails = () => {
    const propertyOptions = [
      "Flat/ Apartment",
      "Residential House",
      "Villa",
      "Residential Land/ Plot",
      "Pent house",
      "Commercial Office Space",
      "Commercial Shop",
      "Commercial Showroom",
      "Commercial Land",
      "Warehouse/ Godown",
      "Industrial Shed",
      "Agricultural Land",
      "Farm House",
    ];

    return (
      <div className="w-100 d-flex flex-wrap Property-detail-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Property Details
        </Typography>
        <FormControl className="ps-3 radio-group w-100">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="align-items-center"
          >
            <span className="me-3">For</span>
            <FormControlLabel
              value="sale"
              control={<Radio color="default" className="radio-button" />}
              label="Sale"
            />
            <FormControlLabel
              value="rent"
              control={<Radio color="default" className="radio-button" />}
              label="Rent/ Lease"
            />
          </RadioGroup>
        </FormControl>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">Property type</label>
          <SelectPlaceholder
            placeholder="Property type"
            handleChange={handleSelectChange}
            name={"property_type"}
            value={propertyType}
            options={propertyOptions}
          />
        </div>
        {propertyType[0] === "Flat/ Apartment" && (
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">
              Total No. of Flats in Your Society
            </label>
            <SelectPlaceholder
              placeholder="Total No"
              handleChange={handleSelectChange}
              name={"total_flats"}
              value={totalFlatCount}
              options={["<50", "50-100", ">100"]}
            />
          </div>
        )}
      </div>
    );
  };

  const handlePropertyLocationLabel = () => {
    if (propertyType[0] === "Flat/ Apartment") {
      return "Name of Project/Society";
    } else {
      return "Locality";
    }
  };

  const renderPropertyLocation = () => {
    return (
      <div className="w-100 d-flex flex-wrap Property-Location-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Property Location
        </Typography>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">City</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder="Enter Your City"
          />
        </div>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">
            {handlePropertyLocationLabel()}
          </label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder={handlePropertyLocationLabel()}
          />
        </div>
        {CommercialPlaces.includes(propertyType[0]) && (
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Land Zone</label>
            <SelectPlaceholder
              placeholder="Land Zone"
              // handleChange={handleSelectChange}
              // name={"total_flats"}
              // value={totalFlatCount}
              options={["Commercial", "Residental"]}
            />
          </div>
        )}
        {IsIdealForBusiness.includes(propertyType[0]) && (
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Ideal For Businesses</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
              placeholder="Ideal For Businesses"
            />
          </div>
        )}
      </div>
    );
  };

  const renderPropertyFeatures = () => {
    return (
      <div className="w-100 d-flex flex-wrap property-feature-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Property Features
        </Typography>
        {SelectorInput(
          "Bedrooms",
          "Bedrooms",
          oneToTen,
          otherSelects?.Bedrooms
        )}
        {SelectorInput(
          "Balconies",
          "Balconies",
          oneToTen,
          otherSelects?.Balconies
        )}
        {SelectorInput(
          "Floor No.",
          "floor_no",
          [].concat(
            ["Lower Basement", "Upper Basement", "Ground"],
            twoHundredArray
          ),
          otherSelects?.floor_no
        )}
        {SelectorInput(
          "Total Floors",
          "total_floors",
          twoHundredArray,
          otherSelects?.total_floors
        )}
        {SelectorInput(
          "Furnished Status",
          "furnished_status",
          ["Furnished", "Unfurnished", "Semi-Furnished"],
          otherSelects?.furnished_status
        )}
        {SelectorInput(
          "Bathrooms",
          "Bathrooms",
          oneToTen,
          otherSelects?.Bathrooms
        )}
        {housing.includes(propertyType[0]) &&
          SelectorInput(
            "Floors Allowed for construction",
            "allowed_floor_contruction",
            oneToTen,
            otherSelects?.allowed_floor_contruction
          )}
        {housing.includes(propertyType[0]) &&
          SelectorInput(
            "No of open sides",
            "no_of_open_sides",
            ["1", "2", "3", "4"],
            otherSelects?.no_of_open_sides
          )}
        {housing.includes(propertyType[0]) &&
          SelectorInput(
            "Width of road facing the plot",
            "width_of_open_side",
            ["1", "2", "3", "4"],
            otherSelects?.width_of_open_side
          )}
        {housing.includes(propertyType[0]) && (
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">
              Width of road facing the plot (m)
            </label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
              placeholder="Width of road facing the plot"
            />
          </div>
        )}
      </div>
    );
  };

  const renderCommercialPropertyFeatures = () => {
    return (
      <div className="w-100 d-flex flex-wrap property-feature-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Property Features
        </Typography>
        {SelectorInput(
          "Floor No.",
          "floor_no",
          [].concat(
            ["Lower Basement", "Upper Basement", "Ground"],
            twoHundredArray
          ),
          otherSelects?.floor_no
        )}
        {SelectorInput(
          "Total Floors",
          "total_floors",
          twoHundredArray,
          otherSelects?.total_floors
        )}
        {SelectorInput(
          "Furnished Status",
          "furnished_status",
          ["Furnished", "Unfurnished", "Semi-Furnished"],
          otherSelects?.furnished_status
        )}
        {SelectorInput(
          "Bathrooms",
          "Bathrooms",
          oneToTen,
          otherSelects?.Bathrooms
        )}
        <FormControl className="ps-3 radio-group w-100">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="align-items-center"
          >
            <span className="me-3">Personal Washroom:</span>
            <FormControlLabel
              value="yes"
              control={<Radio color="default" className="radio-button" />}
              label="Yes"
            />
            <FormControlLabel
              value="rent"
              control={<Radio color="default" className="radio-button" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <FormControl className="ps-3 radio-group w-100">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="align-items-center"
          >
            <span className="me-3">Pantry/Cafeteria:</span>
            <FormControlLabel
              value="dry"
              control={<Radio color="default" className="radio-button" />}
              label="Dry"
            />
            <FormControlLabel
              value="wet"
              control={<Radio color="default" className="radio-button" />}
              label="Wet"
            />
            <FormControlLabel
              value="not_avail"
              control={<Radio color="default" className="radio-button" />}
              label="Not Available"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  };

  const renderLandPropertyFeatures = () => {
    return (
      <div className="w-100 d-flex flex-wrap property-feature-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Property Features
        </Typography>
        {SelectorInput(
          "Floors Allowed for construction",
          "allowed_floor_contruction",
          oneToTen,
          otherSelects?.allowed_floor_contruction
        )}
        {SelectorInput(
          "No of open sides",
          "no_of_open_sides",
          ["1", "2", "3", "4"],
          otherSelects?.no_of_open_sides
        )}
        {SelectorInput(
          "Width of road facing the plot",
          "width_of_open_side",
          ["1", "2", "3", "4"],
          otherSelects?.width_of_open_side
        )}
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">
            Width of road facing the plot (m)
          </label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder="Width of road facing the plot"
          />
        </div>
        <FormControl className="ps-3 radio-group w-100">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="align-items-center"
          >
            <span className="me-3">Boundary wall made: </span>
            <FormControlLabel
              value="yes"
              control={<Radio color="default" className="radio-button" />}
              label="Yes"
            />
            <FormControlLabel
              value="rent"
              control={<Radio color="default" className="radio-button" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  };

  const renderAreaSection = () => {
    const isLandFeature =
      propertyType && LandFeatures.includes(propertyType[0]);

    return (
      <div className="w-100 d-flex flex-wrap property-feature-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Area{" "}
          {propertyType &&
            !isLandFeature &&
            `(Provide either Carpet Area or Super Area)`}
          :
        </Typography>

        {!isLandFeature && (
          <>
            <div className="d-flex flex-wrap input-box">
              <label className="filter-label">Carpet Area (Sq-ft)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Carpet Area"
              />
            </div>
            <div className="d-flex flex-wrap input-box">
              <label className="filter-label">Super Area (Sq-ft)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Super Area"
              />
            </div>
          </>
        )}

        {isLandFeature && (
          <>
            <div className="d-flex flex-wrap input-box">
              <label className="filter-label">Plot Area (Sq-yrd)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Plot Area"
              />
            </div>
            <div className="d-flex flex-wrap input-box">
              <label className="filter-label">Plot Length (yrd)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Plot Length"
              />
            </div>
            <div className="d-flex flex-wrap input-box">
              <label className="filter-label">Plot Breadth (yrd)</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="text-field"
                placeholder="Plot Breadth"
              />
            </div>
            <FormControlLabel
              className="d-flex text-start w-100"
              control={<Checkbox className="checkboxx" />}
              label={
                <span className="checkbox-text">This is a corner plot</span>
              }
            />
          </>
        )}
      </div>
    );
  };

  const renderPropertyAvaibality = () => {
    const isUnderConstruction =
      radioButtonData?.possession_status !== "ready_to_move";

    return (
      <div className="w-100 d-flex flex-wrap property-feature-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Transaction Type, Property Availability
        </Typography>
        <FormControl className="ps-3 w-100 radio-group">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="align-items-center"
            onChange={handleRadioChange}
            value={radioButtonData?.possession_status}
          >
            <span className="me-3">Possession Status: </span>
            <FormControlLabel
              name="possession_status"
              value="under_construction"
              control={<Radio color="default" className="radio-button" />}
              label="Under Construction"
            />
            <FormControlLabel
              name="possession_status"
              value="ready_to_move"
              control={<Radio color="default" className="radio-button" />}
              label="Ready to Move"
            />
          </RadioGroup>
        </FormControl>
        {isUnderConstruction ? (
          <>
            {SelectorInput("Month", "Month", oneToTen, otherSelects?.Month)}
            {SelectorInput("Year", "Year", oneToTen, otherSelects?.Year)}
          </>
        ) : (
          SelectorInput(
            "Age of Construction",
            "age_construction",
            oneToTen,
            otherSelects?.age_construction
          )
        )}
      </div>
    );
  };

  const renderPriceSection = () => {
    return (
      <div className="w-100 d-flex flex-wrap property-feature-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Price Details
        </Typography>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">Expected Price</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder="Expected Price"
          />
        </div>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">
            Booking/Token Amount (optional)
          </label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
            placeholder="₹ Booking/Token Amount"
          />
        </div>
        <FormControlLabel
          className="d-flex text-start w-100"
          control={<Checkbox color="default" className="checkboxx" />}
          label={<span className="checkbox-text">Price Negotiable</span>}
        />
      </div>
    );
  };

  const renderImageUploadSection = () => {
    return (
      <div className="w-100 d-flex flex-wrap property-feature-section">
        <Typography variant="span" className="form-label mt-4 text-start">
          Photos
        </Typography>
        <div className="d-flex flex-wrap input-box w-25">
          <label className="filter-label">Upload Images</label>
          <input type="file" id="fileId" className="d-none" />
          <label
            htmlFor="fileId"
            className="form-control w-100 mw-100 upload-div"
            id="exampleFormControlTextarea1"
          >
            <span>Upload Images</span>
          </label>
        </div>
      </div>
    );
  };

  return (
    <Box className="post-property-page">
      <BreadCrumb data={breadData} />
      <Box className="filter-section d-flex">
        <Box className="main-filter w-100">
          <Typography className="sub-label">
            You are posting this property for FREE!
          </Typography>
          <h1>
            Sell or Rent your <br /> Property
          </h1>
          <Box className="tabs">
            {["Owner", "Agent", "Builder"].map((type) => (
              <Box
                key={type}
                className={`tab ${
                  clientData?.clientType === type ? "selected" : ""
                }`}
              >
                <Typography
                  variant="p"
                  onClick={onTypeChange}
                  className="first-tab"
                  id={type}
                >
                  {type}
                </Typography>
              </Box>
            ))}
          </Box>
          {renderOwnerDetails()}
          {renderPropertyDetails()}
          {renderPropertyLocation()}
          {propertyType && RegulerFeatures.includes(propertyType[0])
            ? renderPropertyFeatures()
            : propertyType && LandFeatures.includes(propertyType[0])
            ? renderLandPropertyFeatures()
            : propertyType && CommercialOfficeFeatures.includes(propertyType[0])
            ? renderCommercialPropertyFeatures()
            : ""}
          {propertyType.length ? renderAreaSection() : ""}
          {propertyType.length
            ? !LandFeatures.includes(propertyType[0]) &&
              renderPropertyAvaibality()
            : ""}
          {propertyType.length ? renderPriceSection() : ""}
          {propertyType.length ? renderImageUploadSection() : ""}
          <FormControlLabel
            className="d-flex align-items-center w-100 text-start"
            control={<Checkbox color="default" className="checkboxx" />}
            label={
              <span className="checkbox-text">
                I agree to the{" "}
                <Typography variant="span" color="error">
                  Privacy & Policy *
                </Typography>
                {"  "} and {"  "}
                <Typography variant="span" color="error">
                  terms & conditions *
                </Typography>
              </span>
            }
          />
          <FormControlLabel
            className="d-flex align-items-center w-100 text-start"
            control={<Checkbox color="default" className="checkboxx" />}
            label={
              <span className="checkbox-text">
                {
                  "I am posting this property 'exclusively' on Vishal Construction"
                }
              </span>
            }
          />
          <Typography className="search-button">Post Property</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PostPropertyPage;
