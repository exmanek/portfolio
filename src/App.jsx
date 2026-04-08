import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import BurgerMenu from './components/BurgerMenu'

function App() {

  return (
    <>
    <Navbar/>
    <BurgerMenu/>
    </>
  )
}

export default App
