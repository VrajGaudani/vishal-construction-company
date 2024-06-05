import * as React from "react";
import "./index.scss";
import { FaLocationArrow, FaRegCalendarAlt } from "react-icons/fa";
import { Box, Typography } from "@mui/material";
import LocationIcon from "../../assets/icons/location_Icon.svg";
import DateIcon from "../../assets/icons/calender_icon.svg";
import Image from "next/image";

export default function CareerBox({handleApply}) {
  return (
    <Box className="Career-box w-100 d-flex flex-wrap justify-content-between align-items-center">
      <Box className="w-75 d-flex flex-wrap description-side">
        <h4 className="">Health & Safety Professional</h4>
        <Typography className="sub-label mb-0 h-fitcontent">
          10 Position
        </Typography>
        <span className="opning-position text-start">Management</span>
        <Box className="d-flex icons-box">
          <Image src={DateIcon} alt="share-icon" className="me-2" />
          <span className="feature-number">5</span>
        </Box>
        <Box className="d-flex icons-box">
          <Image src={LocationIcon} alt="share-icon" className="me-2" />
          {/* <FaLocationArrow color="" className="" size={19} /> */}
          <span className="feature-number">Jaipur</span>
        </Box>
      </Box>
      <Typography className="apply-now-button" onClick={handleApply}>APPLY NOW</Typography>
    </Box>
  );
}
