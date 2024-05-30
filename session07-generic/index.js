"use strict";
/*
    GENERIC - chung
    giúp cho việc viết code không cần quan tâm đến kiểu dữ liệu truyền vào

*/
// khai báo 1 mảng chỉ chứa number
// let numbers:number[]=[1,2,3,4,5];
let numbers = [2, 3, 4, 5];
function testGeneric(params) {
    return params;
}
let test1 = testGeneric(5);
console.log("test1", test1);
let test2 = testGeneric("5");
console.log("test2", test2);
function testGeneric2(a, b) {
    return [a, b];
}
let test3 = testGeneric2(5, "5");
let test4 = testGeneric2("4", 5);
/*
    gộp 2 object
 */
// interface OBJ1{
//     name:string,
//     id:number,
// }
// interface OBJ2 {
//     age:number
// }
function merge(obj1, obj2) {
    // gộp các thuộc tính của các object lại với nhau.
    // object.assign(obj1,obj2)
    // object.assign({},obj1,obj2)
    return Object.assign(Object.assign({}, obj1), obj2);
}
let merge1 = merge({ name: "bình", id: 5, address: "hn", gender: "male" }, { age: 20 });
console.log("merge1", merge1);
//[1,2,3]
// tạo hàm xử lý 1 mảng chứa các phần tử và lấy ra phần tử cuối cùng trong mảng.
function generic(a) {
    return a[a.length - 1];
}
let generic1 = generic([1, 3, 5]);
let generic2 = generic(["1", "3", "7"]);
console.log("generic1", generic1);
console.log("generic2", generic2);
// áp dụng từ khóa extends
function merge2(obj1, obj2) {
    return Object.assign(Object.assign(Object.assign({}, obj1), obj2), { fullName: `${obj1.firstName}+${obj2.lastName}` });
}
let test5 = merge2({ firstName: "binh", age: 5 }, { lastName: "nguyễn văn" });
function count(params) {
    let text = "";
    if (params.length == 1) {
        text = "Bình Tomy";
    }
    else if (params.length > 1) {
        text = "Quốc Vương";
    }
    return [params, text]; //[[a,b],"Quốc Vương"]
}
let count1 = count(["a", "b"]);
console.log("count1", count1);
let varibale = {
    value: "bình tommy",
};
// generic với class.
class Student {
    constructor(value) {
        this.value = value;
    }
    // hàm set lại giá trị
    setValue(value) {
        this.value = value;
    }
}
let std1 = new Student(6); // intance
std1.setValue(6);
console.log("giá trị mới", std1.value);
