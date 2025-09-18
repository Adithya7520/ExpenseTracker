import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login-Register/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './Login-Register/Register'

function App() {

  return (

      <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/Register' element={<Register/>}/>
      </Routes>
    
  )
}

export default App
