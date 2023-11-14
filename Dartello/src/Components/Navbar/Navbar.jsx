import React, {useState} from 'react'
import {VscAccount} from 'react-icons/vsc'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'
import OutsideClickHandler from 'react-outside-click-handler'
import './Navbar.css'

function Navbar() {
    const[dropDown ,setDropDown] =  useState(false)

  return (
    <div>
        <section className="n-wrapper">
            <div className="n-left">
                <img src="./logo.png" alt="logo" />
                <a href="/">Home</a>
                <a onClick={()=> setDropDown((prev) => !prev)}>Shop <MdArrowDropDown /></a>
                <a href="">My Account</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
            </div>

            <div className="n-right">
                <div className="n-icon">
                    <VscAccount size={25}/>
                </div>
                <div className="n-icon">
                    <AiOutlineHeart size={25} color='#AD0000'/>
                </div>
                <div className="n-icon">
                    <AiOutlineShoppingCart size={25}/>
                </div>
            </div>
            <div className="dropdown-menu">
            </div> 
        </section>

        <section className='n-dropdown'>
            <OutsideClickHandler
            onOutsideClick={()=> setDropDown(false)}
            >
                {dropDown ? 
                        <div className="dropdown">
                                <a href=''>Power Inverters</a>
                                <a href=''>Solar Panels</a>
                                <a href=''>Power Supplies</a>
                                <a href=''>Home Lighting</a>
                        </div>
                : ""}
            </OutsideClickHandler>
        </section>
    </div>
  )
}

export default Navbar