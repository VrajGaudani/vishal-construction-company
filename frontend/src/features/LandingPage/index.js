"use client";
import React, { useState } from "react";
import "./index.scss";
import LandingPageHooks from "./landingPageHooks";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SelectPlaceholder from "@/components/Select";
import HomeIcon from "@/assets/icons/icons8-home-100.png";
import LandIcon from "@/assets/icons/icons8-inland-100.png";
import OfficeIcon from "@/assets/icons/icons8-business-loan-100.png";
import BusinessIcon from "@/assets/icons/icons8-business-goal-100.png";
import NewConIcon from "@/assets/icons/icons8-building-100.png";
import LuxuryIcon from "@/assets/icons/icons8-skyscrapers-100.png";
import VishalConstruction from "@/assets/Slider images/pexels-apasaric-1437493.jpg";
import BackGroundCounter from "@/assets/Slider images/background-counter.jpg";
import EcoFriendllyIcon from "@/assets/icons/icons8-ecology-100.png";
import VacationIcon from "@/assets/icons/icons8-resort-100.png";
import RightArrowIcon from "@/assets/icons/right-arrow-50.png";
import CardBox from "@/components/Card";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import Image from "next/image";
import SearchIcon from "../../assets/icons/Search_Icon.svg";
import smallSlider1 from "../../assets/Slider images/pexels-iamrizwan-2091760.jpg";
import smallSlider2 from "../../assets/Slider images/pexels-pixasquare-1123982.jpg";
import smallSlider3 from "../../assets/Slider images/pexels-rickyrecap-2354919.jpg";
import smallSlider4 from "../../assets/Slider images/pexels-szaboviktor-3592799.jpg";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import RightArrow from "@/assets/icons/RightArrowIcon";
import InteriorCard from "@/components/InteriorCard";
import "aos/dist/aos.css";
import "swiper/css";

