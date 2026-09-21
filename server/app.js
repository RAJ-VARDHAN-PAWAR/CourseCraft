const express = require("express")
const connectDB = require("./config/db")
const dotenv = require("dotenv")
const courseRoute = require("./routes/courseRoutes")
const app = express()
dotenv.config()

app.use("/api/courses",courseRoute)
connectDB()
app.listen(3000, ()=>{
    console.log("Listening to the PORT....")
})
