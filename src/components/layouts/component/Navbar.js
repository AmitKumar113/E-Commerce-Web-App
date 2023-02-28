import React from 'react'
import './Navbar.css'
import '../../../style.css'
import {Link} from "react-router-dom";


export default function Navbar() {
  return (
    <header>
        <div className='navbar-container border-green flex-box' >
            <div className='logo-nav border-red'>
                LOGO
            </div>
            <div className='menu-nav'>
            <ul className='flex-box border-green'>
                {/* <li className='border-red'>Home</li> */}
                    <Link to='/'  className='navbar-btn border-red'>Home</Link>
                    <Link to='/products'  className='navbar-btn border-red'>Products</Link>
                    <Link to='/about'  className='navbar-btn border-red'>About</Link>
                    <Link to='/contactus'  className='navbar-btn border-red'>Contact Us</Link>
            </ul>
            </div>
            <div className='last-nav border-green flex-box' >
                    <Link to='/login'  className='navbar-btn border-red'>login</Link>
                    <Link to='/signup'  className='navbar-btn border-red'><li>signup</li></Link>
            </div>
        </div>
    </header>
  )
}
