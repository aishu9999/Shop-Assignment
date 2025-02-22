import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Nav from './components/Nav'
import Home from './components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add />}/>
        </Routes>
        </div>
    </>
  )
}

export default App
