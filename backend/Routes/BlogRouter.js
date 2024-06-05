const express = require("express");
const fs = require("fs");
const BlogRouter = express.Router();
const path = require("path");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/blog";
    try {
      if (!fs.existsSync(fpathId)) {
        fs.mkdirSync(fpathId, { recursive: true }, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
    cb(null, fpathId);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({ storage: storage });

const { userAuth, requestAuth } = require("../Middleware/userAuth");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlog,
  getAllActiveBlog,
  deleteBlog,
  updateBlogStatus,
} = require("../controllers/BlogModule");

const pageMedia = [
  {
    name: "blogImage",
    maxCount: 3,
  },
  {
    name: "bannerImage",
    maxCount: 3,
  },
];

BlogRouter.post("/createBlog", userAuth, upload.fields(pageMedia), createBlog);
BlogRouter.post("/updateBlog", userAuth, upload.fields(pageMedia), updateBlog);
BlogRouter.post("/getBlog", userAuth, getBlog);
// BlogRouter.post("/getBlogDetail", userAuth, getBlog);
BlogRouter.get("/getAllBlog", getAllBlog);
BlogRouter.get("/getAllActiveBlog", requestAuth, getAllActiveBlog);
BlogRouter.post("/deleteBlog", userAuth, deleteBlog);
BlogRouter.post("/updateBlogStatus", userAuth, updateBlogStatus);
BlogRouter.post("/getBlogData", requestAuth, getBlog);

module.exports = BlogRouter;
