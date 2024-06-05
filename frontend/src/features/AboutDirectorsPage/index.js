"use client";
import React, { useState } from "react";
import "./index.scss";
import { Box, Grid, Typography } from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import AboutDirectorsPageHook from "./aboutDirectorsPageHooks";
import AboutImage from "../../assets/Slider images/property-about.jpg";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";
import FBIcon from "@/assets/icons/fb_Icon";
import InstaIcon from "@/assets/icons/InstaIcon";
import TWIcon from "@/assets/icons/tw_Icon";
import GoogleIcon from "@/assets/icons/google_Icon";
import FIcon from "@/assets/icons/F_icon";
import LinkedinIcon from "@/assets/icons/Linkedin_Icon";
import BallIcon from "@/assets/icons/ball_Icon";

function AboutDirectorsPage() {
  const { breadData, router, pageName, miniScreenMatch } =
    AboutDirectorsPageHook();

  return (
    <Box className="aboutdirectors-page">
      <BreadCrumb data={breadData} />
      <Grid container spacing={2} className="client-box container mx-auto">
        <Grid xs={12} md={6} lg={4} className="image-box">
          <Box
            className="main-image w-100 h-100"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "5px",
              backgroundImage: `url(${AboutImage.src})`,
            }}
          ></Box>
        </Grid>
        <Grid xs={12} md={6} lg={8} className="desc-box">
          <h4>Manoj Kumar Sharma</h4>
          <span className="job-label">Directer</span>
          <p>
            Manoj Kumar Sharma is a director of Vishal Construction Company, a
            backbone of Vishal construction company. Today Vishal Construction
            Company is a famous name in the real estate business in Jaipur.
            Manoj Kumar Sharma is a director of Vishal Construction Company, a
            backbone of Vishal construction company. Today Vishal Construction
            Company is a famous name in the real estate business in Jaipur. And
            this has been due to all the quality standards we follow, the ethics
            and values ​​we carry with us and in addition, the professional team
            has equal liability for what we are today. He has experience in the
            real estate industry like Retail and Construction. Manoj has a
            lovable personality that lends itself to building lasting
            relationships with suppliers and customers. His goal is to build
            dreams instead of concrete houses, apartments, or villas, a Flat in
            Jaipur as you imagine it as a dream and take care of those who will
            live in those buildings. Also, it is very important as people invest
            a lot of money to buy properties. Our team is our property, and our
            clients are our partners. Working together, building relationships,
            and housing and commercial buildings are what we strive to do. This
            is our path and mantra of happiness, happiness, and success in
            whatever we do.
          </p>
          <Box className="icons-group d-flex">
            <div className="s-icons">
              <FBIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <InstaIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <TWIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <GoogleIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <FIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <LinkedinIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <BallIcon isCustom={"#000000"} />
            </div>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="client-box container mx-auto">
        <Grid xs={12} md={6} lg={8} className="desc-box">
          <h4>Manoj Kumar Sharma</h4>
          <span className="job-label">Directer</span>
          <p>
            Manoj Kumar Sharma is a director of Vishal Construction Company, a
            backbone of Vishal construction company. Today Vishal Construction
            Company is a famous name in the real estate business in Jaipur.
            Manoj Kumar Sharma is a director of Vishal Construction Company, a
            backbone of Vishal construction company. Today Vishal Construction
            Company is a famous name in the real estate business in Jaipur. And
            this has been due to all the quality standards we follow, the ethics
            and values ​​we carry with us and in addition, the professional team
            has equal liability for what we are today. He has experience in the
            real estate industry like Retail and Construction. Manoj has a
            lovable personality that lends itself to building lasting
            relationships with suppliers and customers. His goal is to build
            dreams instead of concrete houses, apartments, or villas, a Flat in
            Jaipur as you imagine it as a dream and take care of those who will
            live in those buildings. Also, it is very important as people invest
            a lot of money to buy properties. Our team is our property, and our
            clients are our partners. Working together, building relationships,
            and housing and commercial buildings are what we strive to do. This
            is our path and mantra of happiness, happiness, and success in
            whatever we do.
          </p>
          <Box className="icons-group d-flex">
            <div className="s-icons">
              <FBIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <InstaIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <TWIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <GoogleIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <FIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <LinkedinIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <BallIcon isCustom={"#000000"} />
            </div>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={4} className="image-box">
          <Box
            className="main-image w-100 h-100"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "5px",
              backgroundImage: `url(${AboutImage.src})`,
            }}
          ></Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="client-box container mx-auto">
        <Grid xs={12} md={6} lg={4} className="image-box">
          <Box
            className="main-image w-100 h-100"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "5px",
              backgroundImage: `url(${AboutImage.src})`,
            }}
          ></Box>
        </Grid>
        <Grid xs={12} md={6} lg={8} className="desc-box">
          <h4>Manoj Kumar Sharma</h4>
          <span className="job-label">Directer</span>
          <p>
            Manoj Kumar Sharma is a director of Vishal Construction Company, a
            backbone of Vishal construction company. Today Vishal Construction
            Company is a famous name in the real estate business in Jaipur.
            Manoj Kumar Sharma is a director of Vishal Construction Company, a
            backbone of Vishal construction company. Today Vishal Construction
            Company is a famous name in the real estate business in Jaipur. And
            this has been due to all the quality standards we follow, the ethics
            and values ​​we carry with us and in addition, the professional team
            has equal liability for what we are today. He has experience in the
            real estate industry like Retail and Construction. Manoj has a
            lovable personality that lends itself to building lasting
            relationships with suppliers and customers. His goal is to build
            dreams instead of concrete houses, apartments, or villas, a Flat in
            Jaipur as you imagine it as a dream and take care of those who will
            live in those buildings. Also, it is very important as people invest
            a lot of money to buy properties. Our team is our property, and our
            clients are our partners. Working together, building relationships,
            and housing and commercial buildings are what we strive to do. This
            is our path and mantra of happiness, happiness, and success in
            whatever we do.
          </p>
          <Box className="icons-group d-flex">
            <div className="s-icons">
              <FBIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <InstaIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <TWIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <GoogleIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <FIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <LinkedinIcon isCustom={"#000000"} />
            </div>
            <div className="s-icons">
              <BallIcon isCustom={"#000000"} />
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default AboutDirectorsPage;
