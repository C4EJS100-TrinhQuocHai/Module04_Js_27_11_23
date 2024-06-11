import { useRef, useState } from "react";

interface User{
    email:string,
    password:string,
}
export default function Uncontroller() {
    const [user,setUser]= useState<User>({
        email:"",
        password:"",
    })
    // dùng hook useRef để khởi tạo
    const emailRef= useRef<HTMLInputElement|null>(null);
    const passRef = useRef<HTMLInputElement|null>(null);

    const handleClick=(event:React.FormEvent)=>{
            // dừng việc submit lên form
            event.preventDefault();
            const mailValue= emailRef.current?.value;
            const passValue = passRef.current?.value;
            console.log("giá trị người dùng nhập",{
                email:mailValue,
                password:passValue,
            });
    }
  return (
    <div>
        Uncontroller
          <form  >
              <label htmlFor="">email</label>
              <input
                  ref={emailRef}
                  type="text"
              /> <br />
              <label htmlFor="">password</label>
              <input
                    ref={passRef}
                  type="text"
              />
              <button onClick={handleClick} >login</button>
          </form>

    </div>
  )
}
