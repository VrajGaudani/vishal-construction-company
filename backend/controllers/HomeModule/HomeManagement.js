const _ = require("lodash");
const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { nanoid } = require("nanoid");
const {
  HomeAboutModel,
  HomeMovingBannerModel,
  DealingInModel,
  ServiceItemModel,
  DealingInItemModel,
  ServiceModel,
} = require("../../models");

// Create Schema
const createHomeAboutSchema = Joi.object({
  title: Joi.string().trim().required(),
  header: Joi.string().trim().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

const createHomeMovingBannerSchema = Joi.object({
  years: Joi.number().required(),
  projects: Joi.number().required(),
  clients: Joi.number().required(),
  shortDescription: Joi.string(),
});

const createDealingInSchema = Joi.object({
  header: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

const createDealingInItemSchema = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

const getDealingInItemSchema = Joi.object({
  _id: Joi.string().trim().required(),
});

const createServiceItemSchema = Joi.object({
  title: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});
const createServiceSchema = Joi.object({
  header: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});
// Update Schema

const updateHomeAboutSchema = Joi.object({
  _id: Joi.string().trim().required(),
  title: Joi.string().trim().required(),
  header: Joi.string().trim().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

const updateHomeMovingBannerSchema = Joi.object({
  _id: Joi.string().trim().required(),
  years: Joi.number().required(),
  projects: Joi.number().required(),
  clients: Joi.number().required(),
  shortDescription: Joi.string(),
});

const updateDealingInSchema = Joi.object({
  _id: Joi.string().trim().required(),
  header: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

const updateServiceSchema = Joi.object({
  _id: Joi.string().trim().required(),
  header: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

const updateDealingInItemSchema = Joi.object({
  _id: Joi.string().trim().required(),
  title: Joi.string().required(),
  icon: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

const updateServiceItemSchema = Joi.object({
  _id: Joi.string().trim().required(),
  title: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

const getHomeSchema = Joi.object({
  _id: Joi.string().trim().required(),
});
const updateHomeStatusSchema = Joi.object({
  _id: Joi.string().trim().required(),
  active: Joi.boolean().required(),
});
const updateStatusSchema = Joi.object({
  _id: Joi.string().trim().required(),
  isDisable: Joi.boolean().required(),
});

// About Section
async function createAboutSection(req, res) {
  try {
    let validateData = createHomeAboutSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let homeFormData = _.pick(req.body, [
      "title",
      "header",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);

    if (req.files.length > 0) homeFormData.aboutImages = req.files;
    let isAboutHomeExist = await HomeAboutModel.find();
    console.log("about Section", isAboutHomeExist);
    if (isAboutHomeExist.length) {
      res.send({
        status: false,
        message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE,
      });
    } else {
      let saveHome = await new HomeAboutModel(homeFormData).save();
      console.log("saveHome is ", saveHome);
      saveHome = saveHome.toObject();
      res.send({
        status: true,
        message: "New Home About Data created successfully.",
      });
    }
  } catch (e) {
    console.log("createHomeHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating Home About Data",
    });
  }
}

async function updateAboutSection(req, res) {
  try {
    let validateData = updateHomeAboutSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let bodyData = _.pick(req.body, [
      "_id",
      "title",
      "header",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);

    let setData = {
      title: bodyData.title,
      header: bodyData.header,
      description: bodyData.description,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };
    if (req.files.length > 0) {
      bodyData.aboutImages = req.files;
      setData["aboutImages"] = bodyData.aboutImages;
    }
    console.log("aboutImages", setData);
    let updateModule = await HomeAboutModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    if (updateModule) {
      res.send({
        status: true,
        message: "Home About Data updated successfully.",
      });
    }
  } catch (e) {
    console.log("createHomeHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating Home About Data",
    });
  }
}

async function getHomeAbout(req, res) {
  try {
    // Getting Home from Database
    let findData = await HomeAboutModel.find();
    console.log("findData is", findData);
    if (findData.length > 0) {
      // if data found check verified or not
      res.send({ status: true, message: "Home about Data", data: findData[0] });
    } else {
      res.send({ status: true, message: "Home about Data not found" });
    }
  } catch (e) {
    console.log("getAbout err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in getAbout",
    });
  }
}

// Moving Banner Section
async function createMovingBanner(req, res) {
  try {
    let validateData = createHomeMovingBannerSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let homeFormData = _.pick(req.body, [
      "years",
      "clients",
      "projects",
      "shortDescription",
    ]);

    // if (req.files.length > 0) homeFormData.backgroundImage = req.files;
    let isHomeBannerExist = await HomeMovingBannerModel.find();
    if (isHomeBannerExist.length) {
      res.send({
        status: false,
        message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE,
      });
    } else {
      let saveHome = await new HomeMovingBannerModel(homeFormData).save();
      console.log("saveHome is ", saveHome);

      res.send({
        status: true,
        message: "New Moving Banner created successfully",
      });
    }
  } catch (e) {
    console.log("createHomeHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating Home",
    });
  }
}

async function updateMovingBanner(req, res) {
  try {
    let validateData = updateHomeMovingBannerSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let bodyData = _.pick(req.body, [
      "_id",
      "years",
      "clients",
      "projects",
      "shortDescription",
    ]);

    let setData = {
      years: bodyData.years,
      clients: bodyData.clients,
      projects: bodyData.projects,
      shortDescription: bodyData.shortDescription,
    };
    if (req.files) {
      bodyData.backgroundImage = req.files;
      setData["backgroundImage"] = bodyData.backgroundImage;
    }
    let updateModule = await HomeMovingBannerModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    if (updateModule) {
      res.send({ status: true, message: "Moving Banner updated successfully" });
    }
  } catch (e) {
    console.log("updateMovingBanner err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating Home",
    });
  }
}

async function getHomeMovingBanner(req, res) {
  try {
    // Getting Home from Database
    let findData = await HomeMovingBannerModel.find();
    console.log("findData is", findData);
    if (findData.length > 0) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Home MovingBanner Data",
        data: findData[0],
      });
    } else {
      res.send({ status: true, message: "Home MovingBanner Data not found" });
    }
  } catch (e) {
    console.log("MovingBanner err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in MovingBanner",
    });
  }
}

// async function updateHomeStatus(req, res) {
//   try {
//     let validateData = updateHomeStatusSchema.validate(req.body);
//     if (validateData.error) {
//       throw { status: false, error: validateData, message: "Invalid data" };
//     }

//     let bodyData = _.pick(req.body, ["active", "_id"]);
//     let setData = {
//       active: bodyData.active,
//     };

//     let updateModule = await Models.HomeDB.findOneAndUpdate(
//       { _id: bodyData._id },
//       { $set: setData }
//     );
//     console.log("updateModule is", updateModule);
//     res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });
//   } catch (e) {
//     console.log("createHomeHelper err", e);
//     await errorResponseHelper({
//       res,
//       error: e,
//       defaultMessage: "Error in SignUp",
//     });
//   }
// }
// async function deleteHome(req, res) {
//   try {
//     let validateData = getHomeSchema.validate(req.body);
//     if (validateData.error) {
//       throw { status: false, error: validateData, message: "Invalid data" };
//     }

//     // Getting Home from Database
//     let deleteData = await Models.HomeDB.remove({ _id: req.body._id });
//     console.log("deleteData is", deleteData);
//     if (deleteData) {
//       // if data found check verified or not
//       res.send({ status: true, message: "Home Deleted Successfully" });
//     } else {
//       res.send({ status: true, message: "Home not found" });
//     }
//   } catch (e) {
//     console.log("createHomeHelper err", e);
//     await errorResponseHelper({
//       res,
//       error: e,
//       defaultMessage: "Error in SignUp",
//     });
//   }
// }

/********************************************/
//Dealing In Section Functions Starts
/********************************************/

async function createDealingIn(req, res) {
  try {
    let validateData = createDealingInSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let DealingInFormData = _.pick(req.body, [
      "header",
      "title",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);
    console.log("DealingInFormData is", DealingInFormData);
    DealingInFormData.media = req.files;
    let isDealingInExist = await DealingInModel.find();
    if (isDealingInExist.length) {
      res.send({
        status: false,
        message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE,
      });
    } else {
      let saveDealingIn = await new DealingInModel(DealingInFormData).save();
      console.log("saveDealingIn is ", saveDealingIn);

      res.send({ status: true, message: "New DealingIn created successfully" });
    }
  } catch (e) {
    console.log("Home Management Function createDealingIn err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating DealingIn",
    });
  }
}

async function getDealingInForHome(req, res) {
  try {
    // Getting Home from Database
    let findData = await DealingInModel.findOne({
      isDisable: false,
    }).lean();
    console.log("findData is", findData);
    let itemsFindData = await DealingInItemModel.find({
      isDisable: false,
    }).lean();
    console.log("itemsFindData is", itemsFindData);
    if (findData && itemsFindData) {
      // if data found check verified or not
      findData.items = itemsFindData;
      res.send({
        status: true,
        message: "Home DealingIn Data",
        data: findData,
      });
    } else {
      res.send({ status: true, message: "Home DealingIn Data not found" });
    }
  } catch (e) {
    console.log("getDealingIn err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in getDealingIn",
    });
  }
}

async function getDealingList(req, res) {
  try {
    // Getting Home from Database
    let findData = await DealingInModel.find().sort({ _id: -1 }).lean();
    console.log("findData is", findData);
    if (findData.length > 0) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Home DealingIn Data",
        data: findData,
      });
    } else {
      res.send({ status: true, message: "Home DealingIn Data not found" });
    }
  } catch (e) {
    console.log("getDealingIn err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in getDealingIn",
    });
  }
}

async function deleteDealingIn(req, res) {
  try {
    let validateData = getHomeSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Home from Database
    let deleteData = await DealingInModel.remove({ _id: req.body._id });
    console.log("deleteData is", deleteData);
    if (deleteData.deleteCount > 0) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Home DealingIn Deleted Successfully",
      });
    } else {
      res.send({ status: true, message: "Home DealingIn not found" });
    }
  } catch (e) {
    console.log("createHomeHelper err DealingIn", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in DealingIn",
    });
  }
}

