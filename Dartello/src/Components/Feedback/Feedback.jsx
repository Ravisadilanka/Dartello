import React from 'react'
import CountUp from 'react-countup'
import './Feedback.css'
import { FaRegThumbsUp } from 'react-icons/fa'
import {motion} from 'framer-motion'
import comments from '../Data/Comments'
import { RiStarSFill } from 'react-icons/ri'
import { SiEbay } from 'react-icons/si'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Feedback() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1}
  return (
    <section className="f-wrapper">
        <div className="f-stats">
            <div className="f-stat">
                <h1><CountUp start={0} end={27000} duration={3}/></h1>
                <span>+</span>
            </div>
            <div className="f-stat">
                <h1><CountUp start={0} end={5000} duration={3}/></h1>
                <span>+</span>
            </div>
            <div className="f-stat">
                <h1><CountUp start={0} end={3500} duration={3}/></h1>
                <span>+</span>
            </div>
            <div className="f-stat">
                <h1><CountUp start={0} end={99} duration={3}/></h1>
                <span>%</span>
            </div>
        </div>

        <div className="f-stats">
            <div className="f-stat-name">
                <h1>Total Sold Item</h1>
            </div>
            <div className="f-stat-name">
                <h1>Orders</h1>
            </div>
            <div className="f-stat-name">
                <h1>Happy Customers</h1>
            </div>
            <div className="f-stat-name">
                <h1>Customer Satisfaction Rate</h1>
            </div>
        </div>

        <div className="f-reviews">
            <div className="review-left">
                <motion.div
                    initial ={{opacity: 0, transform: "translateY(-100px)"}}
                    whileInView={{opacity: 1, transform: 'translateY(0px)'}}
                    transition={{duration: 0.6}}
                >
                    <div className="row-1">
                            <h3>Customer reviews</h3>
                            <span></span>
                    </div>
                </motion.div>

                <div className="row-2">
                    <motion.div
                        initial ={{opacity: 0, transform: 'translateY(-200px)'}}
                        whileInView={{opacity: 1, transform: 'translateY(0px)'}}
                        transition={{duration: 0.6}}
                    >
                        <h1 >" Fast Delivery. Works As Described. Thank You Seller. A+++++ "</h1>
                    </motion.div>
                </div>

                <div className="row-3">
                    <h3 an>Javier Martinez</h3>
                    <span>CEO at Javier Industrial</span>
                </div>

                <FaRegThumbsUp size={250}/>

            </div>
            <div className="review-right">
                <Slider {...settings}>
                    {
                        comments.map((com, i)=>(
                            <div className='com' key={i}>
                                <div className="com-head">
                                    <div className="com-img">
                                        <img src={com.img} alt="" />
                                    </div>
                                    <div className="com-details">
                                        <h3>{com.name}</h3>
                                        <span>
                                            <li><RiStarSFill /></li>
                                            <li><RiStarSFill /></li>
                                            <li><RiStarSFill /></li>
                                            <li><RiStarSFill /></li>
                                            <li><RiStarSFill /></li>
                                        </span>
                                        <p>{com.userName}</p>
                                    </div>
                                    <div className="ebay-logo">
                                        <SiEbay size={20}/>
                                    </div>
                                </div>
                                <div className="com-body">
                                    <p>{com.comment}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </section>
  )
}


export default Feedback