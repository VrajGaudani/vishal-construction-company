import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import m2 from "../../assets/Slider images/material2.png";
import m3 from "../../assets/Slider images/material3.jpeg";
import m4 from "../../assets/Slider images/material4.png";

export default function BookOnlinePageHook() {
  const miniScreenMatch = useMediaQuery("(max-width:1200px)");
  const sliderImagesOfPartners = [m2, m3, m4, m2, m3];
  const [formValues, setFormValue] = useState({});
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Online Booking", url: "online-booking" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue = (name === "property_type" || name === "property_name") ? [value] : value;
    setFormValue(prevFormValues => ({
      ...prevFormValues,
      [name]: newValue
    }));
  };

  return { breadData, miniScreenMatch, sliderImagesOfPartners, handleChange, formValues };
}
