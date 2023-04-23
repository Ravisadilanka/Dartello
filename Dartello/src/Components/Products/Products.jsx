import React from 'react'
import './Products.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import data from './../Data/Data'
import { AiOutlineHeart } from 'react-icons/ai'
import Countdown from 'react-countdown'
import {motion} from 'framer-motion'

function Products() {
    const Completionist = () => <span>Sale Ended!</span>;
  return (
    <section className='p-wrapper'>
        <div className="p-header">
            <motion.div
                initial ={{opacity: 0, transform: "translateY(-100px)"}}
                whileInView={{opacity: 1, transform: 'translateY(0px)'}}
                transition={{duration: 0.6}}
            >
                <span>
                    <h2>Shop By Category</h2>
                </span>
            </motion.div>
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
        
        <div className="p-header">
            <motion.div
                initial ={{opacity: 0, transform: "translateY(-100px)"}}
                whileInView={{opacity: 1, transform: 'translateY(0px)'}}
                transition={{duration: 0.6}}
            >
                <span>
                    <h2>New Arrivals</h2>
                </span>
            </motion.div>
            <span>
                <a href="">BROWSE ALL NEW ARRIVALS</a>
                <FaLongArrowAltRight size={15}/>
            </span>
        </div>
        <div className="p-card">
            {
                data.map((item, i) => (
                    <div className="p-body">
                        {item.newArrival ? 
                            <a href='' >
                                <AiOutlineHeart size={25}/>
                                <img src={item.img} alt="" width={300}/> <h2>{item.name}</h2>
                            </a>: ''}
                    </div>
                ))
            }
        </div>

        <div className="p-header">
            <motion.div
                initial ={{opacity: 0, transform: "translateY(-100px)"}}
                whileInView={{opacity: 1, transform: 'translateY(0px)'}}
                transition={{duration: 0.6}}
            >
                <span>
                    <h2>Popular Products</h2>
                </span>
            </motion.div>
            <span>
                <a href="">BROWSE ALL Popular Products</a>
                <FaLongArrowAltRight size={15}/>
            </span>
        </div>

        <div className="p-card">
            {
                data.map((item, i) => (
                    <div className="p-body">
                        {item.popular ? 
                            <a href='' >
                                <AiOutlineHeart size={25}/>
                                <img src={item.img} alt="" width={300}/> <h2>{item.name}</h2>
                            </a>: ''}
                    </div>
                ))
            }
        </div>

        <div className="p-header">
            <motion.div
                initial ={{opacity: 0, transform: "translateY(-100px)"}}
                whileInView={{opacity: 1, transform: 'translateY(0px)'}}
                transition={{duration: 0.6}}
            >
                <span>
                    <h2>Flash Sale Products</h2>
                </span>
            </motion.div>
            <span>
                <a href="">BROWSE ALL Flash Sale Products</a>
                <FaLongArrowAltRight size={15}/>
            </span>
        </div>

        <div className="p-countdown">
            <Countdown 
                date={Date.now() + 500000000}
                renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (completed) {
                    }
                    else {
                        return <div className='p-all'>
                                    <div className="p-count-num">
                                        <span>{days}</span>
                                        <span>{hours}</span>
                                        <span>{minutes}</span>
                                        <span>{seconds}</span>
                                    </div>

                                    <div className="p-count-text">
                                        <span>Days</span>
                                        <span>Hours</span>
                                        <span>Minutes</span>
                                        <span>Seconds</span>
                                    </div>
                            </div>
                    }
                }}
            />
        </div>

        <div className="p-card">
        {
                data.map((item, i) => (
                    <div className="p-body">
                        {item.flashSale ? 
                            <a href='' >
                                <AiOutlineHeart size={25}/>
                                <img src={item.img} alt="" width={300}/> <h2>{item.name}</h2>
                                <span>Sale!</span>
                            </a>: ''}
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Products