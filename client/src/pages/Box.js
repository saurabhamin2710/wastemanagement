import React from 'react';
import './Box.css';

const Box = ({ question, answer }) => {
    return (
        <div className="box">
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    );
};

export default Box;
