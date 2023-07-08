import React, { useState } from 'react';
import './Card.css'; // Assuming you have a CSS file for styling

const Card = ({ title, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h1>{title}</h1>
            <div className={`image ${isHovered ? 'hovered' : ''}`} style={{ backgroundImage: `url(${image})` }}></div>
        </div>
    );
};

export default Card;
