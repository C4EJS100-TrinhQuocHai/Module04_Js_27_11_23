import { useState } from "react";


export default function SelectOption() {
        const [value,setValue]=useState<string>("");
        const handleChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{
            setValue(event.target.value);
        }
        console.log("giá trị người dùng chọn",value);
        
    return (
        <div>SelectOption
            <select onChange={handleChange} >
                <option value="">Chọn tỉnh thành phố</option>
                <option value="hà nội">Hà Nội</option>
                <option value="hải phòng">Hải phòng</option>
                <option value="nghệ an">Nghệ an</option>
            </select>
        </div>
    )
}
