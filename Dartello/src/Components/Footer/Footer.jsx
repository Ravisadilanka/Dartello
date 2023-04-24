import React from 'react'
import './Footer.css'
import { FaFacebook, FaPinterest, FaEbay, FaYoutube, FaWhatsapp} from 'react-icons/fa'

function Footer() {
  return (
   <section className="footer-wrapper">
    <div className="footer-head">
        <div className="footer-left">
            <div className="col-1">
                <a href="">About us</a>
                <a href="">Our Story</a>
                <a href="">Knowledge Base</a>
                <a href="">Site Map</a>
            </div>
            <div className="col-2">
                <a href="">Shipping & Refund</a>
                <a href="">Return Policy</a>
                <a href="">Warranty</a>
                <a href="">Shipment Tracking</a>
            </div>
            <div className="col-3">
                <a href="">Privacy Policy</a>
                <a href="">Terms of Sale</a>
                <a href="">Terms of Service</a>
                <a href="">Help & Contact</a>
            </div>
        </div>

        <div className="footer-right">
            <div className="row-1">
                <input type="text" placeholder='Email' size={25}/>
                <button>subcribe</button>
            </div>
            <div className="row-2">
                <a href=''><FaFacebook /></a>
                <a href=''><FaPinterest /></a>
                <a href=''><FaEbay /></a>
                <a href=''><FaYoutube /></a>
                <a href=''><FaWhatsapp /></a>
            </div>
        </div>
    </div>

    <div className="footer-body">
        <p>Copyright © 2023 Dartello. All Rights Reserved.</p>
        <img src="./logo.png" alt="" />
        <span>
            <img src="./card-1.png" alt="" />
            <img src="./card-2.png" alt="" />
            <img src="./card-3.png" alt="" />
            <img src="./card-4.png" alt="" />
        </span>
    </div>

   </section>
  )
}

export default Footer