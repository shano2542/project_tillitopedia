import React from 'react';
import './FeaturesCard.css'

const FeaturesCard = ( { image , title, description } ) => {
    return (
        <div className="features_card">
            <img className="card_image" src={image} alt="image"/>
            <div className="heading">{title}</div>
            <div className="detail">{description}</div>
        </div>
    );
};

export default FeaturesCard;