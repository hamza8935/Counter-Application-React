import React, { useState } from 'react'
import './App.css'


export default function Increment() {
 
    let [count , setCount] = useState(0);

let IncreFun = () =>{
   setCount(count+ 1)
};
let DecFun = () =>{
    setCount(count - 1)
}

  return (
      <>
    <div className='main'>
      <h1 className='result'>{count}</h1>
      <div>
      <button onClick={IncreFun}>Click me</button>
      <button onClick={DecFun}>Click me</button>
      </div>
    </div>
   
        
    
    </>
  )
}
