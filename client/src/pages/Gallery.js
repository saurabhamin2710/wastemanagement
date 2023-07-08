import React from 'react'
import group from '../Photos/group.jpg';
import Photo1 from '../Photos/Photo1.jpg';
import Photo2 from '../Photos/Photo2.jpg';
import Photo3 from '../Photos/Photo3.jpg';
import Photo4 from '../Photos/Photo4.jpg';
import Photo5 from '../Photos/Photo5.jpg';
import Photo6 from '../Photos/Photo6.jpg';
import Photo7 from '../Photos/Photo7.jpg';
import Photo8 from '../Photos/Photo8.jpg';
import Photo9 from '../Photos/Photo9.jpg';
import Photo10 from '../Photos/Photo10.jpg';
import Photo11 from '../Photos/Photo11.jpg';

import './Gallery.css';
export default function Gallery() {
    const photos = [
        { id: 1, src: Photo11, label: '' },
        { id: 2, src: Photo9, label: '' },
        { id: 3, src: Photo6, label: '' },
        { id: 4, src: Photo4, label: '' },
        { id: 5, src: Photo5, label: '' },
        { id: 7, src: Photo7, label: '' },
        { id: 8, src: Photo8, label: '' },
        { id: 9, src: Photo2, label: '' },
        { id: 10, src: Photo10, label: '' },
        { id: 11, src: Photo1, label: '' },
        { id: 12, src: Photo3, label: '' },
        { id: 13, src: Photo2, label: '' },
        { id: 14, src: Photo7, label: '' },

        // Add more photos as needed
    ];
    return (
        <div className='gallery'>
            <h1 className="gal">Gallery</h1>
            <h2 style={{ textAlign: "center", fontSize: "30px" }}>Memories are the architecture of our identity</h2>
            <img src={group} alt="Group" className='hg' />
            <div className="faq-container">
                <div className="faq-row" style={{ marginLeft: "60px" }}>
                    <div className="faq-column faq-question-column" style={{ color: "green", fontSize: "30px" }}>
                        <br />
                        Pollucare Bio Waste Managment
                    </div>
                    <div className="faq-column faq-aaswer-column">
                        Pollucare Biomedical Management Private Limited is a Private incorporated on 28 January 2004.
                    </div>
                </div>
            </div>
            <h1 className='hd'>Pollucare Gallery</h1>
            <div className="photo-gallery">
                {photos.map((photo) => (
                    <div className="photo-card" key={photo.id}>
                        <img className="photo" src={photo.src} alt={photo.label} />
                        <div className="label">{photo.label}</div>
                    </div>
                ))}
            </div>
        </div>

    )
}
