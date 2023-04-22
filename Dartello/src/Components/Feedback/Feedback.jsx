import React from 'react'
import CountUp from 'react-countup'
import './Feedback.css'
import { FaRegThumbsUp } from 'react-icons/fa'
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

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
                <div className="row-1">
                    <h3>Customer reviews</h3>
                    <span></span>
                </div>

                <div className="row-2">
                    <h1>" Fast Delivery. Works As Described. Thank You Seller. A+++++ "</h1>
                </div>

                <div className="row-3">
                    <h3>Javier Martinez</h3>
                    <span>CEO at Javier Industrial</span>
                </div>

                <FaRegThumbsUp size={250}/>

            </div>
            <div className="review-right">

            </div>
        </div>
    </section>
  )

// const animatedImage = document.querySelector('.f-stat')

// const animatedImageTimeline = new ScrollTimeline({
//     scrollOffset: [
//         {target: animatedImage, edge: 'end', threshold: '1'},
//         {target: animatedImage, edge: 'start', threshold: '1'},
//     ]
// })

// animatedImage.animate(
//     {
//         transform: ['translateY(-200px)', "translateY(0)"]
//     },
//     {
//         opacity: ["0", "1"],
//         duration: 1,
//         easing: 'linear',
//         timeline: animatedImageTimeline,
//     }
// )
}

export default Feedback