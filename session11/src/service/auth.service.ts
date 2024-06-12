import pool from "../config/database";
import jwt from "jsonwebtoken";
// hàm xử lý đi lấy hết thông tin user
export const register = async () => {
    // giá trị người dùng đăt kí thì dùng body-parse để lấy
    const query =
        "INSERT INTO user (username, email, password,role) VALUES ('hoa', 'hoa@', '123', '0')";
    const [result] = await pool.execute(query);
    return result;
};
// hàm xử lý đi lấy thông tin 1 user
export const login = async () => {
    const email = "hoa@";
    const query = `SELECT * FROM user where email='${email}'`;
    const [result] = await pool.execute(query);
    console.log("giá trị trả về khi login", result);
    // khi đăng nhập thành công đi mã hóa token để trả về cho client
    const user: any = result;
    if (user[0]) {
        // không cần mã hóa password
        delete user[0].password;
        // đi mã hóa dùng jwt
        // console.log(33333, process.env.DB_SECRET);
        if (!process.env.DB_SECRET) {
            return;
        }
        const token: any = jwt.sign(user[0], process.env.DB_SECRET);
        console.log("mã token sau khi tạo", token);
        return token;
    }
    return result;
};
