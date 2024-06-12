import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";``
export const verify =  (req: Request, res: Response, next: NextFunction) => {
    const requestHeader = req.headers["authorization"];
    const token: any = requestHeader?.split(" ")[1];
    // đi verify token này ra
    if (!process.env.DB_SECRET) {
        return;
    }
    try {
        const verifyToken:any =  jwt.verify(token, process.env.DB_SECRET);
        if(verifyToken.role=="0"){
            console.log("là user");
            next();
        }
    } catch (err) {
        res.sendStatus(403);
    }
    
  
};
