"use client";
import React from "react";
import "./index.scss";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import BreadCrumb from "@/components/Breadcrumb";
import BlogsPageHook from "./BlogsPageHooks";
import DateIcon from "../../assets/icons/calender_icon.svg";
import slider1 from "@/assets/Slider images/sec-slider5.jpg";
import Image from "next/image";
function BlogsPage() {
  const { breadData, router } = BlogsPageHook();

  const BlogCard = () => {
    return (
      <Card
        className="blog-box card-main"
        onClick={() => {
          router.push("details", { state: { data: true } });
        }}
      >
        <CardMedia
          sx={{ height: 250 }}
          image={slider1?.src}
          className="service-main-image"
          title="green iguana"
        >
          <Box className="Featured-label-box">
            <Typography className="Featured-label">Real Estate</Typography>
          </Box>
        </CardMedia>
        <CardContent className="card-Content-service">
          <Box className="description-box">
            <span className="d-flex align-items-center blog-date-section">
              {" "}
              <Image src={DateIcon} alt="share-icon" className="me-2" />
              January 31, 2024
            </span>
            <Typography variant="h6" className="h6">
              Home Is Where: Tales from the Real Estate Frontier
            </Typography>
            <Typography variant="p">
              For those of you looking for a flat on rent. This initiative is
              dedicated to connecting people to apartments of their choice.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box className="blogs-page">
      <BreadCrumb data={breadData} />
      <Container className="blogs-page-container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <Pagination
          className="mt-4 blog-pagination mx-auto"
          count={3}
          variant="outlined"
        />
      </Container>
    </Box>
  );
}
export default BlogsPage;
