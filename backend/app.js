const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// Database connection
const { connectDb } = require("./dbConnection");
const {
  AuthRouter,
  AboutPageRouter,
  UserRouter,
  BuildingMaterialRouter,
  BlogRouter,
  BookingRouter,
  CallBackRouter,
  CareerRouter,
  CMSRouter,
  ConstructionProcessRouter,
  ContactUsRouter,
  EnquiryRouter,
  FeedbackRouter,
  FinanceRouter,
  HomeRouter,
  InvestWithUsRouter,
  MenuRouter,
  NewsLetterRouter,
  OtpRouter,
  OurTeamRouter,
  PropertyRouter,
  ReviewRouter,
  RoleRouter,
  ServiceRouter,
  SiteVisitRouter,
  SliderRouter,
  SupplierRouter,
} = require("./Routes");

connectDb();

// Middleware
// CORS
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: "x-auth-token",
  })
);

//   Body Parser
app.disable("x-powered-by");
app.use(express.json({ limit: "50mb" })); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "dahfahdfhafsdfhdfh",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("trust proxy", 1);

// Cookie parser.
// app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/uploads", express.static("uploads"));

const prefix = "/api/";

app.use(`${prefix}auth`, AuthRouter);
app.use(`${prefix}about`, AboutPageRouter);
app.use(`${prefix}blog`, BlogRouter);
app.use(`${prefix}booking`, BookingRouter);
app.use(`${prefix}buildingMaterial`, BuildingMaterialRouter);
app.use(`${prefix}callBack`, CallBackRouter);
app.use(`${prefix}career`, CareerRouter);
app.use(`${prefix}cms`, CMSRouter);
app.use(`${prefix}construction`, ConstructionProcessRouter);
app.use(`${prefix}contactus`, ContactUsRouter);
app.use(`${prefix}enquiry`, EnquiryRouter);
app.use(`${prefix}feedback`, FeedbackRouter);
app.use(`${prefix}finance`, FinanceRouter);
app.use(`${prefix}home`, HomeRouter);
app.use(`${prefix}investwithus`, InvestWithUsRouter);
app.use(`${prefix}menu`, MenuRouter);
app.use(`${prefix}newsletter`, NewsLetterRouter);
app.use(`${prefix}otp`, OtpRouter);
app.use(`${prefix}ourteam`, OurTeamRouter);
app.use(`${prefix}property`, PropertyRouter);
app.use(`${prefix}review`, ReviewRouter);
app.use(`${prefix}role`, RoleRouter);
app.use(`${prefix}service`, ServiceRouter);
app.use(`${prefix}sitevisit`, SiteVisitRouter);
app.use(`${prefix}slider`, SliderRouter);
app.use(`${prefix}supplier`, SupplierRouter);
app.use(`${prefix}user`, UserRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

process.env.TZ = "UTC";
const serverPort = process.env.PORT || 6000;

// Start server
app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});

module.exports = app; // Export app for testing purposes
