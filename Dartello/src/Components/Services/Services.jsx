import React from 'react'
import './Services.css'
import { FaWallet,FaGlobe,FaTruck,FaPlaneDeparture,FaHandshake} from 'react-icons/fa'

function Services() {
  return (
    <section className="s-wrapper">
        <div>
            <span><FaWallet size={30}/></span>
            <h4>Money Back Guarantee</h4>
        </div>
        <div>
            <span><FaGlobe size={30}/></span>
            <h4>Free Shipping Worldwide</h4>
        </div>
        <div>
            <span><FaTruck size={30}/></span>
            <h4>Worldwide Expedited Delivery</h4>
        </div>
        <div>
            <span><FaPlaneDeparture size={30}/></span>
            <h4>30 Days Free Returns</h4>
        </div>
        <div>
            <span><FaHandshake size={30}/></span>
            <h4>24/7 Customer Service</h4>
        </div>
    </section>
  )
}

export default Services