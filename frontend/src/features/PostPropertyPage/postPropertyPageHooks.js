import { useMediaQuery } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PostPropertyPageHook() {
  const router = useRouter();
  const currentPage = useParams();
  const [clientData, setClientData] = useState({ clientType: "Owner" });
  const [propertyType, setPropertyType] = useState([]);
  const [totalFlatCount, setTotalFlatCount] = useState([]);
  const [otherSelects, setOtherSelects] = useState({});
  const [radioButtonData, setRadioButtonData] = useState({possession_status:"under_construction"});
  const miniScreenMatch = useMediaQuery("(max-width:1200px)");
  const [breadData, setBreadData] = useState([
    { pagename: "Home", url: "/" },
    { pagename: "Post Property", url: "post-property" },
  ]);
  const onTypeChange = (props) => {
    setClientData({ ...clientData, clientType: props.target.id });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectChange = (event) => {
    const { value, name } = event.target;
    if (name === "property_type") {
      setPropertyType([value]);
    }else if(name === "total_flats"){
      setTotalFlatCount([value]);
    }else{
      setOtherSelects({...otherSelects,[name]:[value]})
    }
  };

  const handleRadioChange = (event) => {
    const {name,value} = event.target;
    setRadioButtonData({...radioButtonData,[name]:value})
  }

  return {
    breadData,
    router,
    miniScreenMatch,
    onTypeChange,
    clientData,
    handleSelectChange,
    propertyType,
    totalFlatCount,
    otherSelects,
    handleRadioChange,
    radioButtonData,
  };
}
