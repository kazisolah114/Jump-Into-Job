import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="main-footer-section">
            <div className='footer-section'>
                <div className="main-footer-items container">
                    <div className="about-footer-item">
                        <h2>Jump Into Job</h2>
                        <p>With Jump Into Job you can browse for jobs, view local and national salary information, discover companies, and learn about the job market in a specific city.</p>
                        <ul className='social-media-footer'>
                            <li><a href="#"><FaFacebook></FaFacebook></a></li>
                            <li><a href="#"><FaInstagramSquare></FaInstagramSquare></a></li>
                            <li><a href="#"><FaTwitterSquare></FaTwitterSquare></a></li>
                            <li><a href="#"><FaYoutubeSquare></FaYoutubeSquare></a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h2>Job Type</h2>
                        <ul>
                            <li><a href="#">Part Time Job</a></li>
                            <li><a href="#">Full Time Job</a></li>
                            <li><a href="#">Internship</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h2>Job Categories</h2>
                        <ul>
                            <li><a href="#">Internship</a></li>
                            <li><a href="#">Freelance</a></li>
                            <li><a href="#">Overseas</a></li>
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
                        <h2>Quick Links</h2>
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
                    <p>&copy; Copyright 2023 - JumpIntoJob</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;