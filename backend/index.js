import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

//Configuration
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())


//DB Connection
mongoose.connect(process.env.DB_URL)
.then(() => {
    app.listen(process.env.PORT, () => console.log(`Server is connected on port ${process.env.PORT} and connect to mongoDB`))
})
.catch(error => {
    console.error("Unable to connect server and/or MongoDB", error)
})

//Default Routes
app.get("/", async(req, res) => {
    res.json("Backend is working.....")
})