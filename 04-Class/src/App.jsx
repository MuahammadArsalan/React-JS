import { useState } from "react"
import CustomBtn from "./Components/CustomBtn.jsx"

function App(){

let [btn,setBtn] = useState(true) 


return(
  <>
  
  <h1>Hello world</h1>

{/* <button onClick={()=>{setBtn(btn)}}>btn</button> */}
  <CustomBtn/>
  
  </>
)

}

export default App

// import { useState } from "react";

// function App() {
//   const [showBtn , setShowBtn] = useState(true);
//   const [btnValue , setBtnValue] = useState("hello")


//   const updateValue = ()=>{
//     const value = prompt("enter updated value");
//     setBtnValue(value)
//   }
//   return (
//     <>
//     <h1>Hello</h1>
//     <button onClick={()=> setShowBtn(!showBtn)}>btn</button>
//     <button onClick={updateValue}>update btn</button>
//     {showBtn ? <CustomBtn title={btnValue} color="orange"/> : null}
//     </>
//   )
// }

// export default App
