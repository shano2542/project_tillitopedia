import React from 'react';
import './JobCard.css'
import logoIcon from '../../Assets/Images/logo icon.png'
const JobCard = () => {
    return (
        <div className="job_card">
            <div className="head">Ui UX Designer</div>
            <div className="descr">Lorem ipsum dolor sit amet consectetur. Id donec ante eleifend sed purus. Enim enim augue augue fringilla blandit</div>
            <div className="job_btns" >
                <button className="job_btn">Full Time</button>
                <button className="job_btn">Remote</button>
            </div>
            <div className="card_inside">
                <div className="inner_div">
                    <div className="logoIcon">
                        <img src={logoIcon} alt="logoIcon" />
                    </div>
                    <div className="inner_title">
                        <div className="company">Tillitopedia</div>
                        <div className="country">India</div>
                    </div>
                </div>
                <div>
                    <button className="apply_btn">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;