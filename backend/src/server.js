import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js';
import {ENV} from './lib/env.js'

const PORT=ENV.PORT || 5000;

const app=express();

app.use(express.json())
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);


app.listen(PORT,(req,res)=>
{
    console.log(`server running on http://localhost:${PORT}`)
    connectDB()
}
)