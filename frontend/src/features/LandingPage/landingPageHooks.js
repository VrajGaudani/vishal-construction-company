import { useState, useEffect } from "react";
import m2 from "../../assets/Slider images/material2.png";
import m3 from "../../assets/Slider images/material3.jpeg";
import m4 from "../../assets/Slider images/material4.png";
import slider1 from "../../assets/Slider images/slider1.jpg";
import slider2 from "../../assets/Slider images/slider2.jpg";
import slider3 from "../../assets/Slider images/slider3.jpg";
import slider4 from "../../assets/Slider images/slider4.jpg";
import slider5 from "../../assets/Slider images/slider5.jpg";
import { useMediaQuery } from "@mui/material";
import Aos from "aos";

export default function LandingPageHooks() {
  const miniScreenMatch = useMediaQuery("(max-width:1200px)");
  const sliderOfImages = [slider1, slider2, slider3, slider4, slider5];
  const sliderImagesOfMeterial = [m2, m3, m4, m2, m3];
  const [tab, setTab] = useState("sell");
  useEffect(() => {
    // window.scrollTo(0, 0);
    Aos.init();
    Aos.refresh();
  }, []);
  return {
    miniScreenMatch,
    sliderOfImages,
    sliderImagesOfMeterial,
    tab,
    setTab,
  };
}
