import * as React from "react";
import "./index.scss";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import slider1 from "../../assets/Slider images/interior.jpg";
import RightArrowIcon from "../../assets/icons/right-arrow-50.png";
import Image from "next/image";

export default function InteriorCard() {
  return (
    <Card sx={{ maxWidth: 600 }} className="interior-card-main">
      <CardMedia
        sx={{ height: 280 }}
        image={slider1.src}
        className="service-main-image"
        title="green iguana"
      >
        <Box className="Featured-label-box">
          <Typography className="Featured-label">Interior</Typography>
        </Box>
      </CardMedia>
      <CardContent style={{ padding: "15px 8px" }} className="card-Content-service">
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
      </CardContent>
    </Card>
  );
}
