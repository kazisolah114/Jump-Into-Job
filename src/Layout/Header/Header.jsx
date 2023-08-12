import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FaAngleDown, FaUserAlt, FaUserPlus } from "react-icons/fa";
import { HiOutlineUser, HiOutlineUserAdd } from "react-icons/hi";

const Header = () => {
    return (
        <div className='main-header'>
            <div className="web-header container">
                <div className="header-logo">
                    <h2>JobHubGlobal</h2>
                </div>
                <div className="header-menu">
                    <ul className="main-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/alljobs">Jobs <FaAngleDown></FaAngleDown></Link></li>
                        <li><Link to="/companies">Companies</Link></li>
                        <li><Link to="/salaries">Salaries</Link></li>
                        <li><Link to="/resume">Resume <FaAngleDown></FaAngleDown></Link></li>
                        <li><Link to="/foremployers">For Employers</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                    <ul className="account-menu">
                        <li><Link to="/register" className='register-btn'><HiOutlineUserAdd></HiOutlineUserAdd> Register</Link></li>
                        <li><Link to="signin" className='login-btn'><HiOutlineUser></HiOutlineUser> Sign In</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;