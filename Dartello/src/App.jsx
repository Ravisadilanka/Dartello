import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import './App.css'
import Products from './Components/Products/Products'
import Feedback from './Components/Feedback/Feedback'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <Navbar />
        <Hero />
      </div>
        <Products />
        <Feedback />
    </div>
  )
}

export default App
