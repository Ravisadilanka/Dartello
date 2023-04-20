import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import './App.css'
import Products from './Components/Products/Products'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <Navbar />
        <Hero />
      </div>
        <Products />
    </div>
  )
}

export default App
