import jwt from 'jsonwebtoken';
import {ENV} from './env.js'

export const genrateToken = (userId, res) => {
    // Create a JWT containing the user's ID
    // The token will remain valid for 7 days
    const token = jwt.sign(
        { userId },
        ENV.JWT_SECRET,
        { expiresIn: "7d" }
    );
    // Store the JWT in an HTTP-only cookie
    // This cookie will be sent automatically with future requests
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: ENV.NODE_ENV === "development" ? false : true
    });

    return token;
};