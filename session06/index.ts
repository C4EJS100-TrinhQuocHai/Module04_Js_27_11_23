/* 
    tính đóng gói   : encapsulation
    - acccess  modifier : phạm vi truy cập
    - đối với các thuộc tính và để phạm vi private muốn truy cập được
    phải thông qua get, set , các phương thức để bên ngoài lớp có thể truy cập
    tính kế thừa    : inheritance
    - dùng từ khóa extends (kế thừa)
    - một class con chỉ kế thừa được 1 class cha.
    - một class cha có thể cho nhiều class con kế thừa
    - khi class con kế thừa class cha thì sẽ thừa hưởng các thuộc tính và phương thức
    của thằng cha (phạm vi public or protected)
    - các phương thức khi class con kế thừa từ class cha có thể dùng phương thức 
    hoặc ghi đè phương thức (override|| overwrite)
    tính trừu tượng : abstraction
     che giấu đi các logic bên trong, các class khi kế thừa các class abstraction
     phải đi triển khai các logic đó
     -Đối với abstract class nó khác class bình thường ở đâu?
      + là nó không khởi tạo đối tượng được.
      + abstract class thì có thể có các thuộc tính và phương thức như class 
      bình thường
      + một lớp mà chứa phương thức abstract thì lớp đó bắt buộc phải là abstract
      + một lớp khi kế thừa lớp abstract thì bắt buộc phải triển khai tất cả các
      phương thức abstract  trong lớp abstract cha.
      + một lớp abstract khi kế thừa một lớp abstract khác thì không cần thiết phải đi
      implement các phương thức abstract ở trong class đó!
    tính đa hình    : polymorphism
 */
 abstract class Shape {
    radius:number;
    constructor(radius:number){
    this.radius=radius;
    }
    getArea(){

    }
    abstract getShape():void;
 }

 abstract class A{
    abstract getA():void
 }
 abstract class B extends A{

 }

 class Cricle extends Shape{
    constructor(radius:number){
        super(radius)
        this.radius=radius;
    }
    getShape(): number {
        return Math.PI* this.radius**2
    }
 }
 let cricle= new Cricle(5);
 console.log("diện tích của hình chữ nhật là ",cricle.getShape());
 
 class  Square extends Shape{
        constructor(radius:number){
            super(radius)
            this.radius=radius;
        }
        getShape(): number{
            return this.radius*this.radius;
        }
 }
 let square= new Square(4);
 console.log("diện tích của hình vuông là", square.getShape());
 

