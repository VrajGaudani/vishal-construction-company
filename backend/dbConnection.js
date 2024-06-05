const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      useNewUrlParser: true, // Use new URL parser
      useUnifiedTopology: true, // Use new Server Discover and Monitoring engine
      useFindAndModify: false, // To handle deprecation warning for findOneAndUpdate()
      useCreateIndex: true, // To handle deprecation warning for ensureIndex()
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = { connectDb };
