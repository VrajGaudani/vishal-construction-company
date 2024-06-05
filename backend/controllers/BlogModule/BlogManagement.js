const _ = require("lodash");
const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { BlogModel } = require("../../models");

const createBlogSchema = Joi.object({
  title: Joi.string().trim().required(),
  sortDescription: Joi.string().trim(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});
const updateBlogSchema = Joi.object({
  _id: Joi.string().trim().required(),
  title: Joi.string().trim(),
  sortDescription: Joi.string().trim(),
  description: Joi.string(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});
const getBlogSchema = Joi.object({
  _id: Joi.string().trim().required(),
});

const updateBlogStatusSchema = Joi.object({
  _id: Joi.string().trim().required(),
  active: Joi.boolean().required(),
});

async function createBlog(req, res) {
  try {
    const validateData = createBlogSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let blogFormData = req.body;

    blogFormData.blogImage = req.files;
    let saveBlog = await new BlogModel(blogFormData).save();
    console.log("saveBlog is ", saveBlog);
    saveBlog = saveBlog.toObject();

    res.send({ status: true, message: "New Blog created successfully" });
  } catch (e) {
    console.log("createBlogHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating Blog",
    });
  }
}
// update Blog post
async function updateBlog(req, res) {
  try {
    const validateData = updateBlogSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    // pick data from req.body

    let bodyData = req.body;

    let setData = {
      title: bodyData.title,
      sortDescription: bodyData.sortDescription,
      description: bodyData.description,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };
    let blogMedia = req.files;
    setData["blogImage"] = blogMedia.blogImage;
    setData["bannerImage"] = blogMedia.bannerImage;

    const updateModule = await BlogModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({ status: true, message: "Blog updated Successfully" });
  } catch (e) {
    console.log("saveModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in updating Blog post",
    });
  }
}

async function getAllBlog(req, res) {
  try {
    // Getting all Blogs from Database
    let findData = await BlogModel.find().sort({ _id: -1 });
    if (findData.length) {
      // if data found check verified or not
      res.send({ status: true, message: "Blogs List", data: findData });
    } else {
      res.send({ status: true, message: "No Data found for Blogs" });
    }
  } catch (e) {
    console.log("createBlogHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function getBlog(req, res) {
  try {
    const validateData = getBlogSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Blog from Database
    let findData = await BlogModel.findOne({ _id: req.body._id });
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({ status: true, message: "Blog Data", data: findData });
    } else {
      res.send({ status: true, message: "Blog Data not found" });
    }
  } catch (e) {
    console.log("createBlogHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function updateBlogStatus(req, res) {
  try {
    const validateData = updateBlogStatusSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = req.body;
    let setData = {
      active: bodyData.active,
    };
    let updateModule = await BlogModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.log("createBlogHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function deleteBlog(req, res) {
  try {
    let validateData = getBlogSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Blog from Database
    let deleteData = await BlogModel.deleteOne({ _id: req.body._id });
    console.log("deleteData is", deleteData);
    if (deleteData.deleteCount > 0) {
      // if data found check verified or not
      res.send({ status: true, message: "Blog Deleted Successfully" });
    } else {
      res.send({ status: true, message: "Blog not found" });
    }
  } catch (e) {
    console.log("createBlogHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function getAllActiveBlog(req, res) {
  try {
    // Getting Blog from Database
    const findData = await BlogModel.find({ active: true });
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({ status: true, message: "Blog Data", data: findData });
    } else {
      res.send({ status: true, message: "Blog Data not found" });
    }
  } catch (e) {
    console.log("createBlogHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

module.exports = {
  createBlog,
  updateBlog,
  getAllBlog,
  getBlog,
  updateBlogStatus,
  deleteBlog,
  getAllActiveBlog,
  // getBlogDetail,
};
