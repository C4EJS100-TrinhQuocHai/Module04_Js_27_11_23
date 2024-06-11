// viết cú pháp es6, import, export
import express from "express";
import userRouter from "./routes/user.routes";
import dotenv from "dotenv";
const app= express();
const port:number=8000;
 dotenv.config();
app.use("/api/v1/user",userRouter);
app.listen(port,()=>{
    console.log(`đang gọi đến server http://localhost:${port}`);
})