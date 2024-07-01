import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.status(403).json({
        message: "Please Login",
      });

    }
    next();

    // try {
    //   const decodedData = jwt.verify(token, "sadjgsmnsvdsjgsdjvjvsdvd");

    //   // Verify if user exists in the database
    //   const user = await User.findById(decodedData._id);
    //   if (!user) {
    //     return res.status(404).json({
    //       message: "User not found",
    //     });
    //   }

    //   req.user = user;
     
    // } catch (error) {
    //   console.error("Error decoding token:", error);
    //   return res.status(403).json({
    //     message: "Invalid token",
    //   });
    // }
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    return res.status(500).json({
      message: "Login First",
    });
  }
};


export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({
        message: "You are not admin",
      });

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
