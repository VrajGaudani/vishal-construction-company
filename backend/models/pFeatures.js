const mongoose = require("mongoose");

const pFeaturesSchema = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
      default: null,
    },
    propertyTag: {
      type: String,
    },
    bedrooms: {
      type: Number,
    },
    conferenceRoom: {
      type: Number,
    },
    visitorRoom: {
      type: Number,
    },
    balconies: {
      type: Number,
    },
    floorNo: {
      type: Number,
    },
    totalFloors: {
      type: Number,
    },
    furnishedStatus: {
      type: String,
    },
    noOfSeats: {
      type: Number,
    },
    meetingRooms: {
      type: Number,
    },
    personalWashroom: {
      type: Boolean,
    },
    Pantry: {
      type: Boolean,
    },
    bathrooms: {
      type: Number,
    },
    FloorsAllowedforconstruction: {
      type: Number,
    },
    Noofopensides: {
      type: Number,
    },
    Widthofroad: {
      type: Number,
    },
    AnyConstructiondone: {
      type: Boolean,
    },
    BoundaryWallMade: {
      type: Boolean,
    },
    Isinagatedcolony: {
      type: Boolean,
    },
    PlotArea: {
      type: Number,
    },
    PlotLength: {
      type: Number,
    },
    PlotBreadth: {
      type: Number,
    },
    IsCornerPlot: {
      type: Boolean,
    },
    totalArea: {
      type: Number,
    },
    superArea: {
      type: Number,
    },
    builtUpArea: {
      type: Number,
    },
    carpetArea: {
      type: Number,
    },
    transactionType: {
      type: String,
    },
    possessionStatus: {
      type: String,
    },
    availableFromMonth: {
      type: Number,
    },
    availableFromYear: {
      type: Number,
    },
    buildYear: {
      type: Number,
    },
    ageOfConstruction: {
      type: String,
    },
    description: {
      type: String,
    },
    amenities: {
      type: Array,
    },
    propertyDetails: {
      type: Array,
    },
    address: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

const PFeaturesModel = mongoose.model("pFeatures", pFeaturesSchema);

module.exports = { PFeaturesModel };
