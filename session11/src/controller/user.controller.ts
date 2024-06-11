import {Request,Response} from "express";
import { findAll, findOne } from "../service/user.service";
// API lấy tất cả danh sách user trong bảng users
export const findAllUser= async(req:Request,res:Response)=> {
    try {
        const user = await findAll();
        return res.status(200).json({
            data:user
        })
    } catch (error) {
        console.log(error);
    }
};
// API lấy một user trong bảng users
  export const findOneUser= async(req:Request,res:Response)=>{
     try {
         const {id}=req.params;
         const user = await findOne(Number(id));
        return res.status(200).json({
            data:user
        })
     } catch (error) {
         console.log(error);
     }
   }