async function getDealingInDetails(req, res) {
  try {
    let validateData = getHomeSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Home from Database
    let findData = await DealingInModel.find({ _id: req.body._id });
    console.log("findData is", findData);
    if (findData.length > 0) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Home DealingIn Data",
        data: findData,
      });
    } else {
      res.send({ status: true, message: "Home DealingIn not found" });
    }
  } catch (e) {
    console.log("findData err DealingIn", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in findData",
    });
  }
}

async function updateDealingIn(req, res) {
  try {
    let validateData = updateDealingInSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, [
      "_id",
      "title",
      "shortDescription",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);

    let setData = {
      title: bodyData.title,
      shortDescription: bodyData.shortDescription,
      description: bodyData.description,
      icon: bodyData.icon,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };
    if (req.files) {
      setData.media = req.files;
    }

    let updateModule = await DealingInModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      error: false,
      message: "Dealing In Data Updated",
    });
  } catch (e) {
    console.log("DealingIn err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in DealingIn",
    });
  }
}

async function updateDealingInStatus(req, res) {
  try {
    let validateData = updateStatusSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, ["isDisable", "_id"]);
    let setData = {
      isDisable: bodyData.isDisable,
    };
    if (bodyData.isDisable == false) {
      let setAllDisable = {
        isDisable: true,
      };
      let updateAllModule = await DealingInModel.updateMany({
        $set: setAllDisable,
      });
    }
    let updateModule = await DealingInModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.log("DealingIn err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in DealingIn",
    });
  }
}

