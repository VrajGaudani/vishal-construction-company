'use client'
import React, { useState } from "react";
import "./index.scss";
import { Box, Grid, Typography } from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import AboutUsPageHook from "./aboutUsPageHooks";
import AboutImage from "../../assets/Slider images/property-about.jpg";
import RentHouseImage from "../../assets/Slider images/sec-slider.jpg";
import RightArrowIcon from "../../assets/icons/right-arrow-50.png";
import CuntructionIcon from "../../assets/icons/icons8-constructing-100.png";
import FurnitureIcon from "../../assets/icons/icons8-furniture-100.png";
import HousingIcon from "../../assets/icons/icons8-housing-100.png";
import Image from "next/image";

function AboutUsPage() {
  const { breadData, router, pageName, miniScreenMatch } = AboutUsPageHook();

  return (
    <Box className="aboutus-page">
      <BreadCrumb data={breadData} />
      <Grid container spacing={2} className="container why-us-section mx-auto">
        <Grid lg={3} xs={12} sm={6}className="heading-box">
          <Typography className="sub-label">Bricks And Clicks</Typography>
          <h1>
            Why Choose
            <br /> VISHAL CONSTRUCTION
          </h1>
          <hr />
        </Grid>
        <Grid lg={3} xs={12} sm={6} className="heading-box image-box">
          <Image src={HousingIcon} alt="house" className="image" />
          <h4>Historic Properties</h4>
          <p>
            Within the worn walls of these old houses are whispers of times long
            since passed.
          </p>
        </Grid>
        <Grid lg={3} xs={12} sm={6}className="heading-box image-box">
          <Image src={FurnitureIcon} alt="furniture" className="image" />
          <h4>Furniture Includes</h4>
          <p>
            Furniture includes a mix of vintage and modern pieces, imbuing the
            space with unique character.
          </p>
        </Grid>
        <Grid lg={3} xs={12} sm={6} className="heading-box image-box">
          <Image src={CuntructionIcon} alt="cunstruction" className="image" />
          <h4>Architecture Design</h4>
          <p>
            Exemplifying the pinnacle of architectural design, it stands as one
            of the finest.
          </p>
        </Grid>
      </Grid>
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
            backgroundImage: `url(${AboutImage.src})`,
          }}
        ></Box>
        <Box className="about-desc">
          <Typography className="sub-label">
            ABOUT VISHAL CONSTRUCTION COMPANY
          </Typography>
          <h4>{`WE'VE BEEN CREATING AWESOME SINCE 1994`}</h4>
          <p className="p">
            At Vishal Construction Company, we always think ahead but our focus
            remains unerringly on delighting our customers and stakeholders.
            Functioning through an array of best-of-class practices and
            utilizing leading technologies, we at Vishal Construction Company
            believe either in staying ahead of the wave or riding it. If you are
            looking at blank cassettes on the web lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod...
          </p>
          <div className="read-more">
            <h3>Read More</h3>
            <Image src={RightArrowIcon} alt="arrow" />
          </div>
        </Box>
      </Box>
      <Box
        className={
          miniScreenMatch ? "container-fluid rent-section" : "rent-section"
        }
      >
        <Box className="rent-desc">
          <Typography className="sub-label">Beyond Brick and Mortar</Typography>
          <h4>Where Vision Meets Realty Crafting Your Perfect Home</h4>
          <p className="p">
            At Vishal Construction Company, we always think ahead but our focus
            remains unerringly on delighting our customers and stakeholders.
            Functioning through an array of best-of-class practices and
            utilizing leading technologies, we at Vishal Construction Company
            believe either in staying ahead of the wave or riding it. If you are
            looking at blank cassettes on the web lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod...
          </p>
          <div className="read-more">
            <h3>Rent A Home</h3>
            <p>
              Extensive upgrades and thorough maintenance have kept this home in
              prime condition. Hardwood floors and new carpets create a very
              comfortable living space.
            </p>
            <Image src={RightArrowIcon} alt="arrow" />
          </div>
        </Box>
        <Box
          className="rent-image"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: `url(${RentHouseImage.src})`,
          }}
        ></Box>
      </Box>
    </Box>
  );
}
export default AboutUsPage;
