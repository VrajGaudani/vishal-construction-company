"use client";
import React from "react";
import "./index.scss";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import BreadCrumb from "../../components/Breadcrumb";
import DetailedBlogPageHook from "./DetailedBlogPageHooks";
import BlogImage from "../../assets/Slider images/slider3.jpg";
import Blog2Image from "../../assets/Slider images/rent-sell.jpg";
import RecentBlogImage from "../../assets/Slider images/interior.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import DateIcon from "../../assets/icons/calender_icon.svg";
import Image from "next/image";
import FBIcon from "@/assets/icons/fb_Icon";
import InstaIcon from "@/assets/icons/InstaIcon";
import TWIcon from "@/assets/icons/tw_Icon";
import LinkedinIcon from "@/assets/icons/Linkedin_Icon";

function DetailedBlogPage() {
  const { breadData, router } = DetailedBlogPageHook();

  const RecentPostBox = ({ title, date, image }) => {
    return (
      <Box
        className="recent-post"
        onClick={() => {
          router.push("/blog/details");
        }}
      >
        <div
          className="recent-post-image"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${image.src})`,
          }}
        ></div>
        <Box className="d-flex flex-wrap recent-post-desc">
          <h5>{title}</h5>
          <span className="d-flex align-items-center blog-date-section">
            {" "}
            <Image src={DateIcon} alt="share-icon" className="me-2" /> {date}
          </span>
        </Box>
      </Box>
    );
  };

  return (
    <Box className="detail-blog-page">
      <BreadCrumb data={breadData} />
      <Container className="detail-blog-container">
        <Box className="left-container text-start">
          <Box
            className="blog-image"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${BlogImage.src})`,
            }}
          ></Box>
          <Box className="card-Content-service">
            <Box className="description-box">
              <Box className="blog-sub-label">
                <span className="d-flex align-items-center blog-date-section">
                  {" "}
                  <Image
                    src={DateIcon}
                    alt="share-icon"
                    className="me-2"
                  />{" "}
                  January 31, 2024
                </span>
                <Box className="Featured-label-box">
                  <Typography className="Featured-label">Featured</Typography>
                </Box>
              </Box>
              <Typography variant="h6" className="h6">
                Home Is Where: Tales from the Real Estate Frontier
              </Typography>
              <Typography variant="p">
                {
                  "For those of you looking for a flat on rent. This initiative is dedicated to connecting people to apartments of their choice.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &ldquo;Lorem ipsum dolor sit amet..&rdquo;, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                }
              </Typography>
              <Typography variant="p">
                {
                  "For those of you looking for a flat on rent. This initiative is dedicated to connecting people to apartments of their choice.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero<br /> written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &ldquo;Lorem ipsum dolor sit amet..&rdquo;, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                }
              </Typography>
            </Box>
          </Box>
          <Box className="tags-and-share d-flex align-items-center justify-content-between">
            <Box className="tags d-flex align-items-center">
              <Typography className="tag-label">Tags: </Typography>
              <Typography className="Featured-label">Agent</Typography>
              <Typography className="Featured-label">Building</Typography>
            </Box>
            <Box className="share d-flex align-items-center">
              <Typography className="tag-label">Social Share: </Typography>
              <Box className="icons-group d-flex">
                <div className="s-icons">
                  <FBIcon isCustom={"#ee8824"} />
                </div>
                <div className="s-icons">
                  <InstaIcon isCustom={"#ee8824"} />
                </div>
                <div className="s-icons">
                  <TWIcon isCustom={"#ee8824"} />
                </div>
                <div className="s-icons">
                  <LinkedinIcon isCustom={"#ee8824"} />
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="right-container">
          <div className="d-flex flex-wrap input-box w-100">
            <label className="filter-label">Search Here...</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="Enter your name..."
            />
          </div>
          <Box className="recent-posts-box">
            <Typography variant="h6" className="h6">
              Recent posts
            </Typography>
            <RecentPostBox
              date={"January 31, 2024"}
              image={RecentBlogImage}
              title={"Concrete Dreams: Building Wealth Through Real Estate"}
            />
            <RecentPostBox
              date={"January 31, 2024"}
              image={Blog2Image}
              title={"Building Wealth Through Real Estate"}
            />
            <RecentPostBox
              date={"January 31, 2024"}
              image={RecentBlogImage}
              title={"Wealth Through Real Estate"}
            />
            <RecentPostBox
              date={"January 31, 2024"}
              image={Blog2Image}
              title={"Concrete Dreams: Building Wealth Through"}
            />
            <RecentPostBox
              date={"January 31, 2024"}
              image={RecentBlogImage}
              title={"Through Real Estate Concrete Dreams"}
            />
            <RecentPostBox
              date={"January 31, 2024"}
              image={Blog2Image}
              title={"Concrete Through Real Estate"}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default DetailedBlogPage;
