/* 
    Áp dụng kiểu dữ liệu Generics, hãy xây dựng một hàm myMap() có logic giống 
    như hàm map() làm việc với mảng trong ES6,  hàm có 2 tham số truyền vào:
     tham số 1 là một mảng, tham số thứ 2 là một mảng kết quả  được ánh xạ. 
     Sau khi đã xây dựng xong hàm, hãy sử dụng hàm để làm bài toán sau:
      “ Nhập vào một mảng các số nguyên,
     in ra kết quả là một mảng mới với kết quả là mảng cũ nhân với 2”

*/
 function myMap<T,U>(arr:T[],callbackFn:(item:T)=>U):U[]{
    // arr=[1,2,3,4,5];
    let result:U[]=[];
    for (const item of arr) {
        result.push(callbackFn(item));
    }
    return result;
 }
 let myArr=[1,2,3,4,5];
 let result= myMap(myArr,(item)=>item*2);
 console.log("result",result);
 

