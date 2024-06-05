import { useMediaQuery } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AboutUsPageHook() {
  const router = useRouter();
  const currentPage = usePathname();
  const miniScreenMatch = useMediaQuery("(max-width:1200px)");
  const [pageName, setPageName] = useState("about-us");
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "About us", url: "sign-up" },
  ]);
  useEffect(() => {
    
    const pathName = currentPage.split("/").pop();
    if (pathName === "directors") {
      breadData[1].pagename = "About Directors";
    } else if (pathName === "company") {
      breadData[1].pagename = "About us";
    } else if (pathName === "construction") {
      breadData[1].pagename = "Construction Process";
    }
    setPageName(pathName);
  }, [currentPage]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("location.pathname.split().pop()", pageName);
  return { breadData, router, pageName, miniScreenMatch };
}
