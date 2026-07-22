import { genrateToken } from '../lib/utils.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {

  // Extract user details from the request body
  const { fullName, email, password } = req.body;

  try {

    // Check if all required fields are provided
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email format is valid
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Check whether the email is already registered
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Generate a salt and hash the user's password before storing it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user document with the hashed password
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword
    });

    // If user object is created successfully
    if (newUser) {

      // Generate JWT token and store it in a cookie
      genrateToken(newUser._id, res);

      // Save the user in MongoDB
      await newUser.save();

      // Send user details (excluding password) in the response
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic
      });

    } else {

      // Handle unexpected user creation failure
      res.status(400).json({
        message: "Invalid user data"
      });
    }

  } catch (error) {

    // Log the error and send a generic server error response
    console.log("Error in signUP ", error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
};