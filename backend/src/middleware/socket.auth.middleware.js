import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

// Middleware to authenticate Socket.IO connections using JWT
const socketAuthMiddleware = async (socket, next) => {
  try {
    // Get the JWT token from the cookies sent during the socket handshake
    const token = socket.handshake.headers.cookie
      ?.split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];

    // Reject the connection if no token is found
    if (!token) {
      console.log("Socket connection rejected: No token provided");
      return next(new Error("Unauthorized - No Token Provided"));
    }

    // Verify the JWT and extract the user information
    const decoded = jwt.verify(token, ENV.JWT_SECRET);

    // Reject the connection if the token is invalid
    if (!decoded) {
      console.log("Socket connection rejected: Invalid token");
      return next(new Error("Unauthorized - Invalid Token"));
    }

    // Fetch the authenticated user's details from the database
    const user = await User.findById(decoded.userId).select("-password");

    // Reject the connection if the user no longer exists
    if (!user) {
      console.log("Socket connection rejected: User not found");
      return next(new Error("User not found"));
    }

    // Store the authenticated user's information on the socket object
    socket.user = user;
    socket.userId = user._id.toString();

    console.log(`Socket authenticated for user: ${user.fullName} (${user._id})`);

    // Allow the socket connection to proceed
    next();
  } catch (error) {
    console.log("Error in socket authentication:", error.message);

    // Reject the connection if authentication fails
    next(new Error("Unauthorized - Authentication failed"));
  }
};

export default socketAuthMiddleware;