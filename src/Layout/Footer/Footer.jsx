import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='footer-section'>
                <div className="main-footer-items container">
                    <div className="about-footer-item">
                        <h2>JobHubGlobal</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiusto earum dignissimos, esse ratione aliquid repellendus aspernatur fugiat rem similique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, adipisci?</p>
                        <h3>Connect Us With -</h3>
                        <ul className='social-media-footer'>
                            <li><a href="#"><FaFacebook></FaFacebook></a></li>
                            <li><a href="#"><FaInstagramSquare></FaInstagramSquare></a></li>
                            <li><a href="#"><FaTwitterSquare></FaTwitterSquare></a></li>
                            <li><a href="#"><FaYoutubeSquare></FaYoutubeSquare></a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h2>Resume</h2>
                        <ul>
                            <li><a href="#">Create a Resume</a></li>
                            <li><a href="#">Resume Examples</a></li>
                            <li><a href="#">Resume Templates</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h2>Cover Letter</h2>
                        <ul>
                            <li><a href="#">Create a Cover Letter</a></li>
                            <li><a href="#">Cover Letter Examples</a></li>
                            <li><a href="#">Cover Letter Templates</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h2>Career Blogs</h2>
                        <ul>
                            <li><a href="#">Job Interview</a></li>
                            <li><a href="#">Interview Tips</a></li>
                            <li><a href="#">Job Search</a></li>
                            <li><a href="#">Career Plan</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h2>Support</h2>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="bottom-footer-text container">
                    <p>&copy; Copyright 2023 - Job Portal</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;