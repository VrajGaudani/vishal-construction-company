import * as React from "react";
import "./index.scss";
import { Box } from "@mui/material";
import { FaStar } from "react-icons/fa6";

export default function FeedbackStars({count,styles}) {
  const activeStar = count?Array(count).fill("1"):[];
  const totalStars = Array(5).fill({}).map((i,index)=>({no:index+1,active:activeStar.length>=index+1?true:false}))
  return (
    <Box className="star-box" style={styles}>
      {totalStars.map((item,index)=>(
        <FaStar key={index+1} size={22} className={item.active?"active star":"not-active star"} />
      ))}
    </Box>
  );
}
