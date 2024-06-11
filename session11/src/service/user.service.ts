import pool from "../config/database";
// hàm xử lý đi lấy hết thông tin user
export const findAll= async ()=>{
    const query = "SELECT * FROM user";
    const [result]=await pool.execute(query);
    return result;
}
// hàm xử lý đi lấy thông tin 1 user
export const findOne= async (id:number)=>{
    const query= `SELECT * FROM user where id=${id}`
    const [result]= await pool.execute(query);
    return result;
}