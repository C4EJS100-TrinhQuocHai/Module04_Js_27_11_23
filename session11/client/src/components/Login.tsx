import React, { useState } from 'react'
import axios from "axios";
interface User{
    email:string,
    password:string,
}
export default function Login() {
    const [user,setUser]=useState<User>({
        email:"",
        password:"",
    })
    const login=()=>{
        let user={
            name:"hoa",
            password:"123"
        }
        axios.post("http://localhost:8081/api/v1/login",user)
        .then(response=>{
            console.log("giá trị server trả về",response);
            localStorage.setItem("token",response.data.data);
        })
        .catch(err=>console.log(err))
        
    }
  return (
    <div>
        Login
        <label htmlFor="">email</label>
        <input type="text" /> <br />
        <label htmlFor="">password</label>
        <input type="text" /> <br />
        <button onClick={login}>Login</button>
    </div>
  )
}