/***************************************************/
// DealingInItem In Section Functions Starts
/**************************************************/

async function createDealingInItem(req, res) {
  try {
    let validateData = createDealingInItemSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let DealingInItemFormData = _.pick(req.body, [
      "title",
      "shortDescription",
      "description",
      "icon",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);

    DealingInItemFormData.media = req.files;
    let isDealingInItemExist = await DealingInItemModel.find({
      title: DealingInItemFormData.title,
    });
    if (isDealingInItemExist.length) {
      res.send({
        status: false,
        message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE,
      });
    } else {
      let saveDealingInItem = await new DealingInItemModel(
        DealingInItemFormData
      ).save();
      res.send({
        status: true,
        message: "New DealingInItem created successfully",
      });
    }
  } catch (e) {
    console.log("Home Management Function createDealingInItem err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating DealingInItem",
    });
  }
}

async function getDealingInItemDetails(req, res) {
  try {
    let validateData = getDealingInItemSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let _id = _.pick(req.body, ["_id"]);

    // Getting Home from Database
    let itemFindData = await DealingInItemModel.findOne({ _id }).lean();
    console.log("itemFindData is", itemFindData);
    if (itemFindData) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Home DealingIn Item Details",
        data: itemFindData,
      });
    } else {
      res.send({
        status: true,
        message: "Home DealingIn Item Data not found",
      });
    }
  } catch (e) {
    console.log("getDealingIn Item err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in getDealingIn Item",
    });
  }
}

