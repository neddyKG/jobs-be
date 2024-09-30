const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URI: ", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection error: ", error.message);
  }
};

connectDB();

module.exports = mongoose;
