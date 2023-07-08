import React from 'react'
import './Navbar.css';
import logo from '../Photos/favicon.png';
import logo1 from '../Photos/favi.png';
export default function Header() {
    return (
        <div>
            <nav>
                <ul className="navbar">
                    <img src={logo1} alt="Logo" className='logo1' />
                    <img src={logo} alt="Logo" className="logo" />
                    <div className='container'>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/">Home</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
