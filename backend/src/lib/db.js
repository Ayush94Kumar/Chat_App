import mongoose from 'mongoose'

export const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected !');
        
    } catch (error) {
        console.error("Somthing Wrong to Connect mongoDB", error);
        
    }
}