"use strict";
console.log("typescript basic 22223333");
// kiểu dữ liệu number
let age = 5;
// kiểu dữ liệu string
let fullName = "Minh Thu";
// kiểu dữ liệu null
let nullVariable = null;
// kiểu dữ liệu undefined
let undefinedVariable = undefined;
// trong ts không có kiểu dữ liệu NaN;
// kiểu dữ liệu boolean : kiểu đúng sai
let isCheck = true;
// array
// giả sử thầy muốn khai báo 1 mảng các số
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// giả sử thầy muốn khai báo mảng sinh viên
let students = ["hoa", "minh", "hồng"];
let student = {
    name: "hoa",
    address: "hà nội",
    age: 25,
};
// giả sử thầy muốn tạo 1 cái mảng chứa các sinh viên
let students1 = [
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
let a = 5;
a = "hoa";
// function
// 1 kiểu dữ liệu cho tham số 
// 2 kiểu dữ liệu trả về của hàm
// đối với function mà không cần giá trị trả về thì bọn e để kiểu dữ liệu void
function sayHello() {
    console.log("xin chào!");
}
sayHello();
// function cần giá trị trả về
function tinhTong(a, b) {
    return a + b;
}
tinhTong(1, 5);
let a1 = 5;
// kiểu dữ liệu any
// kiểu dữ liệu number
