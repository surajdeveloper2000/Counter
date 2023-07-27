import React, { useState } from "react";
import './App.css'

// simple counter method by using usestate
function App() {
  const [data, setData] = useState(0)

  return (
    
    <div className='app'>
      <button className="increment" onClick={() => {
        return (
          setData(data + 1)
        )
      }}>Increment</button>
      <h1>{data}</h1>
      <button className="decrement" onClick={() => {
        return (
          setData(data - 1)
        )
      }}>Decrement</button>
    </div>
  )
}
export default App
