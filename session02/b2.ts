/* 
 9. union- 
 */
let ourUnion:number|string=5;
ourUnion="5";

 /* 
    10. type alias( kiểu bí danh)
  */
    type Code=string|number;
    function statusCode(code:Code):void{
        console.log(`status code is  ${code}`);
        
    }
    statusCode(404);
    statusCode("404");
    type CarColor=string;
    type CarType=string;
    type Car={
        color:CarColor,
        type:CarType,
    }
    const car:Car={
        color:"green",
        type:"honda",
    }
    /* 11. unknow-kiểu không xác định   */

    function test (params:unknown) {
      // giả sử thầy đi xử lý cái  tham số truyền vào
      // khi dùng kiểu dữ liệu unknown thì phải đi kiểm tra kiểu dữ liệu trước khi xử lý
      if(typeof params==="string"){
             let result = params.toUpperCase();
             console.log(11111, result);
      }else{
        console.log("giá trị truyền vào không phải string");
      }
    }
    test("hello typescript!");
    /* 
        12. never 
        dùng trong các function xử lý các vòng lặp vô tận, dùng để đếm
     */
    function never ():never{
        let count=0;
        while(true){
            count++;
            console.log("giá trị biến đếm count",count);
        }
    }
    // 
    /* 
       13. type tuples -bộ dữ liệu (bộ fix cứng)
       tạo bộ khung cho dữ liệu mà không được phép sửa đổi.
     */
    let ourTuples:(number|string)[]=["1",1];
    let ourTuples1:[number,string,boolean]=[1,"hoa",true];
    ourTuples1.push(5);
    console.log("111",ourTuples1);
    /* 
        14. type enum -liệt kê 
     */
    enum Role{
        ADMIN=1,
        USER
    }
    type Student={
        name:string,
        age:number,
        role:Role.ADMIN
    }
    let student:Student={
        name:"minh thu",
        age:25,
        role:1
    }
    /* 
        15. type intersection  kiểu kết hợp &
     */
    type A={
        name:string,
        id:number
    }
    type B={
        address:string,
        name:string,
    }
    type C = A&B;
    let person:C={
        name:"hoa",
        id:5,
        address:"hà nội",
    }
    


    
