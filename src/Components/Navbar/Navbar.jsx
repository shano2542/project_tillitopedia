import React from 'react';
import logo from '../../Assets/Images/logo.png'
import './NavBar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo_icon" src={logo} alt="Logo" />
            </div>
            <div className="menu">
                <div>Why us</div>
                <div>Sector</div>
                <div>Job Board</div>
            </div>
            <div className="end_menu">
                <button className="login_btn">Login</button>
                <button className="icon_btn" ><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.0035 1.03125H4.99654C2.81776 1.03125 1.03125 2.81796 1.03125 4.99647V28.0035C1.03125 30.182 2.81776 31.9688 4.99654 31.9688H28.0034C30.1824 31.9688 31.9688 30.182 31.9688 28.0035V4.99647C31.9688 2.81796 30.1824 1.03125 28.0035 1.03125ZM11.666 15.9723V25.5234H7.47656V16.6849V13.4707H11.666V15.9723ZM9.56291 11.6743C8.3974 11.6743 7.45168 10.7293 7.45168 9.56304C7.45168 8.39663 8.3974 7.45278 9.56291 7.45278C10.73 7.45278 11.6748 8.39669 11.6748 9.56304C11.6748 10.7293 10.7301 11.6743 9.56291 11.6743ZM25.5234 18.9492V25.5234H21.9141V19.669C21.9141 18.2671 21.7623 16.4641 19.841 16.4641C17.8905 16.4641 17.5957 17.9903 17.5957 19.5679V25.5234H14.1152V15.7987V13.4707H17.4668V15.082H17.5025C18.0024 14.1797 19.2271 13.4694 21.0507 13.4694C24.1233 13.4694 25.1675 14.9224 25.4532 17.1956C25.521 17.7291 25.5472 18.3047 25.5472 18.9492H25.5234Z" fill="white"/>
                </svg></button>
            </div>
        </nav>
    );
};

export default Navbar;