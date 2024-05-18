/* 
    Bài 9:
    ●	Định nghĩa một Type Alias cho kiểu dữ liệu ResponseStatus, 
    là một Literal Type với giá trị "success" hoặc "error", 
    kèm theo một thuộc tính message kiểu chuỗi.
 */
// khai báo type literal ( các kiểu dữ liệu và dạng chuỗi)
type ResponseStatus = "success" | "error";
type Obj = {
    message:ResponseStatus
};
let obj:Obj = {
    message: "error",
};
/* 
    /* type ResponseStatus = {
    status: 'success' | 'error',
    message: string
} */
/* 
    Bài  10: 
     Khai báo một biến student kiểu Tuple,
     chứa thông tin về tên,
     tuổi và điểm số của một học sinh.
 */
 let student :[string,number,number]=["bình",20,6.0];
 