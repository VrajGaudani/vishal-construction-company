import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function BlogsPageHook() {
  const router = useRouter();
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Our Blogs", url: "blog" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return { breadData, router };
}
