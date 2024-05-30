/* 
    interface: cũng giống như class , nó dùng để khai báo các thuộc tính
    và phương thức.
    + khi 1 class implement 1 interface thì bắt buộc phải triển  khai thuộc tính
    và phương thức của interface đó
    + phạm vi truy cập đối với các thuộc tính và phương thức ở trong interface
    bắt buộc phải là public
    + không khởi tạo đối tượng từ interface được.
    + về quy tắc đặt tên thì nên đặt chỉ I viết hoa sau đến tên interface

*/
interface IA{
    // nơi đi  khai báo các thuộc tính và phương thức
    name:string,
   getName():void;
}

class Rikkei implements IA{
    id:number;
    name:string;
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
    getName(): void {
        
    }
}
class RiikeiAcademy implements IA {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): void {}
}
type Product={
    id:number,
    name:string,
    getProduct():void;
}
// có thể kết hợp nhiều type lại được
type C={
    address:string;
}
type D=Product|C;
interface IMyproduct{
    name:string,
    id:number
}
let cart:Product[]=[];
class Binh implements Product{
    id: number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    getProduct(): void {
        console.log("lấy sản phẩm");
    }
}
let binh= new Binh(1,"binh tommy");
binh.getProduct();
class Son{
    getName(){
        console.log("hello son!");
        
    }
}
