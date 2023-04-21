import React from 'react'
import CountUp from 'react-countup'
import './Feedback.css'

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
    </section>
  )
}

export default Feedback