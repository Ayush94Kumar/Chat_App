import mongoose from 'mongoose'
import {ENV} from './env.js'

export const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(ENV.MONGODB_URI);
        console.log('MongoDB Connected !');
        
    } catch (error) {
        console.error("Somthing Wrong to Connect mongoDB", error);
        
    }
}