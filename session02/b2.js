"use strict";
/*
 9. union-
 */
let ourUnion = 5;
ourUnion = "5";
function statusCode(code) {
    console.log(`status code is  ${code}`);
}
statusCode(404);
statusCode("404");
const car = {
    color: "green",
    type: "honda",
};
/* 11. unknow-kiểu không xác định   */
function test(params) {
    // giả sử thầy đi xử lý cái  tham số truyền vào
    // khi dùng kiểu dữ liệu unknown thì phải đi kiểm tra kiểu dữ liệu trước khi xử lý
    if (typeof params === "string") {
        let result = params.toUpperCase();
        console.log(11111, result);
    }
    else {
        console.log("giá trị truyền vào không phải string");
    }
}
test("hello typescript!");
/*
    12. never
    dùng trong các function xử lý các vòng lặp vô tận, dùng để đếm
 */
function never() {
    let count = 0;
    while (true) {
        count++;
        console.log("giá trị biến đếm count", count);
    }
}
// 
/*
   13. type tuples -bộ dữ liệu (bộ fix cứng)
   tạo bộ khung cho dữ liệu mà không được phép sửa đổi.
 */
let ourTuples = ["1", 1];
let ourTuples1 = [1, "hoa", true];
ourTuples1.push(5);
console.log("111", ourTuples1);
/*
    14. type enum -liệt kê
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let student = {
    name: "minh thu",
    age: 25,
    role: 1
};
let person = {
    name: "hoa",
    id: 5,
    address: "hà nội",
};
