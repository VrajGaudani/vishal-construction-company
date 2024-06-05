import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import m2 from "../../assets/Slider images/material2.png";
import m3 from "../../assets/Slider images/material3.jpeg";
import m4 from "../../assets/Slider images/material4.png";

export default function FinancePageHook() {
  const miniScreenMatch = useMediaQuery("(max-width:1200px)");
  const sliderImagesOfPartners = [m2, m3, m4, m2, m3];
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Finance", url: "finance" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return { breadData, miniScreenMatch, sliderImagesOfPartners };
}
