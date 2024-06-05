const mongoose = require("mongoose");

const authTokenSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    accountno: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    token: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
    },
    superAdminAccess: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const AuthTokenModel = mongoose.model("authToken", authTokenSchema);

module.exports = { AuthTokenModel };
