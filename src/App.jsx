import { useState } from 'react'

import './App.css'

function App(){
  let [num,setNum]=useState(0)
  const counter=()=>{
setNum(num=num+1)
console.log(setNum)
  }
  const decrement=()=>{
    setNum(num=num-1)
    console.log(setNum)
      }
return(
  <>
  <h1>counter App</h1>
  <p >{num}</p>
  <button onClick={counter}>Increment</button>
  <button onClick={decrement}>Decrement</button>
  
  </>
)

}
export default App
