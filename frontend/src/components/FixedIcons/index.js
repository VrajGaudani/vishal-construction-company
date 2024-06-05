"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { useState } from "react";
import talkIcon from "@/assets/icons/icons8-talk-30.png";
import WPIcon from "@/assets/icons/icons8-whatsapp-48.png";
import "./index.scss";
import FBIcon from "@/assets/icons/fb_Icon";
import TWIcon from "@/assets/icons/tw_Icon";
import GoogleIcon from "@/assets/icons/google_Icon";
import InstaIcon from "@/assets/icons/InstaIcon";

const FixedIcons = () => {
  const [socialIcons, setSocialIcons] = useState(false);
  return (
    <>
      <div
        className={
          socialIcons
            ? "text-center text-md-end bg-light p-2 rounded position-fixed social-icons-box"
            : "text-center text-md-end bg-light p-2 rounded-circle position-fixed social-icons-box"
        }
        style={{ width: "fit-content" }}
      >
        <Image
          src={talkIcon}
          alt="home"
          className="social-media"
          onClick={() => setSocialIcons(!socialIcons)}
        />
        {socialIcons && (
          <>
            <a className="btn btn-outline-dark social-icons ms-2" role="button">
              {/* <FaFacebookF /> */}
              <FBIcon />
              {/* <Image src={FBIcon} alt="share-icon" className="social-icon" /> */}
            </a>

            <a className="btn btn-outline-dark social-icons " role="button">
              {/* <FaTwitter /> */}
              {/* <Image
                src={TweeterIcon}
                alt="share-icon"
                className="social-icon"
              /> */}
              <TWIcon />
            </a>

            <a className="btn btn-outline-dark social-icons" role="button">
              {/* <GrGoogle /> */}
              <GoogleIcon />
            </a>

            <a className="btn btn-outline-dark social-icons " role="button">
              {/* <FaInstagram /> */}
              <InstaIcon />
            </a>
          </>
        )}
      </div>
      <div
        className="text-center text-md-end bg-transparent rounded-circle position-fixed wp-icon"
        style={{ width: "fit-content" }}
      >
        <Image src={WPIcon} alt="home" className="social-media" />
      </div>
    </>
  );
};
export default FixedIcons;
