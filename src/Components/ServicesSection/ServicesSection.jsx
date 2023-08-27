import React from 'react';
import './ServicesSection.css'
import icon2 from '../../Assets/Images/icon2.png'
import icon3 from '../../Assets/Images/icon3.png'
import icon4 from '../../Assets/Images/icon4.png'
import icon5 from '../../Assets/Images/icon5.png'
import icon6 from '../../Assets/Images/icon6.png'
import line3 from "../../Assets/Images/Line 3.png";
import line from "../../Assets/Images/line.png";

const ServicesSection = () => {
    return (
        <section className="services_section">
            <div className="top_title">
                <img src={line3} alt="line" />
                <div className="top">Sectors We Cater</div>
                <img src={line} alt="line" />
            </div>
            <div className="div2
            ">
            <div className="services">
               <div>
                   <img className="service_image" src={icon6} alt="icon" />
                   <div className="tag">Oil & Gas</div>
               </div>
            </div>
            <div className="services">
               <div>
                   <img className="service_image" src={icon5} alt="icon" />
                   <div className="tag">Renewable Energy</div>
               </div>
            </div>
            <div className="services">
               <div>
                   <img className="service_image" src={icon4} alt="icon" />
                   <div className="tag">Manufacturing</div>
               </div>
            </div>
            <div className="services">
               <div>
                   <img className="service_image" src={icon3} alt="icon" />
                   <div className="tag">Information Technology</div>
               </div>
            </div>
            <div className="services">
               <div>
                   <img className="service_image" src={icon2} alt="icon" />
                   <div className="tag">Banking & Finance</div>
               </div>
            </div>
            <div className="services">
               <div>
                   <img className="service_image" src={icon2} alt="icon" />
                   <div className="tag">FMCG</div>
               </div>
            </div>
            </div>
        </section>
    );
};

export default ServicesSection;