function LandingPage() {
  const {
    miniScreenMatch,
    sliderOfImages,
    sliderImagesOfMeterial,
    tab,
    setTab,
  } = LandingPageHooks();
  const [focus, setFocus] = useState(false);

  const slide_img = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

  return (
    <Box className="landing-page">
      <Box className="hero-section">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {sliderOfImages.map((image, index) => (
            <SwiperSlide key={index} className="slide-wrapper">
              <div
                className="slider-image"
                style={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundImage: `url(${image.src})`,
                }}
              />
              <Box
                className="slider-content"
                style={
                  index === 0
                    ? { left: "50%", transform: "translateX(-50%)" }
                    : index % 2 == 0
                    ? { left: "70px" }
                    : { right: "70px" }
                }
              >
                <h4>More Property</h4>
                <p>
                  Extensive upgrades and thorough maintenance have kept this
                  home in prime condition. <br /> Hardwood floors and new
                  carpets create a very comfortable living space.
                </p>
                <Button
                  type="submit"
                  className="submit-button pb-1"
                  sx={{ mt: 3, mb: 2 }}
                >
                  More details
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box data-aos="fade-up" className="filter-section d-flex">
        <Box className="main-filter w-100">
          <Typography className="sub-label">
            Your Pathway to Home Sweet Home.
          </Typography>
          <h1>
            More than Property,
            <br /> We Offer Possibilities
          </h1>
          <Box className="tabs">
            <Box className={tab === "sell" ? "tab selected" : "tab"}>
              <Typography
                variant="p"
                onClick={() => {
                  setTab("sell");
                }}
                className="first-tab "
              >
                Sell
              </Typography>
            </Box>
            <Box className={tab === "rent" ? "tab selected" : "tab"}>
              <Typography
                onClick={() => {
                  setTab("rent");
                }}
                variant="p"
              >
                Rent
              </Typography>
            </Box>
          </Box>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">City, Locality</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
            />
          </div>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Property type</label>
            <SelectPlaceholder
              placeholder="Property type"
              options={["Commercial", "Residental"]}
            />
          </div>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Budget (Min Price)</label>
            <SelectPlaceholder
              placeholder="Min"
              options={["10000", "20000", "50000", "100000", "500000"]}
            />
          </div>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Budget (Max Price)</label>
            <SelectPlaceholder
              placeholder="Max"
              options={["10000", "20000", "50000", "100000", "500000"]}
            />
          </div>
          <Typography className="search-button">
            <Image src={SearchIcon} alt="share-icon" className="me-2" />
            Search
          </Typography>
        </Box>
        {/* {!miniScreenMatch?<Box className="vertical-slider w-50">
          <Swiper
            style={{ height: "100%" }}
            direction={"vertical"}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {secSliderOfImages.map((image) => (
              <SwiperSlide>
                <div
                  className="slider-image"
                  style={{
                    backgroundSize: "cover",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>:""} */}
      </Box>
      <Box data-aos="fade-up" className="lookingfor-section pb-0 container">
        <h4>What You Are Looking For?</h4>
        <p>
          Extensive upgrades and thorough maintenance have kept this home in
          prime condition. <br /> maintenance have kept this home in prime
          condition. Hardwood floors and new carpets create a very comfortable
          living space.
        </p>
        <Box className="container">
          <Box className="options-box ">
            <Image src={HomeIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">Residential</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
          <Box className="options-box ">
            <Image src={LandIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">The Land</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
          <Box className="options-box ">
            <Image src={OfficeIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">Office</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
          <Box className="options-box ">
            <Image src={BusinessIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">Business</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
          <Box className="options-box ">
            <Image src={NewConIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">New Construction</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
          <Box className="options-box ">
            <Image src={LuxuryIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">Luxury Estate</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
          <Box className="options-box ">
            <Image src={EcoFriendllyIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">Eco-Friendly</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
          <Box className="options-box ">
            <Image src={LandIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">The Land</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
          <Box className="options-box ">
            <Image src={VacationIcon} alt="home" className="home-icon" />
            <Box className="options-description">
              <Typography variant="h6">Vacation & Resort</Typography>
              <Typography variant="p">
                We have the best properties Sale.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box data-aos="fade-up" className="w-100 sevices-exp-section pb-0">
        <Box className="title-section ">
          <h4 className="container">The Vishal Construction Legacy</h4>
          <p className="container">
            Extensive upgrades and thorough maintenance have kept this home in
            prime condition.
            <br /> maintenance have kept this home in prime condition. Hardwood
            floors and new carpets create a very comfortable living space.
          </p>
        </Box>
        <Box className="w-100">
          <div
            className="background-image container"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: " center",
              backgroundImage: `url(${VishalConstruction.src})`,
            }}
          />
        </Box>
        <Box className="container d-flex justify-content-center counting-of-exp">
          <Grid className="past-service">
            <Typography variant="h4">
              <CountUp
                duration={4}
                startOnMount
                start={focus ? 0 : null}
                end={21}
                redraw
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <ReactVisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <a>+</a>
                    </ReactVisibilitySensor>
                  </div>
                )}
              </CountUp>
            </Typography>
            <Typography variant="span">YEARS OF REDEFINING</Typography>
          </Grid>
          <Grid className="past-service">
            <Typography variant="h4">
              <CountUp
                duration={4}
                startOnMount
                start={focus ? 0 : null}
                redraw
                end={50}
              />
              <span>+</span>{" "}
            </Typography>
            <Typography variant="span">PROJECTS</Typography>
          </Grid>
          <Grid className="past-service">
            <Typography variant="h4">
              <CountUp
                duration={4}
                startOnMount
                start={focus ? 0 : null}
                redraw
                end={1300}
              />
              <span>+</span>{" "}
            </Typography>
            <Typography variant="span">Our Happy Customers</Typography>
          </Grid>
          <Grid className="past-service">
            <Typography variant="h6" className="past-services-last">
              Rajasthan Largest and <br /> most awarded real estate <br />{" "}
              Company
            </Typography>
          </Grid>
        </Box>
      </Box>
      <Box className="mask-section container">
        <div data-aos="fade-right" class="bg ">
          <span>21+</span>
          <span className="years">
            YEARS OF EXPERTISE IN THE DEVELOPMENT OF REAL ESTATE
          </span>
          <a className="read-more" href="about-us/company">
            <h3>View More</h3>
            <Image src={RightArrowIcon} alt="arrow" />
          </a>
        </div>
        <div
          data-aos="fade-left"
          className="background-image container"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${BackGroundCounter.src})`,
          }}
        />
      </Box>
      <Box data-aos="fade-up" className="container categories-section">
        <Box className="title-section ">
          <h4>The World of Vishal Construction</h4>
          <p>
            Extensive upgrades and thorough maintenance have kept this home in
            prime condition. <br /> maintenance have kept this home in prime
            condition. Hardwood floors and new carpets create a very comfortable
            living space.
          </p>
        </Box>
        <Box className="w-100">
          <div class="wrapper">
            <div class="card">
              <img src={smallSlider1?.src} />
              <div class="info">
                <Typography variant="h6" className="h6">
                  Building Wealth Through Real Estate
                </Typography>
                <Typography variant="p">
                  For those of you looking for a flat on rent. This initiative
                  is dedicated
                </Typography>
                <h3>Explore More</h3>
              </div>
            </div>
            <div class="card">
              <img src={smallSlider2?.src} />
              <div class="info">
                <Typography variant="h6" className="h6">
                  Building Wealth Through Real Estate
                </Typography>
                <Typography variant="p">
                  For those of you looking for a flat on rent. This initiative
                  is dedicated
                </Typography>
                <h3>Explore More</h3>
              </div>
            </div>
            <div class="card">
              <img src={smallSlider3?.src} />
              <div class="info">
                <Typography variant="h6" className="h6">
                  Building Wealth Through Real Estate
                </Typography>
                <Typography variant="p">
                  For those of you looking for a flat on rent. This initiative
                  is dedicated
                </Typography>
                <h3>Explore More</h3>
              </div>
            </div>
            <div class="card">
              <img src={smallSlider4?.src} />
              <div class="info">
                <Typography variant="h6" className="h6">
                  Building Wealth Through Real Estate
                </Typography>
                <Typography variant="p">
                  For those of you looking for a flat on rent. This initiative
                  is dedicated
                </Typography>
                <h3>Explore More</h3>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      {/* <Box
        className={
          miniScreenMatch ? "container-fluid about-section" : "about-section"
        }
      >
        <Box
          className="about-image"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${AboutImage.src})`,
          }}
        ></Box>
        <Box className="about-desc">
          <Typography className="sub-label">
            ABOUT VISHAL CONSTRUCTION COMPANY
          </Typography>
          <h4>{"WE'VE BEEN CREATING AWESOME SINCE 1994"}</h4>
          <p>
            At Vishal Construction Company, we always think ahead but our focus
            remains unerringly on delighting our customers and stakeholders.
            Functioning through an array of best-of-class practices and
            utilizing leading technologies, we at Vishal Construction Company
            believe either in staying ahead of the wave or riding it. If you are
            looking at blank cassettes on the web lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod...
          </p>
          <div className="read-more">
            <h3>Read More</h3>
            <Image src={RightArrowIcon} alt="arrow" />
          </div>
        </Box>
      </Box>
      <Box
        className={
          miniScreenMatch ? "container-fluid rent-section" : "rent-section"
        }
      >
        <Box className="rent-desc">
          <Typography className="sub-label">Beyond Brick and Mortar</Typography>
          <h4>Where Vision Meets Realty Crafting Your Perfect Home</h4>
          <p>
            At Vishal Construction Company, we always think ahead but our focus
            remains unerringly on delighting our customers and stakeholders.
            Functioning through an array of best-of-class practices and
            utilizing leading technologies, we at Vishal Construction Company
            believe either in staying ahead of the wave or riding it. If you are
            looking at blank cassettes on the web lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod...
          </p>
          <div className="read-more">
            <h3>Rent A Home</h3>
            <p>
              Extensive upgrades and thorough maintenance have kept this home in
              prime condition. Hardwood floors and new carpets create a very
              comfortable living space.
            </p>
            <Image src={RightArrowIcon} alt="arrow" />
          </div>
        </Box>
        <Box
          className="rent-image"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: `url(${RentHouseImage.src})`,
          }}
        ></Box>
      </Box> */}
      <Box data-aos="fade-up" className="properties-section container">
        <div className="w-75 ">
          <Typography className="sub-label">
            FIND YOUR HOUSE IN YOUR CITY
          </Typography>
          <h4>Recent Properties in Jaipur</h4>
          <p className="">
            Extensive upgrades and thorough maintenance have kept this home in
            prime condition.
            <br /> maintenance have kept this home in prime condition. Hardwood
            floors and new carpets create a very comfortable living space.
          </p>
        </div>
        <div className="read-more">
          <h3>View More</h3>
          <RightArrow />
        </div>
        {/* <Box className="tabs">
          <Box className={tab === "sell" ? "tab selected" : "tab"}>
            <Typography
              variant="p"
              onClick={() => {
                setTab("sell");
              }}
              className="first-tab "
            >
              Sell
            </Typography>
          </Box>
          <Box className={tab === "rent" ? "tab selected" : "tab"}>
            <Typography
              onClick={() => {
                setTab("rent");
              }}
              variant="p"
            >
              Rent
            </Typography>
          </Box>
        </Box> */}
        <Box className="slider-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              520: {
                slidesPerView: 2,
              },
              990: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="mySwiper swiper-items-slider"
          >
            <SwiperSlide>
              <CardBox />
            </SwiperSlide>
            <SwiperSlide>
              <CardBox />
            </SwiperSlide>
            <SwiperSlide>
              <CardBox />
            </SwiperSlide>
            <SwiperSlide>
              <CardBox />
            </SwiperSlide>
            <SwiperSlide>
              <CardBox />
            </SwiperSlide>
            <SwiperSlide>
              <CardBox />
            </SwiperSlide>
            <SwiperSlide>
              <CardBox />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <Box data-aos="fade-up" className="interior-section container">
        <div className="w-75 ">
          <h4>Recent Interior Work</h4>
          <p>
            Extensive upgrades and thorough maintenance have kept this home in
            prime condition. <br /> Hardwood floors and new carpets create a
            very comfortable living space.
          </p>
        </div>
        <div className="read-more">
          <h3>View More</h3>
          <RightArrow />
        </div>
        <Box className="slider-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              520: {
                slidesPerView: 2,
              },
              990: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="mySwiper swiper-service-slider"
          >
            <SwiperSlide>
              <InteriorCard />
            </SwiperSlide>
            <SwiperSlide>
              <InteriorCard />
            </SwiperSlide>
            <SwiperSlide>
              <InteriorCard />
            </SwiperSlide>
            <SwiperSlide>
              <InteriorCard />
            </SwiperSlide>
            <SwiperSlide>
              <InteriorCard />
            </SwiperSlide>
            <SwiperSlide>
              <InteriorCard />
            </SwiperSlide>
            <SwiperSlide>
              <InteriorCard />
            </SwiperSlide>
            <SwiperSlide>
              <InteriorCard />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <Box data-aos="fade-up" className="build-material-section container pb-0">
        <h4>Our Associate Partners</h4>
        <p className="">
          Extensive upgrades and thorough maintenance have kept this home in
          prime condition.
          <br /> maintenance have kept this home in prime condition. Hardwood
          floors and new carpets create a very comfortable living space.
        </p>
        <Swiper
          slidesPerView={5}
          spaceBetween={15}
          // centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            520: {
              slidesPerView: 3,
            },
            990: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper material-slider"
        >
          {sliderImagesOfMeterial.map((image, index) => (
            <SwiperSlide key={1 + index}>
              <div
                className="slider-image-material"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box className="location-filter-section container">
        <Box data-aos="fade-right" className="location-filter-box">
          <Box className="filter-header">
            <Typography className="sub-label">
              FIND YOUR HOUSE IN YOUR CITY
            </Typography>
            <h4 className="h4">Recent Properties in Jaipur</h4>
          </Box>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Location*</label>
            <SelectPlaceholder
              classes={"location-input"}
              placeholder="Location"
              options={["Commercial", "Residental"]}
            />
          </div>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">City</label>
            <SelectPlaceholder
              placeholder="City"
              options={["10000", "20000", "50000", "100000", "500000"]}
            />
          </div>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">State</label>
            <SelectPlaceholder
              placeholder="State"
              options={["10000", "20000", "50000", "100000", "500000"]}
            />
          </div>
          <Typography className="search-button">
            <Image src={SearchIcon} alt="share-icon" className="me-2" />
            Search
          </Typography>
        </Box>
        <Box data-aos="fade-left" className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113874.30006225347!2d75.70815704801588!3d26.88533996487738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714558740332!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
      <Box data-aos="fade-up" className="review-section">
        <h4>Client Spotlight</h4>
        <p className="">
          Highlighting the Stories of Our Esteemed Clients
          <br /> Where Your Experience Takes Center Stage
        </p>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: "auto",
            },
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper feedback-slider-section"
        >
          <SwiperSlide className="feedback-slide">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="feedback-slide">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="feedback-slide">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="feedback-slide">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="feedback-slide">
            <ReviewCard />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box data-aos="fade-up" className="c-sevices-section container">
        <h4>Recent Blogs of Real Estate</h4>
        <p>
          Extensive upgrades and thorough maintenance have kept this home in
          prime condition. <br /> Hardwood floors and new carpets create a very
          comfortable living space.
        </p>
        <Box className="slider-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              520: {
                slidesPerView: 2,
              },
              990: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="mySwiper swiper-service-slider"
          >
            <SwiperSlide>
              <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceCard />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
export default LandingPage;
