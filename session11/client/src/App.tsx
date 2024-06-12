
import { useState } from 'react'
import axios from 'axios';
import Login from './components/Login'

export default function App() {
  const [users,setUsers]= useState([]);
  const getUser=()=>{
    // lấy token ở local
    // token khi nào có
    // khi đăng nhập mới có
    let getToken=localStorage.getItem("token")||"";
    axios.get("http://localhost:8081/api/v1/user",{
      headers:{
        authorization:`Bearer ${getToken}`
      }
    })
    .then((res)=>{
      console.log("resssssssss",res);
      setUsers(res.data.data);
    })
    .catch(err=>console.log(err));
  }
  return (
    <div>
      App
      <Login></Login>
      <button onClick={getUser}>getUser</button>
      <ul>
        {users.map((item:any)=> <li key={item.id}>{item.username}</li>)
        }
      </ul>
    </div>
  )
}
