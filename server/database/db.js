import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
