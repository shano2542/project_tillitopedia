import React from 'react';
import hero from '../../Assets/Images/hero.png'
import './HeroModel.css'

const HeroModel = () => {
    return (
        <section className="hero_section">
            <div className="hero_content">

                <div className="headline">
                    <div className="crown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M26.5305 54.4822C24.3772 55.1978 22.2533 55.9247 20.0802 56.5773C19.6132 56.7193 19.1236 56.4568 18.9839 55.9924C18.8418 55.5254 19.1069 55.0334 19.5713 54.8937C21.7318 54.2431 23.8379 53.523 25.9761 52.8117C26.4386 52.6594 26.9363 52.9098 27.0888 53.3672C27.241 53.8297 26.993 54.3299 26.5305 54.4822Z" fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.2953 36.0969C23.6778 33.3362 17.2041 30.2427 10.6499 27.3426C10.2048 27.1442 10.0052 26.6249 10.2009 26.1823C10.3992 25.7372 10.9161 25.535 11.3637 25.731C17.9056 28.6281 24.367 31.7186 30.9723 34.4714C31.4227 34.66 31.6326 35.1747 31.4466 35.6227C31.258 36.0732 30.7433 36.283 30.2953 36.0969Z" fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M48.151 17.4046C44.8107 12.3465 41.6067 7.18697 38.21 2.16627C37.9406 1.76362 38.046 1.21753 38.4463 0.945534C38.8492 0.671154 39.3977 0.779205 39.6697 1.17948C43.0686 6.20774 46.2773 11.3724 49.6198 16.4382C49.8866 16.8432 49.7762 17.3891 49.3712 17.6559C48.9636 17.9251 48.4202 17.8122 48.151 17.4046Z" fill="black"/>
                        </svg>
                    </div>
                    Helping Business
                    Create Value Through
                    Talent Acquisition
                </div>
                <div className="description">
                    Our excellence is in providing quality staffing solutions through our network of domain experts to maximize client business potential.
                </div>
                <div className="buttons">
                    <button className="get_started">Get Started</button>
                    <button className="join_now" >Join Now</button>
                </div>
            </div>
            <div className="hero_Image">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={hero} alt="Image" />
            </div>
        </section>
    );
};

export default HeroModel;