async function getDealingItemList(req, res) {
  try {
    // Getting Home from Database
    let findData = await DealingInItemModel.find().sort({ _id: -1 }).lean();
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Home DealingIn Items Data",
        data: findData,
      });
    } else {
      res.send({
        status: true,
        message: "Home DealingIn Data not Items found",
      });
    }
  } catch (e) {
    console.log("getDealingIn err Items", e);
    await errorResponseHelper({
      res,
      error: e,
      message: "Error in getDealingIn Items",
    });
  }
}

async function deleteDealingItem(req, res) {
  try {
    let validateData = getHomeSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Home from Database
    let deleteData = await DealingInItemModel.remove({
      _id: req.body._id,
    });
    console.log("deleteData is", deleteData);
    if (deleteData.deleteCount > 0) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Home DealingIn Deleted Successfully",
      });
    } else {
      res.send({ status: true, message: "Home DealingIn not found" });
    }
  } catch (e) {
    console.log("createHomeHelper err DealingIn", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in DealingIn",
    });
  }
}

async function updateDealingInItem(req, res) {
  try {
    let validateData = updateDealingInItemSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, [
      "_id",
      "header",
      "title",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);
    let setData = {
      header: bodyData.header,
      title: bodyData.title,
      description: bodyData.description,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };
    if (req.files) {
      setData.media = req.files;
    }
    let updateModule = await DealingInItemModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      error: false,
      message: "DealingIn Data Updated Successfully.",
    });
  } catch (e) {
    console.log("DealingIn err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in DealingIn",
    });
  }
}

async function updateDealingInItemStatus(req, res) {
  try {
    let validateData = updateStatusSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, ["isDisable", "_id"]);
    let setData = {
      isDisable: bodyData.isDisable,
    };
    let updateModule = await DealingInItemModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.log("DealingIn err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in DealingIn",
    });
  }
}

/***************************************************/
// Services In Section Functions Starts
/**************************************************/

