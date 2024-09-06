import { useState } from 'react'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AboutUs/>
    {/* <Contact/> */}
    </>
  )
}

export default App
