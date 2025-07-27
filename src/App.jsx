import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () =>{
    if(counter<100){
      setCounter(counter+1)
    }
    
  }

   const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  


  

  return (
    <>
    <h2><b>Counter</b></h2>
    <h3 className='bg-green-400'>The Counter Value is : {counter}</h3>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Delete Value</button>

     </>
  )
}

export default App
