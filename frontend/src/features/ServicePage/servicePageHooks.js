import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import InquiryFormImage from "../../assets/Slider images/banner-bg.jpg";
import InteriorImage from "../../assets/Slider images/interior.jpg";
import InteriorFormImage from "../../assets/Slider images/properties6.jpg";
import PropertyImage from "../../assets/Slider images/sec-slider1.jpg";
import { usePathname, useRouter } from "next/navigation";

export default function ServicePageHook() {
  const router = useRouter();
  const currentPage = usePathname();
  const miniScreenMatch = useMediaQuery("(max-width:1200px)");
  const [pageName, setPageName] = useState("Rent");
  const [pageData, setPageData] = useState({
    title: "Rent",
    heading: "Unlock Your Ideal Rental: Explore Endless Possibilities Today!",
    Description:
      "For those of you looking for a flat on rent. This initiative is dedicated to connecting people to apartments of their choice. You can choose from a variety of flats: fully furnished, uncluttered furniture, minimal furniture, etc. A wider housing network across India means finding a place. We offer our clients a wide range of Residential Accommodations, Commercial, Retail, Office, Shop, Industrial, and Warehouse Spaces to choose from in the Jaipur Area. These include ultra-modern newly built Residential Accommodations like – Independent Bungalows, Flat, luxury flat Houses, villas, Builder Floors, Multi-Storey Apartments, Society Flats, Service Apartments, Furnished Accommodation, Company Guest Houses, Paying Guests, and Commercial Spaces.Rent reserved out of land held by fealty or other corporeal service and under the common law having attached the right of distress.",
    image: PropertyImage,
    formImage: InquiryFormImage,
  });
  const [isRight, setIsRight] = useState(true);
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Service Details", url: "service/rent" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const pathName = currentPage.split("/").pop();
    if (pathName === "rent") {
      setIsRight(true);
      setPageData({
        title: "Rent",
        heading:
          "Unlock Your Ideal Rental: Explore Endless Possibilities Today!",
        Description:
          "For those of you looking for a flat on rent. This initiative is dedicated to connecting people to apartments of their choice. You can choose from a variety of flats: fully furnished, uncluttered furniture, minimal furniture, etc. A wider housing network across India means finding a place. We offer our clients a wide range of Residential Accommodations, Commercial, Retail, Office, Shop, Industrial, and Warehouse Spaces to choose from in the Jaipur Area. These include ultra-modern newly built Residential Accommodations like – Independent Bungalows, Flat, luxury flat Houses, villas, Builder Floors, Multi-Storey Apartments, Society Flats, Service Apartments, Furnished Accommodation, Company Guest Houses, Paying Guests, and Commercial Spaces.Rent reserved out of land held by fealty or other corporeal service and under the common law having attached the right of distress.",
        image: PropertyImage,
        formImage: InquiryFormImage,
      });
    } else if (pathName === "sell") {
      setIsRight(false);
      setPageData({
        title: "Sell",
        heading:
          "Unlock the potential of your property with our tailored solutions.",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris eget ornare venenatis, in. Pharetra iaculis consectetur augue venenatis enim adipiscing risus sit scelerisque. Id metus viverra tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris eget ornare venenatis, in. Pharetra iaculis consectetur augue venenatis enim adipiscing risus sit scelerisque. Id metus viverra tellus.",
        image: PropertyImage,
        formImage: InquiryFormImage,
      });
    } else if (pathName === "construction") {
      setIsRight(true);
      setPageData({
        title: "Construction",
        heading: "Elevate your space with expert construction services.",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris eget ornare venenatis, in. Pharetra iaculis consectetur augue venenatis enim adipiscing risus sit scelerisque. Id metus viverra tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris eget ornare venenatis, in. Pharetra iaculis consectetur augue venenatis enim adipiscing risus sit scelerisque. Id metus viverra tellus.",
        image: PropertyImage,
        formImage: InquiryFormImage,
      });
    } else if (pathName === "interior") {
      setIsRight(false);
      setPageData({
        title: "Interior",
        heading:
          "Transform your space with exquisite interior design solutions.",
        Description:
          "Our designers specialize in home, flat, workplace indoors designs and assist you to create a customized area to go well with your lifestyle. We are right here to assist you to discover exceptional domestic or flat decor and domestic format to healthy your wants and style.The most necessary choice you will make when it comes to indoor ornament is discovering expert and dependable professionals. At Beautiful Homes Service, we make certain your residence plan is in the arms of our panel of skilled indoors designers.We accept as true that indoors format is extra than extremely good performance and lovely aesthetics. We purpose is to make your home, flat, workplace interiors a reflection of your personality. Our efficient, custom-made home, places of work indoors design include your wants in each nook of your domestic or office, so your house meets your every requirement. Our committed domestic designers work with you tirelessly to tie your fashion with their sketch expertise, growing the ideal indoors graph plan. They will additionally make certain that the graph is accomplished by the use of the substances of the easiest standards. In addition to fantastic indoors format ideas, get a free estimate or an e-book for a free session with our indoors graph group for lovely domestic interiors.",
        formImage: InteriorImage,
        image: InteriorFormImage,
      });
    }
    setPageName(pathName.charAt(0).toUpperCase() + pathName.slice(1));
  }, [currentPage]);
  return { breadData, router, pageName, miniScreenMatch, isRight, pageData };
}
