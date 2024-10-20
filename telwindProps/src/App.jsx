import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username :"azmatullah",
    age : 21
  }
  let arr=[1,3,5,6]
  return (
    <>
    <h1 className='bg-green-400 text-black'>telWind test</h1>
    <Card username="azmatullah" btnText="click me"/>
    <Card username="khan bhai"  btnText="visit me"/>

    
    </>
  )
}

export default App
