import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js';


dotenv.config();
const PORT=process.env.PORT || 5000;

const app=express();

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);


app.listen(PORT,(req,res)=>
{
    console.log(`server running on http://localhost:${PORT}`)
    connectDB()
}
)