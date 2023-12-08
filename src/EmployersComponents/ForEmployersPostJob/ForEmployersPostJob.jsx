"use client"
import React, { useEffect, useState } from 'react';
import './ForEmployersPostJob.css'
import { HiOutlineUserCircle } from 'react-icons/hi';
import  Link  from 'next/link';
import RichEditor from './RichEditor';
import PostJobReview from './PostJobReview';


const ForEmployersPostJob = () => {
    const [showReview, setShowReview] = useState(false);
    const [jobData, setJobData] = useState({});
    const [jobCategories, setJobCategories] = useState([]);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/job-categories`)
        .then(res => res.json())
        .then(data => {
            setJobCategories(data.data);
        })
    },[])

    
    console.log(jobCategories)
    return (
        <div className='post-job-main'>
            <div className="post-job-content container">
                {showReview ?
                    <PostJobReview setShowReview={setShowReview} jobData={jobData} />
                    :
                    <form action="">
                        <h3>ADD JOB INFORMATION</h3>
                        <div className="post-job-info-container">
                            <div className="job-post-info account-info">
                                <label htmlFor="job_title">Job Title</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle/>
                                    <input type="text" placeholder='Civil Engineer' id="job_title" name="job_title" onChange={(e) => setJobData({ ...jobData, 'title': e.target.value })} defaultValue={jobData.title} required />
                                </div>
                            </div>
                            <div className="job-post-info">
                                <label htmlFor="vacancies">Vacancies</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle/>
                                    <input type="number" placeholder='1' id="vacancies" name="vacancies" onChange={(e) => setJobData({ ...jobData, 'vacancies': e.target.value })} defaultValue={jobData.vacancies} required />
                                </div>
                            </div>
                            <div className="job-post-info">
                                <label htmlFor="salary">Estimated Salary</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle/>
                                    <input type="number" placeholder='$120000' id="salary" name="salary" onChange={(e) => setJobData({ ...jobData, 'salary': e.target.value })} defaultValue={jobData.salary} required />
                                </div>
                            </div>
                            <div className="job-post-info">
                                <label htmlFor="job_type">Job Type</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle/>
                                    <select name="job_type" id="job_type" onChange={(e) => setJobData({ ...jobData, 'employment_type': e.target.value })} defaultValue={jobData.employment_type} required>
                                        <option value="Select">Select</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>
                            </div>
                            <div className="job-post-info">
                                <label htmlFor="location_type">Location Type</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle/>
                                    <select name="location_type" id="location_type" onChange={(e) => setJobData({ ...jobData, 'location_type': e.target.value })} defaultValue={jobData.location_type} required>
                                        <option value="Select">Select</option>
                                        <option value="In-person">In person</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>
                            </div>
                            <div className="job-post-info">
                                <label htmlFor="job_location">Location street address</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle/>
                                    <input type="text" placeholder='address for this job' onChange={(e) => setJobData({ ...jobData, 'location': e.target.value })} defaultValue={jobData.location} />
                                </div>
                            </div>
                            <div className="job-post-info">
                                <label htmlFor="job_location">Availability</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle/>
                                    <input type="text" placeholder='address for this job' onChange={(e) => setJobData({ ...jobData, 'availability': e.target.value })} defaultValue={jobData.availability} />
                                </div>
                            </div>
                            <div className="job-post-info">
                                <label htmlFor="category_id" className='not-required'>Job Category</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle/>
                                    <select name="category_id" id="category_id" onChange={(e) => setJobData({...jobData, 'category_id': 1, 'category_name': e.target.value})}>
                                        <option value="">Select</option>

                                        {
                                            jobCategories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.category_name}
                                                </option>
                                            ))
                                        }
      
                                        {/* <option value="1">IT & Technology</option>
                                        <option value="2">Real Estate</option>
                                        <option value="3">Medical</option>
                                        <option value="4">Other</option> */}
                                    </select>
                                </div>
                            </div>
                            <div className="job-post-info">
                                <label htmlFor="deadline" className='not-required'>Deadline</label>
                                <div className="account-input">
                                    <HiOutlineUserCircle></HiOutlineUserCircle>
                                    <input type="date" id="deadline" name="deadline" onChange={(e) => setJobData({ ...jobData, 'deadline': e.target.value })} defaultValue={jobData.deadline} />
                                </div>
                            </div>
                        </div>
                        <div className="job-post-text-editor">
                            <RichEditor jobData={jobData} setJobData={setJobData} />
                        </div>
                        <div className="terms-conditions">
                            <p>By posting a job, you understand and agree to Job Portal's <Link href="/terms">Terms</Link>. You also acknowledge our <Link href="/cookie">Cookie</Link> and <Link href="/privacy">Privacy</Link> policies.</p>
                            <div>
                                <input type="checkbox" id="termscheck" required />
                                <label htmlFor="termscheck">I will agree company terms & conditions.</label>
                            </div>
                        </div>
                        <button className='post-continue-btn' onClick={() => setShowReview(true)}>Continue</button>
                    </form>
                }
            </div>
        </div>
    );
};


export default ForEmployersPostJob;