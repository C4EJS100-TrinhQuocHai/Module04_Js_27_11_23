console.log("typescript!");
// let a:string="2";
// let b:number=2;
// console.log(a==b);
/* let num1:number=5;
let num2:string="5";
let num3=num1/num2;
console.log(num3); */
let firstName: string = "john";
let lastName: string = "doe";
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
let fullName: string = firstName + " " + lastName;
console.log(fullName);
// let arr=[1,1,1,2,3,3,4,2,2,3,3,2,1,1];
// let result= new Set(arr);
// console.log(1111,result);
let inputString: string = "banana";
let uniqueCharacters: string = "";
for (let i = 0; i < inputString.length; i++) {
    if (uniqueCharacters.indexOf(inputString[i]) === -1) {
        uniqueCharacters += inputString[i];
    }
}
console.log(uniqueCharacters);
// function tính tổng
function sum() {
    // 1. lấy giá trị các ô input 
    let inputA= document.getElementById("numberA") as HTMLInputElement;
    let inputB= document.getElementById("numberB") as HTMLInputElement;
    let result= document.getElementById("result") as HTMLElement;
    result.innerHTML=`gia trị là : ${+inputA.value + +inputB.value}`;
}

