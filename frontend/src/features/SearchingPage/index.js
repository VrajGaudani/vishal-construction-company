"use client";
import React, { useState } from "react";
import "./index.scss";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import SeachingPageHook from "./seachingPageHook";
import FilterSection from "../../components/FilterSection";
import slider1 from "../../assets/Slider images/properties6.jpg";
import { FaShareNodes } from "react-icons/fa6";
import ShareIcon from "../../assets/icons/Share_icon.svg";
import { IoBed } from "react-icons/io5";
import { TbBathFilled } from "react-icons/tb";
import { FaExternalLinkSquareAlt, FaParking } from "react-icons/fa";
import Image from "next/image";

function SeachingPage() {
  const { router, pageHeading, handleChange } = SeachingPageHook();

  return (
    <Box className="rent-sell-page">
      <FilterSection value={pageHeading} onChange={handleChange} />
      <Box maxWidth="xs" className="container deals-box">
        <Box className="" onClick={() => router.push("/property")}>
          <Card className="card-main">
            <CardMedia
              image={slider1.src}
              title="green iguana"
              className="card-media"
            >
              <Box className="Featured-label-box">
                <Typography className="Featured-label">Featured</Typography>
              </Box>
            </CardMedia>
            <CardContent style={{ padding: "25px" }} className="card-Content">
              <Box className="options-box">
                <Box className="share-box mt-0 pt-0 mb-4">
                  <Box className="Featured-label-box ps-0 pb-0">
                    <Typography className="Featured-label me-3 d-inline">
                      New Construction
                    </Typography>
                    <Typography className="Featured-label">
                      Vacation & Resort
                    </Typography>
                  </Box>
                  <Box className="share">
                    <Image
                      src={ShareIcon}
                      alt="share-icon"
                      className="share-icon"
                    />
                  </Box>
                </Box>
                <Box className="options-description">
                  <Typography variant="h6" className="h6">
                    Single-Family Homes
                  </Typography>
                  <Typography variant="p" className="span">
                    We have the best properties Sale.
                  </Typography>
                </Box>
              </Box>
              <Box className="features-box">
                <div className="diffrent-field">
                  <IoBed className="features-icon" size="20" color="white" />
                  <span className="numbers-feature">2</span>
                </div>
                <div className="diffrent-field">
                  <TbBathFilled
                    className="features-icon"
                    size="20"
                    color="white"
                  />
                  <span className="numbers-feature">4</span>
                </div>
                <div className="diffrent-field">
                  <FaParking
                    className="features-icon"
                    size="20"
                    color="white"
                  />
                  <span className="numbers-feature">1</span>
                </div>
                <div className="diffrent-field">
                  <FaExternalLinkSquareAlt
                    className="features-icon"
                    size="20"
                    color="white"
                  />
                  <span className="numbers-feature">4000</span>
                </div>
              </Box>
              <Box className="share-box">
                <Typography className="username">Endora</Typography>
                <Typography className="price">$77,000.00</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          data not found
        </Box> */}
      </Box>
    </Box>
  );
}
export default SeachingPage;
