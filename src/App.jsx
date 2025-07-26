import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () =>{
    setCounter(counter+1)
    
  }

   const removeValue = () =>{
    setCounter(counter-1)
    
  }
  


  

  return (
    <>
    <h2><b>Counter</b></h2>
    <h3>The Counter Value is : {counter}</h3>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Delete Value</button>

     </>
  )
}

export default App
