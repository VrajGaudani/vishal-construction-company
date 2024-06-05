const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    accountno: {
      type: String,
      required: true,
      default: () => nanoid(10),
    },
    countryCode: {
      type: String,
      default: "91",
    },
    userRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userRole",
      default: null,
    },
    image: {
      type: [String],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    verificationDate: {
      type: Date,
    },
    forgetPasswordToken: {
      type: String,
    },
    active: {
      type: Number,
      default: 1,
    },
    lastLoginTime: {
      type: Date,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
