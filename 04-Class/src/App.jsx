import { useState } from "react"
import {CustomBtn} from "./Components/CustomBtn.jsx"


function App (){
  
  let [ShowBtn,setShowBtn] = useState(true);


return(
  <>
  <h1>Hello UseEffect</h1>
  
<button onClick={() => {setShowBtn(!ShowBtn)}}>Show or Hide</button>  
  
  {ShowBtn ? <CustomBtn btnText ='sns'/>: <p></p>}
  
  </>
)  



}
























// import { useState } from "react"
// import CustomBtn from "./Components/CustomBtn.jsx"

// function App(){

// let [btn,setBtn] = useState(true) 
// let [updateBtnVal,setupdateBtnVal] = useState(true) 


// function updateValFunc(){
  
//   let UpdatedValPropmt = prompt ('Enter Updated Value')
//   setupdateBtnVal(UpdatedValPropmt);
// }
// return(
//   <>
  
//   {/* <h1>Hello world</h1> */}

// {/* <button onClick={()=>{setBtn(!btn)}}>btn</button>
//   {btn ? <CustomBtn/> :<p></p>}
//   */}
  
//    {/* <button onClick={()=>setBtn(!btn)}>showBtn</button>
// <button onClick={updateVal}> Update</button>
//   {btn ? <CustomBtn btnText= {updateBtnVal}/> : null}
//    */}
//   <h1>Hello</h1>
//      <button onClick={()=> setBtn(!btn)}>btn</button>
//      <button onClick={updateValFunc}>update btn</button>
//      {/* {btn ? <CustomBtn btnText= {updateBtnVal}/> : null} */}
//  {btn ? <CustomBtn btnText={updateBtnVal} /> : <p></p>}
     
//   </>
// )

// }

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
