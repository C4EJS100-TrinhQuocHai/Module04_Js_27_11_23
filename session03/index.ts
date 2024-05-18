/* 
    Bài 1: 
    Viết một hàm trong đặt tên là average() nhận vào một mảng các số nguyên 
    Viết logic để tính toán giá trị trung bình của các số trong mảng
    Trả về kết quả là giá trị trung bình của các số và in ra ngoài
     màn hình console.log()
 */
function average(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}
let numberArr: number[] = [1, 2, 3, 4, 5, 6];
console.log("giá trị trung bình của mảng số nguyên", average(numberArr));

//[1,2,3,4]
/* 
    Bài 2: Viết một hàm có tham số truyền vào là một mảng số nguyên 
    Xử lý logic để tìm ra số có giá trị lớn nhất trong mảng

*/
function findMaxValue(arr: number[]): number {
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}
let numbers: number[] = [2, 5, 4, 9, 7, 6, 6];
console.log("giá trị lớn nhất trong mảng numbers là ", findMaxValue(numbers));
/* 
    Bài 3: 
    các bước làm:

 */
interface Contact {
    id: number;
    phone: string;
    name: string;
}
let contacts: Contact[];
// xây dựng những cái hàm
// thêm
function addContact() {}
// đọc ra các liên hệ
// xóa
// cập nhật
/* 
    Bài 4: 
    mảng nhiều chiều: tức là các phần tử trong mảng lại là 1 cái mảng khác
    khai báo mảng arr1
    khai báo mảng arr2
    gộp hai mảng array1 và array2 và lưu trữ giá trị của chúng vào 
    một mảng array3 có số lượng phần tử bằng với số lượng phần tử của hai mảng trên


 */
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
/* 
      để gộp mảng
        tạo ra 1 mảng mới sau đó ném arr1 và arr2 vào
        ném các phần tử trong arr2 vào arr1

    1. dùng concat()
        -tạo ra mảng mới.
    2. dùng toán tử spread
        -chắc chắn tạo ra 1 mảng mới
    3. đi duyệt tất cả phần tử  của 2 mảng và push vào 1 mảng rỗng
*/
// let result:number[]=arr1.concat(arr2);
// console.log(1111,arr1);
// let result:number[]=[...arr1,...arr2];
// console.log("1111",arr1);

/* 
    Bài 5: 
    Xây dựng một hàm có hai tham số truyền vào: start và end.
    bội số của 5:  0,5,10,15,20...
    Kiểm tra và in ra tất cả các số chia hết cho 7 nhưng không chia hết cho 5
 */
function Bai5(start: number, end: number): string {
    let text: string = "";
    for (let i = start; i <= end; i++) {
        if (i % 7 == 0 && i % 5 !== 0) {
            text += `${i},`;
        }
    }
    // let number3=[4,5,6,7,8];
    // console.log(9999,number3.slice(0,4));

    // return text.slice(0,text.length-1);
    let a = text.split(",");

    a.splice(text.length - 1, 1);
    return a.join();
}
console.log("chia hết 7 và không chia hết 5 ", Bai5(1, 40));
/* 
    Bài 6: 
    khai báo 1 mảng số nguyên
    let numbers:number[]=[4,5,7,6,9];
        ===> [4,5,6,7,9];
        thầy muốn chèn số 8 vào,
        numbers [4,5,6,7,8,9]

    
 */
