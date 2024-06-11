import express from "express";
import { findAllUser, findOneUser } from "../controller/user.controller"; 
const userRouter= express.Router();
userRouter.get("/",findAllUser);
userRouter.get("/:id", findOneUser);
export default userRouter;