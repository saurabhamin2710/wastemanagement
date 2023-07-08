import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import the Link and useLocation hooks
import './Navbar.css';
import logo from '../Photos/favicon.png';
import logo1 from '../Photos/favi.png';
export default function Header() {
    const location = useLocation(); // Get the current location

    return (
        <div>
            <nav>
                <ul className="navbar">
                    <img src={logo1} alt="Logo" className="logo1" />
                    <img src={logo} alt="Logo" className="logo" />
                    <div className="container">
                        <li >
                            <Link className={location.pathname === '/contact' ? 'ab' : ''} to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/gallery' ? 'ab' : ''} to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/services' ? 'ab' : ''} to="/services">Services</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/aboutus' ? 'ab' : ''} to="/aboutus">About Us</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/' ? 'ab' : ''} to="/" >Home</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
