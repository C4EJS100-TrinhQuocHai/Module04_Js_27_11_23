console.log("typescript basic 22223333");
// kiểu dữ liệu number
let age: number = 5;
// kiểu dữ liệu string
let fullName: string = "Minh Thu";
// kiểu dữ liệu null
let nullVariable: null = null;
// kiểu dữ liệu undefined
let undefinedVariable: undefined = undefined;
// trong ts không có kiểu dữ liệu NaN;
// kiểu dữ liệu boolean : kiểu đúng sai
let isCheck: boolean = true;
// array
// giả sử thầy muốn khai báo 1 mảng các số
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
// giả sử thầy muốn khai báo mảng sinh viên
let students: string[] = ["hoa", "minh", "hồng"];
// khai báo kiểu object
// khai báo kiểu dữ liệu cho object
// c1
/* type Student={
    name:string,
    address:string,
    age:number
} */
// c2:
interface Student {
    name: string;
    address: string;
    age: number;
}
let student: Student = {
    name: "hoa",
    address: "hà nội",
    age: 25,
};
// giả sử thầy muốn tạo 1 cái mảng chứa các sinh viên
let students1:Student[] = [
    {
        name: "hoa",
        address: "hn",
        age: 20,
    },
    {
        name: "thu",
        address: "đn",
        age: 21,
    },
    {
        name: "thu",
        address: "đn",
        age: 19,
    },
];
// kiểu dữ liệu any  (bất kì)
// mình làm việc ts nên hạn chế dùng any.
 let a:any=5;
 a="hoa";
// function
// 1 kiểu dữ liệu cho tham số 
// 2 kiểu dữ liệu trả về của hàm
// đối với function mà không cần giá trị trả về thì bọn e để kiểu dữ liệu void
 function sayHello(): void {
    console.log("xin chào!"); 
 }
 sayHello();
 // function cần giá trị trả về
 function tinhTong(a:number,b:number):number{
    return a+b
 }
 tinhTong(1,5);
