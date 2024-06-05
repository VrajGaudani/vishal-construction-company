"use client";
import * as React from "react";
import "./index.scss";
import { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import SelectPlaceholder from "../Select";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import HeartIcon from "@/assets/icons/heart_icon";
import UserIcon from "@/assets/icons/user_Icon";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [requestDialog, setOpenRequestDialog] = useState(false);
  const router = useRouter();
  const [drawer, setDrawer] = useState(false);
  const miniScreenMatch = useMediaQuery("(max-width:1200px)");
  const MobileScreenMatch = useMediaQuery("(max-width:600px)");
  const openDropdown = (key) => {
    setDropdown((prevDropdown) => (prevDropdown === key ? "" : key));
  };

  const closeDrawer = (props) => {
    const navigationData = props?.target?.id.split("/");
    console.log("navigationData", navigationData);
    if (navigationData[0] === "deal") {
      router.push(navigationData[0], { state: { [navigationData[1]]: true } });
    } else if (navigationData[0] === "request") {
      setOpenRequestDialog(true);
    } else {
      router.push(props.target.id);
    }
    setDrawer(false);
  };

  const handleDialogClose = () => {
    setOpenRequestDialog(false);
  };

  return (
    <Box className="main-header-component">
      <Box className="top-header d-flex">
        {!MobileScreenMatch && (
          <Box className="d-flex m-2 align-items-center top-left-header">
            <Box
              className="m-2 icons-group"
              onClick={() => {
                router.push("/");
              }}
            >
              <Image
                src={Logo?.src}
                alt="logo"
                sizes="100vw"
                width={0}
                // style={{ width: "140px", height: "90px" }}
                height={0}
                className="logo-image"
              />
              {/* <Image src={Logo} width={140} height={90} /> */}
            </Box>
          </Box>
        )}
        <Box className="d-flex flex-column w-100 justify-content-center">
          <Box className="Right-topbar my-2 d-flex justify-content-end align-items-center">
            <Typography
              id="post-property"
              onClick={closeDrawer}
              variant="span"
              className="book-online-text"
            >
              Post Property
            </Typography>
            <Typography
              id={miniScreenMatch ? "login" : "request"}
              onClick={closeDrawer}
              variant="span"
              className="book-online-text"
            >
              {miniScreenMatch ? "Log In / Register" : "Request a site visit"}
            </Typography>
            <Typography
              id="online-booking"
              onClick={closeDrawer}
              variant="span"
              className="book-online-text"
            >
              Book Online
            </Typography>
            {/* <Box className="call-box d-flex align-items-center h-100">
              <a href="tel:+91 9571647680">
                <IoCallOutline className="icon" />
                +91 9571647680
              </a>
            </Box> */}
          </Box>
          <Box className="header justify-content-between">
            {MobileScreenMatch && (
              <Image
                src={Logo?.src}
                alt="logo"
                sizes="100vw"
                width={0}
                // style={{ width: "140px", height: "90px" }}
                height={0}
                className="logo-image"
              />
            )}
            <Box
              className="d-flex justify-content-center"
              style={{ width: "calc(100% - 200px)" }}
            >
              <Box
                className={
                  miniScreenMatch ? "right-header d-none" : "right-header"
                }
              >
                <Box className="menus">
                  <span
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    Home
                  </span>
                  {["about us", "property", "service"].map((item) => (
                    <span
                      key={item}
                      className={dropdown === item ? "position-relative" : ""}
                      onClick={() => openDropdown(item)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                      <FaAngleDown />
                      {dropdown === item && (
                        <div className="dropdown">
                          {item === "about us" && (
                            <>
                              <p id="about-us/company" onClick={closeDrawer}>
                                About The Company
                              </p>
                              <p id="about-us/directors" onClick={closeDrawer}>
                                About The Directors
                              </p>
                              <p id="about-us/invest" onClick={closeDrawer}>
                                Invest With Us
                              </p>
                              <p
                                id="about-us/construction"
                                onClick={closeDrawer}
                              >
                                Construction Process
                              </p>
                            </>
                          )}
                          {item === "property" && (
                            <>
                              <p
                                onClick={() => {
                                  router.push("/deal", {
                                    state: { sell: true },
                                  });
                                }}
                              >
                                Sell
                              </p>
                              <p
                                onClick={() => {
                                  router.push("/deal", {
                                    state: { rent: true },
                                  });
                                }}
                              >
                                Rent
                              </p>
                            </>
                          )}
                          {item === "service" && (
                            <>
                              <p id="service/rent" onClick={closeDrawer}>
                                Rent
                              </p>
                              <p id="service/interior" onClick={closeDrawer}>
                                Interior
                              </p>
                              <p id="service/sell" onClick={closeDrawer}>
                                Sell
                              </p>
                              <p
                                id="service/construction"
                                onClick={closeDrawer}
                              >
                                Construction
                              </p>
                            </>
                          )}
                        </div>
                      )}
                    </span>
                  ))}
                  <span id="career" onClick={closeDrawer}>
                    Careers
                  </span>
                  <span id="finance" onClick={closeDrawer}>
                    Finance
                  </span>
                  <span id="blog" onClick={closeDrawer}>
                    Blog
                  </span>
                </Box>
              </Box>
            </Box>
            {!MobileScreenMatch && (
              <Box className="d-flex w-fit align-items-center ml-auto">
                <Typography
                  className="login-signup header-icons m-1"
                  id="login"
                  onClick={closeDrawer}
                >
                  <HeartIcon />
                  {/* <FaHeart size="19px" className="header-icons" /> */}
                </Typography>
                <Typography
                  className="login-signup header-icons m-1"
                  id="login"
                  onClick={closeDrawer}
                >
                  <UserIcon />
                  {/* <MdAccountCircle className="header-icons" size="22px" /> */}
                </Typography>
                <Typography
                  id="contact-us"
                  onClick={closeDrawer}
                  className="contact-us"
                >
                  Contact us
                </Typography>
              </Box>
            )}
            <FaBars
              size={30}
              onClick={() => {
                setDrawer(!drawer);
              }}
              color="#004D79"
              className={miniScreenMatch ? "d-inline header-baar" : "d-none"}
            />
          </Box>
        </Box>
      </Box>
      {/* <Box className="d-flex top-header ">
        <Box className="d-flex m-2 align-items-center top-left-header">

          <Box className="m-2 icons-group" onClick={() => {
            router.push("/");
          }}>
            <Image src={Logo}
              width={100}
              height={60}
            />
          </Box>
        </Box>
        <Box className="Right-topbar d-flex align-items-center">
          <Typography
            id="post-property"
            onClick={closeDrawer}
            variant="span"
            className="book-online-text"
          >
            Post Property
          </Typography>
          <Typography
            id={miniScreenMatch ? "login" : "request"}
            onClick={closeDrawer}
            variant="span"
            className="book-online-text"
          >
            {miniScreenMatch ? "Log In / Register" : "Request a site visit"}
          </Typography>
          <Typography
            id="online-booking"
            onClick={closeDrawer}
            variant="span"
            className="book-online-text"
          >
            Book Online
          </Typography>
          <Box className="call-box d-flex align-items-center h-100">
            <a href="tel:+91 9571647680">
              <IoCallOutline className="icon" />
              +91 9571647680
            </a>
          </Box>
        </Box>
      </Box>
      <Box className="header justify-content-center">
        <Box
          className={miniScreenMatch ? "right-header d-none" : " right-header"}
        >
          <Box className="menus">
            <span
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </span>
            {["aboutus", "property", "service"].map((item) => (
              <span
                key={item}
                className={dropdown === item ? "position-relative" : ""}
                onClick={() => openDropdown(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)} <FaAngleDown />
                {dropdown === item && (
                  <div className="dropdown">
                    {item === "aboutus" && (
                      <>
                        <p id="about-us/company" onClick={closeDrawer}>
                          About The Company
                        </p>
                        <p id="about-us/directors" onClick={closeDrawer}>
                          About The Directors
                        </p>
                        <p id="about-us/invest" onClick={closeDrawer}>
                          Invest With Us
                        </p>
                        <p id="about-us/construction" onClick={closeDrawer}>
                          Construction Process
                        </p>
                      </>
                    )}
                    {item === "property" && (
                      <>
                        <p
                          onClick={() => {
                            router.push("/deal", {
                              state: { sell: true },
                            });
                          }}
                        >
                          Sell
                        </p>
                        <p
                          onClick={() => {
                            router.push("/deal", {
                              state: { rent: true },
                            });
                          }}
                        >
                          Rent
                        </p>
                      </>
                    )}
                    {item === "service" && (
                      <>
                        <p id="service/rent" onClick={closeDrawer}>
                          Rent
                        </p>
                        <p id="service/interior" onClick={closeDrawer}>
                          Interior
                        </p>
                        <p id="service/sell" onClick={closeDrawer}>
                          Sell
                        </p>
                        <p id="service/construction" onClick={closeDrawer}>
                          Construction
                        </p>
                      </>
                    )}
                  </div>
                )}
              </span>
            ))}
            <span id="career" onClick={closeDrawer}>
              Careers
            </span>
            <span id="finance" onClick={closeDrawer}>
              Finance
            </span>
            <span id="blog" onClick={closeDrawer}>
              Blog
            </span>
          </Box>
          <Typography className="login-signup" id="login" onClick={closeDrawer}>
            Log In / Register
          </Typography>
          <Typography
            id="contact-us"
            onClick={closeDrawer}
            className="contact-us"
          >
            Contact us
          </Typography>
        </Box>
        <FaBars
          size={30}
          onClick={() => {
            setDrawer(!drawer);
          }}
          color="#004D79"
          className={miniScreenMatch ? "d-inline header-baar" : "d-none"}
        />
      </Box> */}
      <Drawer
        anchor="right"
        className="side-drawer"
        open={drawer}
        onClose={closeDrawer}
      >
        <Box className="side-nav-header d-flex flex-nowrap">
          <Typography className="side-nav-logo">VISHAL CONSTRUCTION</Typography>
          <RxCross2 size={22} onClick={closeDrawer} className="cross-icon" />
        </Box>
        <Box className="menus">
          <span className="header-nav-item" onClick={closeDrawer}>
            Home
          </span>
          {["aboutus", "property", "service"].map((item) => (
            <span
              key={item}
              className={
                dropdown === item
                  ? "header-nav-item dropdown-main-span"
                  : "dropdown-main-span header-nav-item"
              }
              onClick={() => openDropdown(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)} <FaAngleDown />
              {dropdown === item && (
                <div className="dropdown">
                  {item === "aboutus" && (
                    <>
                      <p id="about-us/company" onClick={closeDrawer}>
                        About The Company
                      </p>
                      <p id="about-us/directors" onClick={closeDrawer}>
                        About The Directors
                      </p>
                      <p id="about-us/invest" onClick={closeDrawer}>
                        Invest With Us
                      </p>
                      <p id="about-us/construction" onClick={closeDrawer}>
                        Construction Process
                      </p>
                    </>
                  )}
                  {item === "property" && (
                    <>
                      <p id="deal/sell" onClick={closeDrawer}>
                        Sell
                      </p>
                      <p id="deal/rent" onClick={closeDrawer}>
                        Rent
                      </p>
                    </>
                  )}
                  {item === "service" && (
                    <>
                      <p id="service/rent" onClick={closeDrawer}>
                        Rent
                      </p>
                      <p id="service/interior" onClick={closeDrawer}>
                        Interior
                      </p>
                      <p id="service/sell" onClick={closeDrawer}>
                        Sell
                      </p>
                      <p id="service/construction" onClick={closeDrawer}>
                        Construction
                      </p>
                    </>
                  )}
                </div>
              )}
            </span>
          ))}
          <span className="header-nav-item" id="career" onClick={closeDrawer}>
            Careers
          </span>
          <span className="header-nav-item" id="finance" onClick={closeDrawer}>
            Finance
          </span>
          <span className="header-nav-item" id="blog" onClick={closeDrawer}>
            Blog
          </span>
          <Typography
            variant="span"
            className="login-signup"
            id="login"
            onClick={closeDrawer}
          >
            Log In / Register
          </Typography>
          <Typography
            id="contact-us"
            onClick={closeDrawer}
            variant="span"
            className="contact-us"
          >
            Contact us
          </Typography>
        </Box>
      </Drawer>
      <Dialog
        fullWidth
        open={requestDialog}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title"
        className="request-dialog"
      >
        <DialogTitle id="responsive-dialog-title" className="dialog-header">
          {"Request a Site Visit"}
        </DialogTitle>
        <DialogContent className="dialog-content">
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="Name"
            />
          </div>
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">E-mail</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="Email"
            />
          </div>
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">Phone</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field w-100"
              placeholder="Phone"
            />
          </div>
          <div className="d-flex flex-wrap input-box w-50">
            <label className="filter-label">Choose Time</label>
            <SelectPlaceholder
              placeholder="Choose Time"
              options={["Commercial", "Residental"]}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Typography
            id="book-online"
            onClick={handleDialogClose}
            variant="span"
            className="submit-dialog-button"
          >
            Submit
          </Typography>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
