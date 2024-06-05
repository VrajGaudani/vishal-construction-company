import * as React from "react";
import "./index.scss";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import slider1 from "../../assets/Slider images/sec-slider5.jpg";
import RightArrowIcon from "../../assets/icons/right-arrow-50.png";
import Image from "next/image";
import RightArrow from "@/assets/icons/RightArrowIcon";

export default function ServiceCard() {
  return (
    <Card sx={{ maxWidth: 600 }} className="card-main">
      <CardMedia
        sx={{ height: 280 }}
        image={slider1.src}
        className="service-main-image"
        title="green iguana"
      >
        <Box className="Featured-label-box">
          <Typography className="Featured-label">Architecture</Typography>
        </Box>
      </CardMedia>
      <CardContent className="card-Content-service">
        <Box className="description-box">
          <Typography variant="h6" className="h6">
            Concrete Dreams: Building Wealth Through Real Estate
          </Typography>
          <Typography variant="p">
            For those of you looking for a flat on rent. This initiative is
            dedicated to connecting people to apartments of their choice. You
            can choose
          </Typography>
        </Box>
        <div className="read-more">
          <h3>Read More</h3>
          <RightArrow />
          {/* <Image src={RightArrowIcon} alt="arrow" /> */}
        </div>
      </CardContent>
    </Card>
  );
}
