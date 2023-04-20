import React from 'react'
import './Products.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import data from './../Data/Data'

function Products() {
  return (
    <section className='p-wrapper'>
        <div className="p-header">
            <span>
                <h2>Shop By Category</h2>
            </span>
            <span>
                <a href="">BROWSE ALL CATEGORIES</a>
                <FaLongArrowAltRight size={15}/>
            </span>
        </div>
        <div className="p-card">
            <div className="p-body">
                <div className="p-catergory-img">
                    <a href="">
                        <img src="./product.jpeg" alt="" width={300}/>
                    </a>
                </div>
                <h1>Power Inverters</h1>
            </div>
            <div className="p-body">
                <div className="p-catergory-img">
                    <a href="">
                        <img src="./product.jpeg" alt="" width={300}/>
                    </a>
                </div>
                <h1>Home Lighting</h1>
            </div>
            <div className="p-body">
                <div className="p-catergory-img">
                    <a href="">
                        <img src="./product.jpeg" alt="" width={300}/>
                    </a>
                </div>
                <h1>Power Supplies</h1>
            </div>
            <div className="p-body">
                <div className="p-catergory-img">
                    <a href="">
                        <img src="./product.jpeg" alt="" width={300}/>
                    </a>
                </div>
                <h1>Solar Panels</h1>
            </div>
        </div>
            
    </section>
  )
}

export default Products