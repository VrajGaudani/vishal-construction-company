import * as React from "react";
import "./index.scss";
import { Box, Typography } from "@mui/material";
import client from "../../assets/user2.png";
import FeedbackStars from "../FeedbackStars";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <Box className="feedback-card">
      <Box className="feedback-header">
        <Box className="client-box w-75">
          <Image src={client} alt="home" className="profile-image" />
          <Box className="feedback-description">
            <Typography variant="h6" className="name">
              Jelisa Mina
            </Typography>
            <Typography variant="p" className="position">
              Project manager
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5" className="quote">
          “
        </Typography>
      </Box>
      <Typography className="feedback-text">
        {`“I highly recommend Endora agent to anyone looking to buy or sell a
        home. They are professional, reliable, and truly care about their
        clients' needs. They are professional, reliable, and truly care about
        their clients' needs.”`}
      </Typography>
      <FeedbackStars styles={{ marginTop: "10px" }} count={4} />
    </Box>
  );
}
