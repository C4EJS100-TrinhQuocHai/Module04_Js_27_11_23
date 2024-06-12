// viết cú pháp es6, import, export
import express from "express";
import userRouter from "./routes/user.routes";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
const port: number = 8081;
dotenv.config();
// const corsOptions = {
//     origin: "*",
//     credentials: true, //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// };
app.use(cors());
app.use("", userRouter);
app.listen(port, () => {
    console.log(`đang gọi đến server http://localhost:${port}`);
});
