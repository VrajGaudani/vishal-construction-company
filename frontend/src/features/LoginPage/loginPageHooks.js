import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPageHook() {
  const [IsForgot, setIsForgot] = useState(false);
  const router = useRouter();
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Login", url: "login" },
  ]);

  const handleForgetPassword = () => {
    breadData[1].pagename = "Forget Password";
    setIsForgot(true);
  };

  const handleBacktoLogin = () => {
    breadData[1].pagename = "Login";
    setIsForgot(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return {
    breadData,
    IsForgot,
    handleForgetPassword,
    handleBacktoLogin,
    router,
  };
}
