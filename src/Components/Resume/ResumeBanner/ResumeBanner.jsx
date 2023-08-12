import React from 'react';
import './ResumeBanner.css'
import { FaArrowRight } from "react-icons/fa";

const ResumeBanner = () => {
    return (
        <div className='banner-section'>
            <div className="banner-content container">
                <div className="banner-text">
                    <h2>Welcome to the <span>Resume Builder,</span> A Open Platform For Buildig Your Proffessional Resume Online</h2>
                    <h6>Build your highly proffessional resume with a few clicks.</h6>
                    <p>Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With <span>Resume Builder</span>, it is quick, pain-free, and effective.</p>
                    <button>Get Started Now <FaArrowRight></FaArrowRight></button>
                </div>
                <div className="banner-image">
                    <img src="https://www.resume.com/static/fb4669c69e1a8f8a16eb0204c1535713/36490/first-screen.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ResumeBanner;