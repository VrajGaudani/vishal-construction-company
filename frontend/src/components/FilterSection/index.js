import * as React from "react";
import "./index.scss";
import { Box, Breadcrumbs, TextField, Typography } from "@mui/material";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useState } from "react";
import SelectPlaceholder from "../Select";
import { FaSearch } from "react-icons/fa";
import SearchIcon from "../../assets/icons/Search_Icon.svg";
import Image from "next/image";

export default function FilterSection({ value, onChange }) {
  return (
    <Box className="filter-section d-flex">
      <Box className="main-filter w-100">
        <Typography className="sub-label">
          Your Pathway to Home Sweet Home.
        </Typography>
        <h1>
          More than Property,
          <br /> We Offer Possibilities
        </h1>
        <Box className="tabs">
          <Box className={value === "sell" ? "tab selected" : "tab"}>
            <Typography
              variant="p"
              onClick={() => {
                onChange("sell");
              }}
              className="first-tab "
            >
              Sell
            </Typography>
          </Box>
          <Box className={value === "rent" ? "tab selected" : "tab"}>
            <Typography
              onClick={() => {
                onChange("rent");
              }}
              variant="p"
            >
              Rent
            </Typography>
          </Box>
        </Box>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">City, Locality</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="text-field"
          />
        </div>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">Property type</label>
          <SelectPlaceholder
            placeholder="Property type"
            options={["Commercial", "Residental"]}
          />
        </div>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">Budget (Min Price)</label>
          <SelectPlaceholder
            placeholder="Min"
            options={["10000", "20000", "50000", "100000", "500000"]}
          />
        </div>
        <div className="d-flex flex-wrap input-box">
          <label className="filter-label">Budget (Max Price)</label>
          <SelectPlaceholder
            placeholder="Max"
            options={["10000", "20000", "50000", "100000", "500000"]}
          />
        </div>
        <Typography className="search-button">
          <Image src={SearchIcon} alt="share-icon" className="me-2" />
          {/* <FaSearch style={{ marginRight: "10px" }} /> */}
          Search Property
        </Typography>
      </Box>
    </Box>
  );
}
