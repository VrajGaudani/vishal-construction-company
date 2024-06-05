const express = require("express");
const BookingRouter = express.Router();

// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     let fpathId = "uploads/feedback";
//     try {
//       if (!fs.existsSync(fpathId)) {
//         fs.mkdirSync(fpathId, { recursive: true }, (err) => {
//           if (err) {
//             throw err;
//           }
//         });
//       }
//     } catch (err) {
//       console.error(err);
//     }
//     cb(null, fpathId);
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });
// let upload = multer({ storage: storage });

// const pageMedia = [
  //   {
  //     name: "iconImage",
  //     maxCount: 1,
  //   },
  //   {
  //     name: "image",
  //     maxCount: 3,
  //   },
  // ];

const {
  createBooking,
  getBookingList,
  getFeedbackDetails,
  getFeedbackForHome,
  updateFeedbackRequest,
  updateFeedbackStatus,
} = require("../controllers/BookingModule");

const { userAuth, requestAuth } = require("../Middleware/userAuth");

BookingRouter.post("/createBooking", userAuth, createBooking);
BookingRouter.get("/getBookingList", userAuth, getBookingList);

// ***************************************************
// BookingRouter.post('/updateBooking', userAuth, upload.fields(pageMedia), updateBookingRequest)
// BookingRouter.post('/getBookingRequest', requestAuth, getBookingRequest)
// BookingRouter.post('/getBookingForHome', requestAuth, getBookingForHome)
// BookingRouter.post('/updateBookingStatusRequest', userAuth, updateBookingStatusRequest)
// BookingRouter.post('/updateBookingStatus', userAuth, updateBookingStatusRequest)
// BookingRouter.post('/getBookingDetails', userAuth, getBookingDetails)

module.exports = BookingRouter;