async function createService(req, res) {
  try {
    console.log("req.body is", req.body);
    let validateData = createServiceSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let createServiceFormData = _.pick(req.body, [
      "header",
      "title",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);
    console.log("createServiceFormData is", createServiceFormData);
    let isServiceExist = await ServiceModel.find({
      title: createServiceFormData.title,
    });
    console.log("isServiceExist is", isServiceExist);
    if (isServiceExist.length) {
      res.send({
        status: false,
        message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE,
      });
    } else {
      let saveService = await new ServiceModel(createServiceFormData).save();
      console.log("saveService is ", saveService);

      res.send({ status: true, message: "New Service created successfully" });
    }
  } catch (e) {
    console.log("Home Management Function createcreateService err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating createService",
    });
  }
}

async function getServiceDetail(req, res) {
  try {
    let validateData = getHomeSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }
    // Getting Home from Database
    let findData = await ServiceModel.findOne({
      _id: req.body._id,
    }).lean();
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({ status: true, message: "Service Data", data: findData });
    } else {
      res.send({ status: true, message: "Service Data not found" });
    }
  } catch (e) {
    console.log("getDealingIn err Items", e);
    await errorResponseHelper({
      res,
      error: e,
      message: "Error in ServiceItem Items",
    });
  }
}

async function updateService(req, res) {
  try {
    let validateData = updateServiceSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, [
      "_id",
      "title",
      "shortDescription",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);

    let setData = {
      title: bodyData.title,
      shortDescription: bodyData.shortDescription,
      description: bodyData.description,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };

    if (req.files) {
      setData.media = req.files;
    }

    let updateModule = await ServiceModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: "Service Details Updated Successfully.",
    });
  } catch (e) {
    console.log("ServiceItemDB err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in ServiceItemDB",
    });
  }
}

async function getServiceList(req, res) {
  try {
    // Getting Home from Database
    let findData = await ServiceModel.find().sort({ _id: -1 }).lean();
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({ status: true, message: "Service Data", data: findData });
    } else {
      res.send({
        status: true,
        message: "Service Item Data not Items found",
      });
    }
  } catch (e) {
    console.log("getDealingIn err Items", e);
    await errorResponseHelper({
      res,
      error: e,
      message: "Error in ServiceItem Items",
    });
  }
}

async function deleteService(req, res) {
  try {
    let validateData = getHomeSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Home from Database
    let deleteData = await ServiceModel.remove({ _id: req.body._id });
    console.log("deleteData is", deleteData);
    if (deleteData) {
      // if data found check verified or not
      res.send({ status: true, message: "Service Deleted Successfully" });
    } else {
      res.send({ status: true, message: "Service not found" });
    }
  } catch (e) {
    console.log("createHomeHelper err DealingIn", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in DealingIn",
    });
  }
}

async function updateServiceStatus(req, res) {
  try {
    let validateData = updateStatusSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, ["isDisable", "_id"]);
    let setData = {
      isDisable: bodyData.isDisable,
    };
    if (bodyData.isDisable == false) {
      let setAllDisable = {
        isDisable: true,
      };
      let updateAllModule = await ServiceModel.updateMany({
        $set: setAllDisable,
      });
    }
    let updateModule = await ServiceModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.log("ServiceItemDB err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in ServiceItemDB",
    });
  }
}

// Services Item Section Functions Starts

async function createServiceItem(req, res) {
  try {
    let validateData = createServiceItemSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let createServiceFormData = _.pick(req.body, [
      "title",
      "shortDescription",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);
    createServiceFormData.media = req.files;
    let isServiceExist = await ServiceItemModel.find({
      title: createServiceFormData.title,
    });
    if (isServiceExist.length) {
      res.send({
        status: false,
        message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE,
      });
    } else {
      let saveService = await new ServiceItemModel(
        createServiceFormData
      ).save();
      console.log("saveService is ", saveService);

      res.send({
        status: true,
        message: "New Service Item created successfully",
      });
    }
  } catch (e) {
    console.log("Home Management Function createcreateService err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating createService",
    });
  }
}

