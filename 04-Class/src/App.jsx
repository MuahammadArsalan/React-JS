import { useEffect, useState } from "react" 

import CustomBtn from "./Components/CustomBtn.jsx"
import axios from "axios"


// function App (){
  
//   let [ShowBtn,setShowBtn] = useState(true);
// let [btnValue,setBtnValue] = useState('');

// function UpdateValFunc(){
//   let promptValue = prompt('Enter Updated Value');

//   setBtnValue(promptValue)  ;

// }

// return(
//   <>
//   <h1>Hello UseEffect</h1>
  
// <button onClick={() => {setShowBtn(!ShowBtn)}}>Show or Hide</button>  
// <button onClick={UpdateValFunc}>Update</button>  
  
//   {ShowBtn ? <CustomBtn btnText={btnValue}/>:false}
  
//   </>
// )  



// }






// Counter UseEffect




// function App (){
  
//   let [add,setAdd] = useState(0);
  
//   let [subtract,setSubtract] = useState(10);
  
//   useEffect(()=>{
//     console.log('mounted');
    
//   },[]);
  
  
//   let addFunc = ()=>{
    
//     setAdd(add + 1);

//   }
// let lessFunc = ()=>{
  
//   if(subtract > 0){
//     setSubtract(subtract - 1)
//   }else if(subtract === 0){
// alert(`Number line ended don't touch this button again !!`)
//   }else{
//     return
//   }
    
//   } 
  

// return(
//   <>

// <h1>Hello Counter</h1>
// <button onClick={addFunc}>Add {add}</button>
// <button onClick={lessFunc}>Less {subtract}</button>

//   </>
// )

// }



// API Integration Using React JS



// function App(){
//   // let [data,setData] = useState([])
//   let [data,setData] = useState('')
  
// //   async function getUser(){

// //     let data = await axios('https://jsonplaceholder.typicode.com/users');
    
// //     console.log(data.data)
// // {data.data.map((item,index)=>{
// // console.log(item.name);
// // })}

    
// // }
// // getUser()


// useEffect(()=>{

//   async function getUser(){

//     let getData =await axios('https://jsonplaceholder.typicode.com/users');
//     // console.log(getData.data);
//     setData(getData.data);
//     }
//     getUser()
    

// },[])



//   return(
//     <>

//     <h1>Hello </h1>

// { data ? data.map((item)=>{
//   return <div>
//     <ul><li>{item.name}</li></ul>
//   </div>
// }): <h1>Loading......</h1>

// }


//     </>
//   )
// }




function App(){
let [data,setData] = useState() 


useEffect(()=>{


  async function ApiCalling(){

    try {
      let getData =await axios('https://jsonplaceholder.typicode.com/users')
    
    // console.log(getData.data);
    setData(getData.data);
    
    } catch (error) {
     console.log(error);
      
    }
  }
  
  ApiCalling()



},[]);




return(
  <>
<h1>Hello Users</h1>
 {data ? data.map((item)=>{
  return  <div key={item.id}>
  <ul>
    <li>{item.name}{' ' } <span>||</span> {''}{ item.email}</li>
  </ul>
</div>
 }): <h1>Loading.......</h1>
 
 }
  
  
  
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
