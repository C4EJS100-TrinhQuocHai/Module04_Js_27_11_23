import { useState } from "react"


export default function TextArea() {
     const [text,setText]=useState<string>("");

     const handleChange= (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setText(event.target.value);
     }
     console.log("giá trị người dùng nhập",text);
     
  return (
    <div>TextArea
        <textarea onChange={handleChange} name="" id=""></textarea>
    </div>
  )
}
