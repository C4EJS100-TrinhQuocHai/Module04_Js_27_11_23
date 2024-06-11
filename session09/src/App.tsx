import { useState } from "react"
import Parent from "./components/Parent";
import Form from "./components/Form";
// import Child from "./components/Child";
export default function App() {
  const [count,setCount]=useState<number>(0);
  const [name,setName]= useState<string>("hoa");
  return (
    <div>App
      <p>giá trị count : {count}</p>
      <p> xin chào {name} </p>
      {/* <Parent></Parent> */}
     
      {/* <Parent/> */}
      <Form></Form>

    </div>
  )
}
