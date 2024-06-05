'use client'
import { useEffect, useState } from "react";

export default function ContactUsPage() {
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Contact Us", url: "contact-us" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return { breadData };
}
