import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import './App.css'
import Products from './Components/Products/Products'
import Feedback from './Components/Feedback/Feedback'
import Company from './Components/Company/Company'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <Navbar />
        <Hero />
      </div>
        <Products />
        <Feedback />
        <Company />
        <Services />
        <Footer />
    </div>
  )
}
export default App
