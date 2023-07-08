import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import logo from '../Photos/favicon.png';
import logo1 from '../Photos/favi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import EmailLink from './EmailLink';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="column">
                    <img src={logo1} alt="Company Logo" className="logo1" />
                    <img src={logo} alt="Company Logo" className="logo2" />
                    <p className='textc'>Pollucare Biomedical Management Private Limited is a Private incorporated on 28 January 2004.</p>
                </div>
                <div className="column ql">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/downloads">Download files &amp; PDF</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Helpline Numbers</h3>
                    <ul>
                        <li><span className="icon"><FontAwesomeIcon icon={faPhone} /></span> 079-27550075 <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9428528999</li>
                        <li><span className="icon"><FontAwesomeIcon icon={faPhone} /></span> 9974556189</li>
                        <li><span className="icon"><FontAwesomeIcon icon={faPhone} /></span> 8401125232</li>
                        <li><span className="icon"><FontAwesomeIcon icon={faPhone} /></span> 9979107721</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com"><span className="icon"><FontAwesomeIcon icon={faFacebookF} /></span> Facebook</a></li>
                        <li><a href="https://instagram.com"><span className="icon"><FontAwesomeIcon icon={faInstagram} /></span> Instagram</a></li>
                        <li><a href="https://whatsapp.com"><span className="icon"><FontAwesomeIcon icon={faWhatsapp} /></span> WhatsApp</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Pollucare Biomedical Management</h3>
                    <a href='https://www.google.com/maps/place/Subhash+Bridge/@23.0622289,72.5810413,16.22z/data=!4m9!1m2!2m1!1s3%2F4,+2nd+Floor,+Ganga+Rachana+Complex,+Subhash+Bridge,+Ahmedabad+-+380027+!3m5!1s0x395e854f9cc51777:0x10b5ae5d99d186af!8m2!3d23.0624954!4d72.5851299!16s%2Fg%2F11p9w2lbmg?entry=ttu'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </a>
                    <p>3/4, 2nd Floor, Ganga Rachana Complex, Subhash Bridge, Ahmedabad - 380027 </p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <EmailLink email="pollucarebm@yahoo.co.in" />
                </div>
            </div>
            <div className="row">
                <div className="line"></div>
                <br />
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Pollucare. All rights reserved.
                </p>
                <p className="made-by">Made with ❤️ by SVNIT Student</p>
            </div>
        </footer>
    );
};

export default Footer;
