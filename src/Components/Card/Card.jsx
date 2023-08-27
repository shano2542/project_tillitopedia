import React from 'react';
import './Card.css'
const Card = ( { image } ) => {
    return (
        <div className="card">
            <img src={image} alt="Image" />
            <div className="title">Recruiters</div>
            <div className="desc">Are you an expert in your domain? Get paid to recruit for the most exciting startups on your terms.</div>
            <button className="joinBtn">Join Now</button>
        </div>
    );
};

export default Card;