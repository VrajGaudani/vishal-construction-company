"use client";
import React, { useState } from "react";
import "./index.scss";
import { Box, Container, TextField, Typography } from "@mui/material";
import DetailedItemPageHook from "./DetailedItemPageHooks";
import SlideImage1 from "../../assets/Slider images/interior.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaExternalLinkSquareAlt, FaParking, FaSearch } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { TbBathFilled } from "react-icons/tb";
import { RiCheckDoubleFill } from "react-icons/ri";
import SelectPlaceholder from "@/components/Select";
import "swiper/css";
import { Gallery } from "react-grid-gallery";
import { Lightbox } from "react-modal-image";
function DetailedItemPage() {
  const [tab, setTab] = useState("sell");
  const { breadData, handleDialogClose, applyDialog, handleDialogOpen } =
    DetailedItemPageHook();
  const images = [
    {
      src: "https://www.vjdowntownwakad.co.in/images/plans/vj-downtown-wakad-master-plan.webp",
      original:
        "https://www.vjdowntownwakad.co.in/images/plans/vj-downtown-wakad-master-plan.webp",
      width: 550,
      height: 550,
      caption: "Master Plan",
    },
    {
      src: "https://www.providentecopoliten.net.in/blog/images/provident/provident-ecopolitan-2-bhk-apartment-floor-plan.webp",
      original:
        "https://www.providentecopoliten.net.in/blog/images/provident/provident-ecopolitan-2-bhk-apartment-floor-plan.webp",
      width: 550,
      height: 550,
      caption: "Master Plan",
    },
    {
      src: "https://www.purihomes.co/img/property/floor/orig/puri-the-aravallis-3-bhk-apartment.webp",
      original:
        "https://www.purihomes.co/img/property/floor/orig/puri-the-aravallis-3-bhk-apartment.webp",
      width: 550,
      height: 550,
      caption: "Master Plan",
    },
  ];
  const new_urls = [
    "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/430199/pexels-photo-430199.jpeg",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13462547/pexels-photo-13462547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/5824869/pexels-photo-5824869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6198655/pexels-photo-6198655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const images_gallery = new_urls.map((url) => ({
    caption: "Image Caption",
    src: url,
    original: url,
  }));

  const [gallery_index, setGalleryIndex] = useState(-1);
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const currentGalleryImage = images_gallery[gallery_index];
  const nextGalleryIndex = (gallery_index + 1) % images_gallery.length;
  const nextGalleryImage =
    images_gallery[nextGalleryIndex] || currentGalleryImage;
  const prevGalleryIndex =
    (gallery_index + images_gallery.length - 1) % images_gallery.length;
  const prevGalleryImage =
    images_gallery[prevGalleryIndex] || currentGalleryImage;

  const handleGalleryClick = (index, item) => setGalleryIndex(index);
  const handleGalleryClose = () => setGalleryIndex(-1);
  const handleGalleryMovePrev = () => setGalleryIndex(prevGalleryImage);
  const handleGalleryMoveNext = () => setGalleryIndex(nextGalleryImage);
  return (
    <Box className="detailed-property-page">
      <Box className="image-section">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
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
          modules={[Autoplay]}
          className="mySwiper image-slider-section"
        >
          <SwiperSlide
            className="image-slide"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${SlideImage1.src})`,
            }}
          ></SwiperSlide>
          <SwiperSlide
            className="image-slide"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${SlideImage1.src})`,
            }}
          ></SwiperSlide>
          <SwiperSlide
            className="image-slide"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${SlideImage1.src})`,
            }}
          ></SwiperSlide>
          <SwiperSlide
            className="image-slide"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${SlideImage1.src})`,
            }}
          ></SwiperSlide>
          <SwiperSlide
            className="image-slide"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${SlideImage1.src})`,
            }}
          ></SwiperSlide>
          <SwiperSlide
            className="image-slide"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${SlideImage1.src})`,
            }}
          ></SwiperSlide>
        </Swiper>
      </Box>
      <Container className="detailed-property-container">
        <Box className="Career-box w-100 d-flex flex-wrap justify-content-between align-items-center">
          <div className="w-100 d-flex justify-content-between detailed-card-heading">
            <h4 className="">Single-Family Homes</h4>
            <div className="d-flex ">
              <Typography className="sub-label mb-0 h-fitcontent">
                New Construction
              </Typography>
              <Typography className="sub-label mb-0 h-fitcontent">
                Vacation & Resort
              </Typography>
            </div>
          </div>
          <Box className="w-75 d-flex flex-wrap description-side">
            <span className="opning-position text-start">London, UK</span>
            <Box className="features-box">
              <div className="diffrent-field">
                <IoBed className="features-icon" size="20" color="#687693" />
                <span className="numbers-feature">2</span>
              </div>
              <div className="diffrent-field">
                <TbBathFilled
                  className="features-icon"
                  size="20"
                  color="#687693"
                />
                <span className="numbers-feature">4</span>
              </div>
              <div className="diffrent-field">
                <FaParking
                  className="features-icon"
                  size="20"
                  color="#687693"
                />
                <span className="numbers-feature">1</span>
              </div>
              <div className="diffrent-field">
                <FaExternalLinkSquareAlt
                  className="features-icon"
                  size="20"
                  color="#687693"
                />
                <span className="numbers-feature">4000</span>
              </div>
            </Box>
          </Box>
          <Typography className="price"> ₹89,00,000.00</Typography>
        </Box>
        <Box className="property-description">
          <Typography variant="h6" className="h6">
            Home Is Where: Tales from the Real Estate Frontier
          </Typography>
          <Typography variant="p">
            For those of you looking for a flat on rent. This initiative is
            dedicated to connecting people to apartments of their
            choice.Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source.
          </Typography>
          <Typography variant="p">
            For those of you looking for a flat on rent. This initiative is
            dedicated to connecting people to apartments of their
            choice.Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock.
          </Typography>
        </Box>
        <Box className="property-description pb-0">
          <Typography variant="h6" className="h6">
            Facts And Features
          </Typography>
          <Box className="w-100 d-flex flex-wrap checked-features">
            <div className="Features-box">
              <RiCheckDoubleFill
                className="features-icon"
                size="26"
                color="#004D79"
              />
              <span className="numbers-feature">Air Conditioning</span>
            </div>
            <div className="Features-box">
              <RiCheckDoubleFill
                className="features-icon"
                size="26"
                color="#004D79"
              />
              <span className="numbers-feature">Fencing</span>
            </div>
            <div className="Features-box">
              <RiCheckDoubleFill
                className="features-icon"
                size="26"
                color="#004D79"
              />
              <span className="numbers-feature">Parking</span>
            </div>
            <div className="Features-box">
              <RiCheckDoubleFill
                className="features-icon"
                size="26"
                color="#004D79"
              />
              <span className="numbers-feature">Swimming Pool</span>
            </div>
            <div className="Features-box">
              <RiCheckDoubleFill
                className="features-icon"
                size="26"
                color="#004D79"
              />
              <span className="numbers-feature">Supermarket/Store</span>
            </div>
            <div className="Features-box">
              <RiCheckDoubleFill
                className="features-icon"
                size="26"
                color="#004D79"
              />
              <span className="numbers-feature">Gym Availability</span>
            </div>
            <div className="Features-box">
              <RiCheckDoubleFill
                className="features-icon"
                size="26"
                color="#004D79"
              />
              <span className="numbers-feature">Transportation Hub</span>
            </div>
          </Box>
        </Box>
        {/* <Box className="property-description">
          <Typography variant="h6" className="h6">
            Location
          </Typography>
          <Typography variant="p" className="">
            Featherston Street, London, UK EC1Y8SY
          </Typography>
        </Box> */}
      </Container>
      <Box className="location-filter-section container">
        <h4 style={{ marginBottom: "50px" }} className="w-100">
          Location
        </h4>
        <Box className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227748.86003137822!2d75.790558!3d26.885211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14b1bd30ba5%3A0x860e5d531eccb20c!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1716032713768!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="mapIframe"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box className="location-box">
          <Box className="filter-header">
            <h4 className="h4 text-center">ADDRESS</h4>
            <p className="mb-4 text-center">
              Haldighati Marg, near JDA Staff Colony, Pratap Nagar, Jaipur,
              Rajasthan 302033
            </p>
            <h4 className="h4 mb-4">NEARBY LANDMARKS:</h4>
            <h5 className="h5">Transit:</h5>
            <p>
              Airport, Ring Road, Akshaya Patra, Khatipura Railway Station,
              Sitapura Industrial Area
            </p>
            <h5 className="h5">Shopping Malls & Cinema:</h5>
            <p>PinkWalk, JTM, R-Tech Galleria, D-Mart</p>
            <h5 className="h5">Hospitals:</h5>
            <p>
              Bombay Hospital, Narayana Multi Speciality Hospital, SBI Bank, AU
              Bank, ICICI Bank
            </p>
            <h5 className="h5">Schools & Colleges:</h5>
            <p>
              Ryan International, Jayshree Periwal, Subodh Public School, JECRC,
              Poornima University, SKIT, VIT
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="image-galery-section container">
        <h4>Layout Plans</h4>
        <Box className="tabs">
          <Box className={tab === "sell" ? "tab selected" : "tab"}>
            <Typography
              variant="p"
              onClick={() => {
                setTab("sell");
              }}
              className="first-tab "
            >
              Master Plan
            </Typography>
          </Box>
          <Box className={tab === "3bhk" ? "tab selected" : "tab"}>
            <Typography
              onClick={() => {
                setTab("3bhk");
              }}
              className="first-tab "
              variant="p"
            >
              3 BHK Floor Plans
            </Typography>
          </Box>
          <Box className={tab === "4bhk" ? "tab selected" : "tab"}>
            <Typography
              onClick={() => {
                setTab("4bhk");
              }}
              className="first-tab "
              variant="p"
            >
              4 BHK Floor Plans
            </Typography>
          </Box>
          <Box className={tab === "5bhk" ? "tab selected" : "tab"}>
            <Typography
              onClick={() => {
                setTab("5bhk");
              }}
              variant="p"
            >
              5 BHK Floor Plans
            </Typography>
          </Box>
        </Box>
        <div>
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
            rowHeight={250}
            margin={6}
          />
          {!!currentImage && (
            <Lightbox
              large={currentGalleryImage.original}
              small={currentGalleryImage.original}
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onClose={handleGalleryClose}
            />
          )}
        </div>
      </Box>
      <Box className="image-galery-section container">
        <h4 style={{ marginBottom: "50px" }}>Image Gallery</h4>
        <div className="ImageGallery">
          <Gallery
            images={images_gallery}
            onClick={handleGalleryClick}
            enableImageSelection={false}
            rowHeight={300}
            margin={8}
          />
          {!!currentImage && (
            <Lightbox
              large={currentGalleryImage.original}
              small={currentGalleryImage.original}
              mainSrc={currentGalleryImage.original}
              imageTitle={currentGalleryImage.caption}
              mainSrcThumbnail={currentGalleryImage.src}
              nextSrc={nextGalleryImage.original}
              nextSrcThumbnail={nextGalleryImage.src}
              prevSrc={prevGalleryImage.original}
              prevSrcThumbnail={prevGalleryImage.src}
              onClose={handleGalleryClose}
            />
          )}
        </div>
      </Box>
      <Box className="image-galery-section container">
        <h4 style={{ marginBottom: "50px" }}>Tour with Videos</h4>
        <Box className="yt-video">
          <iframe
            width="1070"
            height="601"
            className="youtube-video-iframe"
            src="https://www.youtube.com/embed/yKCFt3IOoDQ?si=LM5sQqaBKVjgNld5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Box>
      </Box>
      <Box className="enquiry-section container">
        <Box className="location-filter-box">
          <Box className="filter-header">
            <Typography className="sub-label">
              Want help? Submit your info.
            </Typography>
            <h4 className="h4">Enquiry Form</h4>
          </Box>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Your Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
            />
          </div>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Email</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
            />
          </div>
          <div className="d-flex flex-wrap input-box">
            <label className="filter-label">Phone Number</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="text-field"
            />
          </div>
          <Typography className="search-button">Submit</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default DetailedItemPage;
