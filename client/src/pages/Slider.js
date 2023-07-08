import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';
import { Link } from 'react-router-dom';
import image1 from '../Photos/1.jpg';
import image2 from '../Photos/2.jpg';
import image3 from '../Photos/3.jpeg';
import image4 from '../Photos/bio1.jpg'
import Card from './Card';
const Slider = () => {
  const quotes = [
    {
      quote: "The Earth does not belong to us. We belong to the Earth.",
      author: ' Chief Seattle',
      image: image1,
    },
    {
      quote: "We are living on this planet as if we had another one to go to.",
      author: 'Terry Swearingen',
      image: image2,
    },
    {
      quote: "The future will either be green or not at all.",
      author: 'Bob Brown',
      image: image3,
    },
  ];

  return (
    <div>

      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
      >
        {quotes.map((quote, index) => (
          <div key={index}>
            <img src={quote.image} alt={`JPG ${index + 1}`} />
            <div className="overlay"></div>
            <div className="quote">
              <b><h1>{quote.quote}</h1></b>
              <h3><b><i><p>-{quote.author}</p></i></b></h3>
              {/* <button onClick="">Learn More</button> */}
            </div>
          </div>
        ))}
      </Carousel>
      <div className="faq-container">
        <div className="faq-row">
          <div className="faq-column faq-question-column" style={{ color: "green", fontSize: "30px" }}>
            <br />
            What is bio waste?
          </div>
          <div className="faq-column faq-answer-column" style={{ marginTop: "20px" }}>
            Bio waste refers to any organic waste material derived from plants or animals, such as food scraps, agricultural residues, or sewage sludge.</div>
          {/* Add more rows here */}
        </div>
        <div className="faq-row">
          <div className="faq-column faq-question-column" style={{ color: "green", fontSize: "30px" }}>
            <br />
            What is Bio Waste Management?
          </div>
          <div className="faq-column faq-answer-column" style={{ marginTop: "20px" }}>
            Bio Waste Management is the process of collecting, treating, and disposing of bio waste in an environmentally-friendly and sustainable manner. It involves various methods such as composting, anaerobic digestion, and recycling.</div>
        </div>
        <div className="faq-row">
          <div className="faq-column faq-question-column" style={{ color: "green", fontSize: "30px" }}>
            <br />
            Benefits of bio waste recycling
          </div>
          <div className="faq-column faq-answer-column" style={{ marginTop: "20px" }}>
            Bio waste recycling offers several benefits, including reducing landfill waste, producing organic fertilizers, generating renewable energy through anaerobic digestion, and reducing greenhouse gas emissions. It also helps conserve resources and promotes a circular economy.</div>
        </div>
      </div>
      <h1 className='srvcc'>Our Service </h1>
      <div className='crd'>
        <Link to="/services">
          <Card title="Bio Medical Waste Management" image={image4} /></Link>
      </div>
    </div>
  );
};

export default Slider;
