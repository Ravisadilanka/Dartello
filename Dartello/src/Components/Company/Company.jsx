import React from 'react'
import CompanyData from '../Data/CompanyData'
import './Company.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Company() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1}
  return (
    <section className="company">
        <div className="company-details">
            <Slider {...settings}>
                {
                    CompanyData.map((company, i)=>(
                        <div className='company-img'>
                            <img src={company.companyImg} alt=""/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </section>
  )
}

export default Company