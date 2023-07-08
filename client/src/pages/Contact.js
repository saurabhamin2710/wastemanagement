import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import EmailLink from './EmailLink';

function Contact() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can send the form data to an API or perform any desired actions
        // Reset form fields after submission if needed
        setName('');
        setMobile('');
        setEmail('');
        setComment('');
    };

    return (
        <div style={{ backgroundColor: "lightblack", margin: "30px", color: "white" }}>
            <h1 className='tle' style={{ textAlign: "center" }}>Contact Us</h1>
            <div className="contact">
                <div className="column address">
                    <h2 style={{ fontSize: "xx-large" }}>Contact Details</h2><br />
                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp;  <b style={{ color: "lightgreen" }}> Address </b><p style={{ marginLeft: "60px" }}> 3/4, 2nd Floor, Ganga Rachana Complex, Subhash Bridge, Ahmedabad - 380027</p> <br />
                    <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<b style={{ color: "lightgreen" }}> Email </b> <p style={{ marginLeft: "60px" }}><EmailLink email="pollucarebm@yahoo.co.in" /></p><br />
                    <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;<b style={{ color: "lightgreen" }}> Phone </b> <p style={{ marginLeft: "60px" }}>079-27550075
                        9428528999 - Mehul kalaria (Director) <br />
                        9974556189 -
                        Bhavesh Prajapati <br />
                        8401125232 -
                        Amit L Solanki <br />
                        9979107721 -
                        Manish U.Solanki (Plant Manager)</p>
                </div>
                <div style={{ width: "30px" }}></div>
                <div className="contact-form column">
                    <h2 style={{ fontSize: "xx-large" }}>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <p></p>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                placeholder='Your Name'
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number:</label>
                            <p></p>
                            <input
                                type="tel"
                                id="mobile"
                                value={mobile}
                                placeholder='mobilenumber'
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <p></p>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                placeholder='ex.email@xyz.com'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Comment:</label>
                            <p></p>
                            <textarea
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder='Details about waste....'
                                required
                            />
                        </div>
                        <p></p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Contact;
