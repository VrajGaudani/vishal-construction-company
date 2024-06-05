import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SeachingPageHook() {
  const router = useRouter();
  const { state } = useParams();
  const [pageHeading, setPageHeading] = useState(state?.sell ? "sell" : "rent");
  const handleChange = (value) => {
    setPageHeading(value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setPageHeading(state?.sell ? "sell" : "rent");
  }, [state]);

  return { router, pageHeading, handleChange };
}
