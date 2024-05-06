import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const decValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with jsonify</h1>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}> Add value</button> {" "}
      <button onClick={decValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
