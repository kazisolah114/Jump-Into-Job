import React, { } from 'react';
import './ForEmployersPostJob.css'
import { HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const ForEmployersPostJob = () => {

    return (
        <div className='post-job-main'>
            <div className="register-user-header post-job-header">
                <h2>Post Jobs</h2>
                <span>.</span>
            </div>
            <div className="post-job-content container">
                <form action="">
                    <h3>Job Information:</h3>
                    <div className="post-job-info-container">
                        <div className="job-post-info account-info">
                            <label htmlFor="job_title">Job Title</label>
                            <div className="account-input">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                <input type="text" placeholder='Junior Back-end Developer' id="job_title" name="job_title" required />
                            </div>
                        </div>
                        <div className="job-post-info">
                            <label htmlFor="vacancies">Vacancies</label>
                            <div className="account-input">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                <input type="text" placeholder='07' id="vacancies" name="vacancies" required />
                            </div>
                        </div>
                        <div className="job-post-info">
                            <label htmlFor="salary">Estimated Salary</label>
                            <div className="account-input">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                <input type="text" placeholder='$90,000 - $110,000' id="salary" name="salary" required />
                            </div>
                        </div>
                        <div className="job-post-info">
                            <label htmlFor="job_type">Job Type</label>
                            <div className="account-input">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                <select name="job_type" id="job_type" required>
                                    <option value="job_type">Full Time</option>
                                    <option value="job_type">Part Time</option>
                                </select>
                            </div>
                        </div>
                        <div className="job-post-info">
                            <label htmlFor="experience" className='not-required'>Job Category</label>
                            <div className="account-input">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                <select name="last_name" id="last_name" required>
                                    <option value="">Select Type</option>
                                    <option value="Technology and IT">Technology and IT</option>
                                    <option value="Retail and Consumer Goods">Retail and Consumer Goods</option>
                                    <option value="Finance and Banking">Finance and Banking</option>
                                    <option value="Healthcare and Pharmaceuticals">Healthcare and Pharmaceuticals</option>
                                    <option value="Manufacturing and Industrial">Manufacturing and Industrial</option>
                                    <option value="Energy and Utilities">Energy and Utilities</option>
                                    <option value="Media and Entertainment">Media and Entertainment</option>
                                    <option value="Real Estate and Property">Real Estate and Property</option>
                                    <option value="Travel and Hospitality">Travel and Hospitality</option>
                                    <option value="Automotive">Automotive</option>
                                    <option value="Education and E-learning">Education and E-learning</option>
                                    <option value="Agriculture and Food Production">Agriculture and Food Production</option>
                                    <option value="Construction and Engineering">Construction and Engineering</option>
                                    <option value="Transportation and Logistics">Transportation and Logistics</option>
                                    <option value="Telecommunications">Telecommunications</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="job-post-info">
                            <label htmlFor="deadline" className='not-required'>Deadline</label>
                            <div className="account-input">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                <input type="date" id="deadline" name="deadline" />
                            </div>
                        </div>
                    </div>
                    <div className="job-post-text-editor">

                    </div>
                    <div className="terms-conditions">
                        <p>By posting a job, you understand and agree to Job Portal's <Link to="/terms">Terms</Link>. You also acknowledge our <Link to="/cookie">Cookie</Link> and <Link to="/privacy">Privacy</Link> policies.</p>
                        <div>
                            <input type="checkbox" id="termscheck" required />
                            <label htmlFor="termscheck">I will agree company terms & conditions.</label>
                        </div>
                    </div>
                    <input className='job-post-button' type="submit" value="Post" />
                </form>
            </div>
        </div>
    );
};


export default ForEmployersPostJob;