async function updateServiceItem(req, res) {
  try {
    let validateData = updateServiceItemSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, [
      "_id",
      "title",
      "shortDescription",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);
    let setData = {
      title: bodyData.title,
      shortDescription: bodyData.shortDescription,
      description: bodyData.description,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };
    if (req.files) {
      setData.media = req.files;
    }
    let updateModule = await ServiceItemModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({ status: true, message: "Service Item Updated Successfully." });
  } catch (e) {
    console.log("ServiceItemDB err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in ServiceItemDB",
    });
  }
}

async function getServiceItemList(req, res) {
  try {
    // Getting Home from Database
    let findData = await ServiceItemModel.find().sort({ _id: -1 }).lean();
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Service Item Items Data",
        data: findData,
      });
    } else {
      res.send({
        status: true,
        message: "Service Item Data not Items found",
      });
    }
  } catch (e) {
    console.log("getDealingIn err Items", e);
    await errorResponseHelper({
      res,
      error: e,
      message: "Error in ServiceItem Items",
    });
  }
}

async function deleteServiceItem(req, res) {
  try {
    let validateData = getHomeSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Home from Database
    let deleteData = await ServiceItemModel.remove({ _id: req.body._id });
    console.log("deleteData is", deleteData);
    if (deleteData) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Service Item Deleted Successfully",
      });
    } else {
      res.send({ status: true, message: "Service Item not found" });
    }
  } catch (e) {
    console.log("createHomeHelper err DealingIn", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in DealingIn",
    });
  }
}

async function updateServiceItemStatus(req, res) {
  try {
    let validateData = updateStatusSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, ["isDisable", "_id"]);
    let setData = {
      isDisable: bodyData.isDisable,
    };
    let updateModule = await ServiceItemModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.log("ServiceItemDB err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in ServiceItemDB",
    });
  }
}

async function getServiceForHome(req, res) {
  try {
    // Getting Home from Database
    let findData = await ServiceModel.findOne({
      isDisable: false,
    }).lean();
    console.log("findData is", findData);
    let itemsFindData = await ServiceItemModel.find({
      isDisable: false,
    }).lean();
    console.log("itemsFindData is", itemsFindData);
    if (findData && itemsFindData) {
      // if data found check verified or not
      findData.items = itemsFindData;
      res.send({ status: true, message: "Service Data", data: findData });
    } else {
      res.send({ status: false, message: "Service Data not found" });
    }
  } catch (e) {
    console.log("Service err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Service",
    });
  }
}

async function getServiceItemDetails(req, res) {
  try {
    let validateData = getDealingInItemSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let _id = _.pick(req.body, ["_id"]);

    // Getting Home from Database
    let itemFindData = await ServiceItemModel.findOne({ _id }).lean();
    console.log("itemFindData is", itemFindData);
    if (itemFindData) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Home Service Item Details",
        data: itemFindData,
      });
    } else {
      res.send({ status: true, message: "Home Service Item Data not found" });
    }
  } catch (e) {
    console.log("getDealingIn Item err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in getDealingIn Item",
    });
  }
}

module.exports = {
  // About Section function
  createAboutSection,
  updateAboutSection,
  getHomeAbout,

  // Moving Banner Section
  createMovingBanner,
  updateMovingBanner,
  getHomeMovingBanner,

  // Dealing in Section
  createDealingIn,
  getDealingInForHome,
  getDealingList,
  deleteDealingIn,
  getDealingInDetails,
  updateDealingIn,
  updateDealingInStatus,

  // Dealing in item section
  createDealingInItem,
  getDealingInItemDetails,
  getDealingItemList,
  deleteDealingItem,
  updateDealingInItem,
  updateDealingInItemStatus,

  // Service Function
  createService,
  getServiceDetail,
  updateService,
  getServiceList,
  deleteService,
  updateServiceStatus,

  // Service Item function
  createServiceItem,
  updateServiceItem,
  getServiceItemList,
  deleteServiceItem,
  updateServiceItemStatus,
  getServiceForHome,
  getServiceItemDetails,
};
