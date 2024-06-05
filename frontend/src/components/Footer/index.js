"use client";
import * as React from "react";
import "./index.scss";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import Image from "next/image";
import Logo from "@/assets/vishal-logo.png";
import FBIcon from "@/assets/icons/fb_Icon";
import TWIcon from "@/assets/icons/tw_Icon";
import GoogleIcon from "@/assets/icons/google_Icon";
import InstaIcon from "@/assets/icons/InstaIcon";

export default function Footer() {
  const router = useRouter();
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    init && (
      <Box className="footer-container">
        <Particles
          id="tsparticles"
          className="particle-js-section"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <footer className="text-center text-lg-start text-white">
          <div className="container pt-4 pb-0 px-0">
            <section className="">
              <div className="row w-100">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 contact-col-footer">
                  <h6 className="text-uppercase mb-4 font-weight-bold company-name">
                    <Image
                      src={Logo?.src}
                      alt="logo"
                      sizes="100vw"
                      width={0}
                      // style={{ width: "140px", height: "90px" }}
                      height={0}
                      className="logo-image"
                    />
                  </h6>
                  <p className="sub-texts">
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                  <h6 className="text-uppercase mb-1 font-weight-bold footer-headings">
                    NEWSLETTER
                  </h6>
                  <p className="sub-labels">
                    Subscribe your email to get the latest news and new offer
                    also discount
                  </p>
                  <div className="d-flex justify-content-start">
                    <div className="input-group w-auto">
                      <input
                        type="text"
                        className="form-control footer-input"
                        placeholder="Email"
                        aria-label="Example input"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn footer-button"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 contact-col-footer">
                  <h6 className="text-uppercase mb-4 font-weight-bold footer-headings">
                    Products
                  </h6>
                  <div>
                    <p
                      onClick={() => {
                        router.push("service/rent");
                      }}
                      className="sub-labels footer-links"
                    >
                      Rent
                    </p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        router.push("service/sell");
                      }}
                      className="sub-labels footer-links"
                    >
                      Sell
                    </p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        router.push("contact-us");
                      }}
                      className="sub-labels footer-links"
                    >
                      Contact
                    </p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        router.push("supplier-form");
                      }}
                      className="sub-labels footer-links"
                    >
                      Supplier Form
                    </p>
                  </div>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 contact-col-footer">
                  <h6 className="text-uppercase mb-4 font-weight-bold footer-headings">
                    Useful links
                  </h6>
                  <div>
                    <p
                      onClick={() => {
                        router.push("/");
                      }}
                      className="sub-labels footer-links"
                    >
                      Home
                    </p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        router.push("about-us/company");
                      }}
                      className="sub-labels footer-links"
                    >
                      About Us
                    </p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        router.push("/deal", {
                          state: { sell: true },
                        });
                      }}
                      className="sub-labels footer-links"
                    >
                      Properties
                    </p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        router.push("blog");
                      }}
                      className="sub-labels footer-links"
                    >
                      Blog
                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 contact-col-footer">
                  <h6 className="text-uppercase mb-4 font-weight-bold footer-headings">
                    Contact
                  </h6>
                  <p className="sub-labels">
                    9-A, Brij Vatika, 7 No. Bus Stand, Mahal Road, Jagatpura
                    Jaipur Rajasthan - 302017
                  </p>
                  <p className="sub-labels footer-links">
                    info@vishalconstructioncompany.com
                  </p>
                  <p className="sub-labels footer-links"> +91 95716 47680</p>
                  <p className="sub-labels"> Mon - Sun, 08 AM - 06 PM</p>
                </div>
              </div>
            </section>

            <hr className="my-3 mx-auto" />

            <section className="p-3 pt-0 pb-4">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 col-lg-7 text-center text-md-start">
                  <div className="p-3">
                    © 2021 Software & Technologies Pvt. Ltd All Right Reserved
                  </div>
                </div>

                <div className="col-md-6 col-lg-5 ml-lg-0 text-center text-md-end d-flex justify-content-end">
                  <a
                    className="btn btn-outline-light social-icons "
                    role="button"
                  >
                    <FBIcon isCustom={"#ffffff"} />
                  </a>

                  <a
                    className="btn btn-outline-light social-icons "
                    role="button"
                  >
                    <TWIcon isCustom={"#ffffff"} />
                  </a>

                  <a
                    className="btn btn-outline-light social-icons"
                    role="button"
                  >
                    <GoogleIcon isCustom={"#ffffff"} />
                  </a>

                  <a
                    className="btn btn-outline-light social-icons "
                    role="button"
                  >
                    <InstaIcon isCustom={"#ffffff"} />
                  </a>
                </div>
              </div>
            </section>
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="text-center text-sm-start">
                  <p className="p-1 ps-3 seo-texts">
                    Vishal Cunstructions Ltd offers 2/3/4 BHK flats in Jaipur,
                    Bikaner, Alwar, Jhunjhunu and Goa. Our portfolio includes
                    affordable flats, luxurious apartments and plots which make
                    them one of the most preferred builders in the town. Apart
                    from flats & plots, they also offer commercial properties in
                    Jaipur at prime locations. While keeping quality of
                    construction and customer satisfaction in mind, the company
                    focuses on delivering excellence and true value for money.
                  </p>
                </div>
                <div className="text-center text-sm-start">
                  <p className="p-1 ps-3 seo-texts">
                    <span className="seo-section-title">
                      Properties in Jaipur:
                    </span>{" "}
                    Flats In Jaipur | Plots In Jaipur | Villas In Jaipur | 2 Bhk
                    Apartments In Jaipur | Property In Jaipur | 3 Bhk Apartments
                    In Jaipur | Office Space In Jaipur | Commercial Properties
                    In Jaipur | Industrial Plots In Jaipur Properties in Goa:
                    Flats In Goa | 1 BHK Flats In Goa | 2 Bhk Flats In Goa
                    Properties in Udaipur: Flats In Udaipur | 2 Bhk Apartments
                    In Udaipur | 3 Bhk Apartments In Udaipur | Office Space In
                    Udaipur Properties in Bikaner: Villas In Bikaner | Plots In
                    Bikaner Other Properties: Flats In Jhunjhunu | Plots In
                    Alwar | Flats In Bhilwara | Completed Properties
                  </p>
                </div>
                <div className="text-center text-sm-start">
                  <p className="p-1 ps-3 seo-texts">
                    <span className="seo-section-title">Disclaimer:</span> This
                    website is meant only for informational purposes & it does
                    not advertise, market, book, sell or offer for sale or
                    invite persons to purchase in any manner any of the real
                    estate products as displayed on it.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </Box>
    )
  );
}
