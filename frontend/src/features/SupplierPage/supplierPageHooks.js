import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import InquiryFormImage from "../../assets/Slider images/banner-bg.jpg";
import InteriorImage from "../../assets/Slider images/interior.jpg";
import InteriorFormImage from "../../assets/Slider images/properties6.jpg";
import PropertyImage from "../../assets/Slider images/sec-slider1.jpg";
import { useParams, useRouter } from "next/navigation";

export default function SupplierPageHook() {
  const router = useRouter();
  const location = useParams();
  const miniScreenMatch = useMediaQuery("(max-width:1200px)");
  const [pageName, setPageName] = useState("Supplier");
  const [pageData, setPageData] = useState({
    title: "Supplier Form",
    heading: "A Form to Fill Supplier Details",
    Description:
      "For those of you looking for a flat on rent. This initiative is dedicated to connecting people to apartments of their choice. You can choose from a variety of flats: fully furnished, uncluttered furniture, minimal furniture, etc. A wider housing network across India means finding a place. We offer our clients a wide range of Residential Accommodations, Commercial, Retail, Office, Shop, Industrial, and Warehouse Spaces to choose from in the Jaipur Area. These include ultra-modern newly built Residential Accommodations like – Independent Bungalows, Flat, luxury flat Houses, villas, Builder Floors, Multi-Storey Apartments, Society Flats, Service Apartments, Furnished Accommodation, Company Guest Houses, Paying Guests, and Commercial Spaces.Rent reserved out of land held by fealty or other corporeal service and under the common law having attached the right of distress.",
    image: PropertyImage,
    formImage: InquiryFormImage,
  });
  const [isRight, setIsRight] = useState(true);
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Supplier Form", url: "supplier-form" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return { breadData, router, pageName, miniScreenMatch, isRight, pageData };
}