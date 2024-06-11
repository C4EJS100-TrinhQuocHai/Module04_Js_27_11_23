import { useState } from "react";
import Child from "./Child";
interface User{
    name:string,
    id:number,
    address:string
}
export default function Parent() {
    const [name,setName]=useState<any>("rikkei");
    const [user,setUser]=useState<User>({
        name:"hoa",
        id:1,
        address:"hà nội"
    })
    const [users,setUsers]=useState<User[]>([
        {
            name: "hoa",
            id: 1,
            address: "hà nội"
        },
        {
            name: "hồng",
            id: 2,
            address: "hồ chí minh"
        },{
            name: "nhung",
            id: 3,
            address: "sơn la"
        },
    ])
    // truyền dữ liệu từ component cha sang component con dùng props
    const getCompany=(company:string)=>{
        console.log("giá trị nhận về từ child",company);
        
    }
   
  return (
    <div>Parent
            <p>name:{name}</p>
          <Child name={name} user={user}
           users={users} test={setName}
           getCompany={getCompany}
           >

          </Child>
          
    </div>
  )
}
