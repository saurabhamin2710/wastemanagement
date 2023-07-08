import React from 'react';
import './about.css'; // Import the CSS file
import Photo5 from '../Photos/Photo5.jpg';
import Photo6 from '../Photos/Photo6.jpg';
import Photo7 from '../Photos/Photo7.jpg';
import Photo8 from '../Photos/Photo8.jpg';
import Photo9 from '../Photos/Photo9.jpg';
import Photo10 from '../Photos/Photo10.jpg';
import Photo11 from '../Photos/Photo11.jpg';
import Photo12 from '../Photos/Photo12.jpg';
import Photo0 from '../Photos/bio1.jpg'

const About = () => {
    const photos = [
        { id: 2, src: Photo9, label: '' },
        { id: 3, src: Photo6, label: '' },
        { id: 1, src: Photo11, label: '' }

        // Add more photos as needed
    ];
    return (
        <div>
            <section className="section">
                <h1 className='srvc'>Bio Waste Management </h1>
                <h3 style={{ textAlign: "center" }} >Main Plant of Bio Waste Management System</h3>
                <img src={Photo0} alt="Plant of Waste Management" className='hgg' />
            </section>

            <div className="faq-container" style={{ backgroundColor: "" }}>
                <div className="faq-row">
                    <div className="faq-column faq-question-column" style={{ color: "green", fontSize: "30px" }}>
                        <br />
                        What does the term "Biomedical waste" refer to and what is the significance of its proper treatment?
                    </div>
                    <div className="faq-column faq-answer-column">
                    </div>
                    <div className='missionVision'>
                    <p className='aboutPara'>E-Coli Waste Management Pvt. Ltd., as a group of company has been actively engaged in the bio-medical waste collection, transportation, treatment and disposal as per BMW Rules — 1998 amended in 2003, 2011 and 2016. Two subsidiaries of the group solely involved in Bio Medical Treatment, have already established well- connected network and providing services to more than 5000 HCU´s / Hospitals in Ahmedabad, Gandhinagar, Sabarkantha, Aravalli and Surendranagar region since last two decade.</p> <br />
                    <p className='aboutPara '>The company had proved its excellence in waste management business by providing customer satisfaction through prompt service to each of its member units. The company also strives to carry forward the legacy of core-company by strictly following the guidelines laid by State and Central Pollution Control Board¸ for recycling the E-Waste, Plastic waste and Bio-Medical waste in eco-friendly manner as per organizations belief.</p>
                    </div>
                </div>
                {/* Add more rows here */}
            </div>
            <div className='aboutUsContainer'>
                <div className='title-box'>
                    <h2>About Us</h2>
                    <h5>E-Coli Waste Management is multidisciplinary company in the field of waste management. Company started their journey in 2002 with novel idea of environment conservation through treatment of bio-medical waste</h5>
                    <p>As a first mover in waste management field, they signed MOU with government of Gujarat in 2009 for E-Waste recycling, E-Coli had established its recycling plant before E-waste rule introduce by government in Gujarat. In this continuous journey E-Coli introduce one more branch for plastic waste recycling and in short time E-Coli become trust worthy partner to their customers.</p>
                </div>
                <div className='mission'>
                    <div className='missionPart'>
                        <h3> mission</h3>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Nullam ultricies urna nec fermentum fermentum.</p>
                    </div>
                </div>
                <div className='mission'>
                    <div className='visionPart'>
                        <h3> vission</h3>
                    </div>
                    <div>
                        <p>Donec auctor, turpis ac porttitor elementum, massa quam semper justo, non hendrerit orci lectus id elit.</p>
                        <p>Etiam tempus, ipsum ac semper tristique, erat lectus ullamcorper ligula, ac pretium orci ante ac metus.</p>
                    </div>
                </div>
            </div>

            <section>
                <h1 className='srvc1'>Machines and Waste Storage Areas</h1>
                <div className="photo-gallery">
                    {photos.map((photo) => (
                        <div className="photo-card" key={photo.id}>
                            <img className="photo" src={photo.src} alt={photo.label} />
                            <div className="label">{photo.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
