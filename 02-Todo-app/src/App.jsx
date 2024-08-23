import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


//Counter code

// let App = ()=>{

// let [num,setNum] = useState(0);

// let addCounter= ()=>{
  
  
//   setNum(num + 1);
  
// }
// let lessCounter= ()=>{

  
// setNum(num - 1);

// }

//   return(
//     <>
// <p>{num}</p>
// <button onClick={addCounter}>click to add</button>
// <button onClick={lessCounter}>Click to less</button>
    
//     </>
//   )
// }

let App = ()=>{

let [todo,setTodo] = useState([])
let todoVal = useRef()

let addTodo = (event)=>{
event.preventDefault();

console.log(todoVal.current.value);
todo.push(todoVal.current.value);
setTodo([...todo])
console.log(todo);


todoVal.current.value = ''
}


let deleteTodo = ()=>{


}



return(

<>

<form>

<input type="text" placeholder='Enter Todo' ref={todoVal} required />
<button onClick={addTodo}>Click</button>
</form>
<ul>
{todo.map((item,index)=>{

return(
  <>
  
<li>{item} <button onClick={()=>{}}>delete</button><button>Edit</button></li>
  
  
  
  </>
)

})}

</ul>



</>




)





}















// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
