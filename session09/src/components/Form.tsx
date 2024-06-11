import { useState } from "react"
import TextArea from "./TextArea";
import SelectOption from "./SelectOption";
import Uncontroller from "./Uncontroller";

interface User {
    name: string,
    email: string,
    password: string,
}
export default function Form() {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: "",
    })
    const handleSubmit = (event: React.FormEvent) => {
        // ngăn chặn việc submit lên form
        event.preventDefault();
        console.log("giá trị người dùng nhập",user);
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const name = event.target.name;
        setUser({...user,[name]:value});
    }
    return (
        <div>Form
            {/* 
        1. controller
        2. uncontroller
         */}
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">name</label>
                <input
                    onChange={handleChange}
                    name="name"
                    type="text"
                /> <br />
                <label htmlFor="">email</label>
                <input
                    onChange={handleChange}
                    name="email"
                    type="text"
                /> <br />
                <label htmlFor="">password</label>
                <input
                    onChange={handleChange}
                    name="password"
                    type="text"
                /> 
                <button>register</button>
            </form>
            <TextArea></TextArea>
            <SelectOption></SelectOption>
            <Uncontroller></Uncontroller>
        </div>
    )
}
