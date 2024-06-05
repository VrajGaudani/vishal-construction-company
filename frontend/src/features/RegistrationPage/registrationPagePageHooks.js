import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function RegistrationPageHook() {
  const router = useRouter();
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Registration", url: "sign-up" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return { breadData, router };
}
