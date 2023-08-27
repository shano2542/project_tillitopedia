import React from 'react';
import Card from "../Card/Card";
import './CardSection.css'
import icon3 from '../../Assets/Images/icon 3.png'
import icon2 from '../../Assets/Images/icon2.png'
import icon1 from '../../Assets/Images/icon1.png'

const CardSection = () => {

    return (
        <section className="card_section">
            <Card image={icon1} />
            <Card image={icon2} />
            <Card image={icon3} />
        </section>
    );
};

export default CardSection;