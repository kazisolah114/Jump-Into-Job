import React from 'react';
import { FaPencilAlt } from "react-icons/fa";
import './ForEmployersPostJob.css'
import { HiOutlineEye } from 'react-icons/hi';
import Swal from 'sweetalert2';

const PostJobReview = ({ setShowReview, jobData }) => {
    console.log(jobData)
    const data = localStorage.getItem('userData');
    const token = JSON.parse(data)
    console.log(token.data.access_token)
    const handlePostJob = async () => {
        try {
            const response = await fetch('https://api.jumpintojob.com/api/v1/circular/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token.data.access_token}`
                },
                body: JSON.stringify(jobData)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("Job post successful:", data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Job post successful!',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                console.log("Job post failed:", data);
    
                // Additional error handling based on specific conditions or status codes
                if (response.status === 422) {
                    // Handle validation errors
                    console.log("Validation errors:", data.errors);
                } else {
                    // Handle other errors
                    console.log("Something is wrong:", data);
                }
            }
        } catch (error) {
            console.error("An error occurred:", error);
            // Handle network or other unexpected errors
        }
    };
    
    return (
        <div className='postjob-review'>
            <div className="header-banner">
                {/* <h3>Review</h3> */}
            </div>
            <h3>Review Job Details</h3>
            <div className="review-content">
                <div className="main">
                    <div className="review-item">
                        <h4>Job title</h4>
                        <div>
                            <p>{jobData.title}</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item">
                        <h4>Company</h4>
                        <div>
                            <p>Unitech Holdings</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item">
                        <h4>Job category</h4>
                        <div>
                            <p>{jobData.category_name}</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item">
                        <h4>Vacancy</h4>
                        <div>
                            <p>{jobData.vacancies}</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item">
                        <h4>Location type</h4>
                        <div>
                            <p>{jobData.location_type}</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item">
                        <h4>Address</h4>
                        <div>
                            <p>{jobData.location}</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item">
                        <h4>Job type</h4>
                        <div>
                            <p>{jobData.employment_type}</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item">
                        <h4>Estimatd salary</h4>
                        <div>
                            <p>{jobData.salary}</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item">
                        <h4>Deadline</h4>
                        <div>
                            <p>{jobData.deadline}</p>
                            <FaPencilAlt />
                        </div>
                    </div>
                    <div className="review-item details">
                        <h4>Details description</h4>
                        <div className='details-description'>
                            <p>{jobData.description}</p>
                            {/* <FaPencilAlt /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobpost-review-actions">
                <div>
                    <button className='back-btn' onClick={() => setShowReview(false)}>Back</button>
                </div>
                <div className='preview-post'>
                    <button className='preview-btn'><HiOutlineEye /> Preview</button>
                    <button className='post-btn' onClick={handlePostJob}>Post</button>
                </div>
            </div>
        </div>
    );
};

export default PostJobReview;