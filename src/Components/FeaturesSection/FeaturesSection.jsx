import React from 'react';
import './FeaturesSection.css'
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import icon1 from '../../Assets/Images/evaluate 1.png'
import icon2 from '../../Assets/Images/users.png'
import icon3 from '../../Assets/Images/developer 1.png'
import icon4 from '../../Assets/Images/enable 1.png'
import icon5 from '../../Assets/Images/e2e-management 1.png'
import line4 from '../../Assets/Images/Line 4.png'
import line2 from '../../Assets/Images/Line 2.png'

const FeaturesSection = () => {
    return (
        <section className="feature_section">
            <div className="top_title">
                <img src={line4} alt="line" />
                <div className="top_heading">What Makes Tillitopedia Different ?</div>
                <img src={line2} alt="line" />
            </div>
            <div className="feature_cards">
                <FeaturesCard
                    image={icon1}
                    title="Data Driven Hiring"
                    description="Data Driven HiringCustomised database of prescreened, assessed, and verified talent pools based on scientifically validated skills assessment and matching technology."
                />
                <FeaturesCard
                    image={icon2}
                    title="Hire The Best"
                    description="Data Driven HiringCustomised database of prescreened, assessed, and verified talent pools based on scientifically validated skills assessment and matching technology.  "
                />
                <FeaturesCard
                    image={icon4}
                    title="Accelerate Hiring"
                    description="Data Driven HiringCustomised database of prescreened, assessed, and verified talent pools based on scientifically validated skills assessment and matching technology."
                />
                <FeaturesCard
                    image={icon3}
                    title="Candidate  Experience"
                    description="Data Driven HiringCustomised database of prescreened, assessed, and verified talent pools based on scientifically validated skills assessment and matching technology."
                />
                <FeaturesCard
                    image={icon4}
                    title="Role & Cultural Match"
                    description="Data Driven HiringCustomised database of prescreened, assessed, and verified talent pools based on scientifically validated skills assessment and matching technology."
                />
                <FeaturesCard
                    image={icon5}
                    title="Streamlines process"
                    description="Data Driven HiringCustomised database of prescreened, assessed, and verified talent pools based on scientifically validated skills assessment and matching technology."
                />

            </div>
        </section>
    );
};

export default FeaturesSection;