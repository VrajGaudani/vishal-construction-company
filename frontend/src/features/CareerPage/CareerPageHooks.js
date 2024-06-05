import { useEffect, useState } from "react";

export default function CareerPageHook() {
  const [applyDialog, setApplyDialog] = useState(false);
  const handleDialogClose = () => {
    setApplyDialog(false);
  };
  const handleDialogOpen = () => {
    setApplyDialog(true);
  };
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Career", url: "career" },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return { breadData, handleDialogClose, applyDialog, handleDialogOpen  };
}
