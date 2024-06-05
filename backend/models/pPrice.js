const mongoose = require("mongoose");

const pPriceSchema = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
      default: null,
    },
    expectedPrice: {
      type: Number,
    },
    tokenAmount: {
      type: Number,
    },
    pricePerSqft: {
      type: Number,
    },
    priceIncludes: {
      type: Array,
    },
    otherCharges: {
      type: Number,
    },
    wishToEnter: {
      type: String,
    },
    basicPrice: {
      type: Number,
    },
    floorPLC: {
      type: Number,
    },
    facingPLC: {
      type: Number,
    },
    openCarParking: {
      type: Number,
    },
    openCarParkingFree: {
      type: Boolean,
    },
    coveredCarParking: {
      type: Number,
    },
    coveredCarParkingFree: {
      type: Boolean,
    },
    newComponent: {
      type: String,
    },
    taxRegistration: {
      type: Boolean,
    },
    maintenanceCharge: {
      type: Number,
    },
    per: {
      type: String,
    },
    maintenanceFor: {
      type: String,
    },
    brokerage: {
      type: Number,
    },
    bookingAmount: {
      type: Number,
    },
    isStumpDutyRCExcluded: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const PPriceModel = mongoose.model("pPrice", pPriceSchema);

module.exports = { PPriceModel };
