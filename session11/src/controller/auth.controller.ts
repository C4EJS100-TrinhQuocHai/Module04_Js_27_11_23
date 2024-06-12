import { Request, Response } from "express";
import { findAll, findOne } from "../service/user.service";
import { login, register } from "../service/auth.service";
// API lấy tất cả danh sách user trong bảng users
export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = await register();
        return res.status(201).json({
            message:"thêm dữ liệu thành công!",
        });
    } catch (error) {
        console.log(error);
    }
};
// API lấy một user trong bảng users
export const loginUser = async (req: Request, res: Response) => {
    try {
        const data = await login();
        return res.status(200).json({
            data: data,
        });
        // lưu lại ở client
        // localStorage
    } catch (error) {
        console.log(error);
    }
};
