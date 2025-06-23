import cors from "cors"
import dotenv from "dotenv"
import express from "express"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config()
// console.log(process.env.MONGO_URI)
 


const app= express()
const PORT=process.env.PORT || 5001

//middleware
app.use(cors( {
    origin:"http://localhost:5173",
}));
app.use(express.json());
 app.use(rateLimiter);

app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
app.listen(5001,()=>{
    console.log("Server Started on PORT:",PORT);
});

}) 


