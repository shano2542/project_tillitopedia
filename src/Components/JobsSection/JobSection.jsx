import React from 'react';
import './JobSection.css'
import JobCard from "../JobCard/JobCard";
import line3 from "../../Assets/Images/Line 3.png";
import line from "../../Assets/Images/line.png";
const JobSection = () => {
    return (
        <section className="job_section">
            <div className="top_title">
                <img src={line3} alt="line" />
                <div className="top">Latest Job Opportunities</div>
                <img src={line} alt="line" />
            </div>
            <div className="cards">
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <div>
                <button className="explore_btn">Explore more</button>
            </div>
        </section>
    );
};

export default JobSection;