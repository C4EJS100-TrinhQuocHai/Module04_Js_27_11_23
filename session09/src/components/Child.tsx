import { useState } from "react";

// khai báo kiểu dữ liệu để hứng kết quả props truyền
interface Props {
    name: string;
    user: {
        name: string,
        id: number,
        address: string,
    }
    users: {
        name: string,
        id: number,
        address: string,
    }[],
    test:React.Dispatch<React.SetStateAction<string>>,
    getCompany:(company:string)=>void
}
export default function Child(props: Props) {
    const [company,setCompany]=useState<string>("rikkei-soft")
    console.log("giá trị nhận về ", props);
    // destructoring
    const { user } = props;//{ user:}
    const {users}=props;
    console.log(11111,props.test);
    

    //  const student={
    //     vuong:"đà nẵng",
    //     age:20
    //  }
    //  const {vuong,age}=student;
    const send=()=>{
        props.getCompany(company);
    }
    return (
        <div>Child
            <p>name : {user.name}</p>
            <p>id: {user.id}</p>
            <p> address: {user.address}</p>
            <p>*********</p>
            {users.map((item)=>{
                return (
                   <div key={item.id}>
                        <p>userName:{item.name}</p>
                        <p>address : {item.address}</p>
                   </div>
                )
            })}
            <button onClick={()=>props.test("minh hà")}>click </button>
            <button onClick={send}>sendCompany</button>

        </div>
    )
}
