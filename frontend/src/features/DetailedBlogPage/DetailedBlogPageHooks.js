import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailedBlogPageHook() {
  const router = useRouter();
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    {
      pagename:
        "Home Is Where the Blog Is: Tales from the Real Estate Frontier",
      url: "contact-us",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return { breadData, router };
}
