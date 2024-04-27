import mongoose from "mongoose";

export default async () => {
  require("dotenv").config();
  console.log(process.env.MONGO_URI, "-----");
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("🍃🍃🍃🍃🍃🍃 Admin database connect 🍃🍃🍃🍃🍃🍃");
    console.log("database is connected successfull!!");
  } catch (error: any) {
    console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
    console.error(error.message);
    process.exit(1);
  }
};
