import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'

import dotenv from 'dotenv'
import cors from 'cors';
import { connectDb } from './lib/db.js'
import cookieParse from 'cookie-parser'
import { app  , server} from './lib/socket.js';
import path from 'path';

dotenv.config()



app.use(express.json({ limit: "50mb" })); // Increase JSON payload size
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Increase URL-encoded payload size

const PORT  = process.env.PORT
const __dirname = path.resolve();

// to accept the json data from the requseet
app.use(express.json())
app.use(cookieParse())

app.use(cors(
    {
        origin: ['http://localhost:5173'],
        credentials:true
    }
))



app.use('/api/auth' , authRoutes)
app.use('/api/messages' , messageRoutes)


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }

  server.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
  });