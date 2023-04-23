import React from 'react'
import CountUp from 'react-countup'
import './Feedback.css'
import { FaRegThumbsUp } from 'react-icons/fa'
import {motion} from 'framer-motion'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import comments from '../Data/Comments'
import { sliderSettings } from '../Common/common'
import { RiStarSFill } from 'react-icons/ri'
import { SiEbay } from 'react-icons/si'

function Feedback() {
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
                <AnimateRow1 />

                <div className="row-2">
                    <AnimateH1 />
                </div>

                <div className="row-3">
                    <h3 an>Javier Martinez</h3>
                    <span>CEO at Javier Industrial</span>
                </div>

                <FaRegThumbsUp size={250}/>

            </div>
            <div className="review-right">
                <Swiper {...sliderSettings}>
                    {
                        comments.map((com, i)=>(
                            <SwiperSlide key={i}>
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
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </section>
  )
}

function AnimateH1() {
    return(
        <motion.div
            initial ={{opacity: 0, transform: 'translateY(-200px)'}}
            whileInView={{opacity: 1, transform: 'translateY(0px)'}}
            transition={{duration: 0.6}}
        >
            <h1 style={{fontSize:"46px"}}>" Fast Delivery. Works As Described. Thank You Seller. A+++++ "</h1>
        </motion.div>
    )
}

function AnimateRow1(){
    return(
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
    )
}

export default Feedback