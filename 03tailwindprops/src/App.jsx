import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Jason",
    age: 19,
    address: {
      city: "Edmonds",
      state: "Washington",
      country: "USA"
    }
  }
  let newArr = [1,2,3,4,5,6,7,8]

  return (
    <>
      <Header />
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="jsonify" myArr={newArr}/>
      <Card post="Boom"/>
      <Card />
    </>
  )
}

export default App
