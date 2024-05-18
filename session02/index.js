"use strict";
console.log("typescript!");
// let a:string="2";
// let b:number=2;
// console.log(a==b);
/* let num1:number=5;
let num2:string="5";
let num3=num1/num2;
console.log(num3); */
let firstName = "john";
let lastName = "doe";
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
let fullName = firstName + " " + lastName;
console.log(fullName);
// let arr=[1,1,1,2,3,3,4,2,2,3,3,2,1,1];
// let result= new Set(arr);
// console.log(1111,result);
let inputString = "banana";
let uniqueCharacters = "";
for (let i = 0; i < inputString.length; i++) {
    if (uniqueCharacters.indexOf(inputString[i]) === -1) {
        uniqueCharacters += inputString[i];
    }
}
console.log(uniqueCharacters);
// function tính tổng
function sum() {
    // 1. lấy giá trị các ô input 
    let inputA = document.getElementById("numberA");
    let inputB = document.getElementById("numberB");
    let result = document.getElementById("result");
    result.innerHTML = `gia trị là : ${+inputA.value + +inputB.value}`;
}
