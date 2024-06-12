import express from "express";
import { findAllUser, findOneUser } from "../controller/user.controller"; 
import { loginUser, registerUser } from "../controller/auth.controller";
import { verify } from "../middleware/verifyToken";
const userRouter= express.Router();
userRouter.get("/api/v1/user",verify,findAllUser);
userRouter.get("/api/v1/user/:id", findOneUser);
userRouter.post("/api/v1/register",registerUser);
userRouter.post("/api/v1/login", loginUser);

// userRouter.post("/api/v1/login",);
export default userRouter;