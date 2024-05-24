/* 
    OOP : object oriented programing -lập trình hướng đối tượng
    là một mô hình lập trình quy về các đối tượng
    các đối tượng sẽ gồm có thuộc tính và phương thức
    Ví dụ : đối tượng con Mèo
    thuộc tính: màu mắt, màu lông, cân nặng....
    các phương thức: bắt chuột, chạy,.....
    Ví dụ đối tượng xe 
    thuộc tính: màu xe, năm sản xuất, hãng xe.....
    các phương thức: di chuyển,.....
    bằng việc tổ chức code OOP giúp code gọn gàng hơn, mạch lạc hơn, cụ thể, rõ ràng
    ********************
    4 tính chất của lập trình OOP
        1. tính đóng gói hay bao đóng (encapsulation)
          - là tính chất dùng để ngăn chặn các thuộc tính và phương thức khi mà 
          để trạng thái truy cập là private trong một đối tượng không bị truy cập 
          hoặc tác động từ bên ngoài không nằm trong đối tượng đó
        2. tính trừu trượng (abstraction)
        3. tính kế thừa (inheritance)
        4. tính đa hình ( polymorphism)
    -*******************
    Cách khởi tạo đối tượng 
    *********************
    access modifier : phạm vi truy cập nó thể hiện bởi tính bao đóng hay đóng gói
    (encapsulation)
    nó được thể hiện bởi 3 từ khóa truy cập phạm vi
    1. public
        - khi khai báo thuộc tính và phương thức nếu không  thêm bổ từ truy cập
        thì mặc định sẽ là public.
    2. private
        - chỉ được sử dụng bên trong class đó thôi
        - bên ngoài không truy cập được, muốn truy cập phải thông qua 
        các phương thức(get,set)  bên trong đối tượng đó.
    3. protected
        - chỉ được sử dụng bên trong class và subclass(class con kế thừa class cha)
*/
class Person {
    // các thuộc tính
  private  lastName: string;
  private  firstName: string;
    // hàm tạo constructor
    constructor(lastName: string, firstName: string) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    // nơi khai báo các phương thức cho lớp Person
    // phương để lấy thông tin của đối tượng
    getFullName(): void {
        console.log(`họ và tên : ${this.lastName + this.firstName}`);
    }
    setFirstName(fistName:string):void{
        this.firstName=fistName;
    }
    getFirstName() :string{
        return this.firstName;
    }
    set setLastName(lastName:string){
        this.lastName=lastName
    }
}
// đi khởi tạo đối tượng từ lớp Person
let person1 = new Person("Nguyễn", "Minh Thu");
person1.setFirstName("Minh Hà");
person1.setLastName="Lê";
person1.getFullName();
// console.log("giá trị firstName là", person1.getFirstName());
// console.log("thông tin lastname",person1.lastName);
// person1 được gọi là 1 instance của lớp Person
// person1.getFullName();
// console.log("đối tượng được khởi tạo từ lớp person", person1);
