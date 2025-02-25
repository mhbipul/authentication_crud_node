const express = require("express");
const helmet = require("helmet");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRouter = require("./routers/authRouter")
const postsRouter = require("./routers/postsRouter")



const app = express()
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected!");
    
}).catch((err)=>{
    console.error(err);
    
})
//router ...
app.use("/api/v1",authRouter)
app.use("/api/posts",postsRouter)
   

app.get("/",(req,res)=>{
    res.json({message: "This is from the server"})
})



app.listen(process.env.PORT,()=>{
    console.log("Listening....");
    
})