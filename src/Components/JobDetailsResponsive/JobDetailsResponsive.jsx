import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRightArrowLeft, FaRegBookmark, FaUpRightFromSquare } from "react-icons/fa6";
import { HiBookmark, HiBookmarkAlt, HiOutlineBookmark, HiOutlineBriefcase } from 'react-icons/hi';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../../UserContext/UserContext';
import Swal from 'sweetalert2';

const JobDetailsResponsive = () => {
    const {userData} = useUserContext();
    const {id} = useParams();
    const jobs = useLoaderData();
    const loginNavigate = useNavigate();
    const [showJobDetails, setShowJobDetails] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        if(jobs.length > 0) {
            const job = jobs.find(job => job.id == id);
            setShowJobDetails(job)
        }
    }, [id, jobs])
    const handleGoBackBtn = () => {
        navigate(-1);
    }

    const handleApplyJob = () => {
        if (userData) {
            // Use window.open() to open the URL in a new tab
            window.open(`/applyjob/${showJobDetails.id}`, '_blank');
            
            
        } else {
            Swal.fire({
                title: 'User must login before applying!',
                text: "Do you want to login?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    loginNavigate('/signin')
                }
            })
        }

    }

    return (
        <div className='job-details job-details-res container'>
            <div className="job-details-content job-details-content-res">
                <div className="job-details-header">
                    <div className="job-details-header-res-goback">
                        <FaArrowLeft onClick={handleGoBackBtn}></FaArrowLeft>
                    </div>
                    
                    <div className="job-details-header-job">
                        <div>
                        <h2>{showJobDetails.job_title}</h2>
                        <div className="job-details-header-company">
                        <Link>{showJobDetails.company_name}</Link>
                        </div>
                        <p>{showJobDetails.address}</p>
                        </div>
                        
                    </div>
                </div>
                <div className="job-details-main">
                    
                    <p><span>Job Type: </span>{showJobDetails.availability}</p>
                    <p><span>Salary: </span>{showJobDetails.salary}</p>
                    <p><span>Educational Requirements: </span>{showJobDetails.educational_requirements}</p>
                    <p><span>Required Expereinces: </span>{showJobDetails.experience}</p>
                    <p><span>Job Description: </span>{showJobDetails.job_description}</p>
                    <p><span>Job Responsibilities: </span>{showJobDetails.job_resposibilities}</p>
                    <p className="apply-alert">You must create a JobsHub account to continue applying to jobs.</p>
                </div>

                <div className="job-details-res-buttons">
                    <Link><button onClick={handleApplyJob} className='res-btn apply-btn'>Apply Now <FaUpRightFromSquare></FaUpRightFromSquare></button></Link>
                    <button className='res-btn bookmark-btn'><FaRegBookmark></FaRegBookmark> Bookmark this job</button>
                    <Link to="/findjobs"><button className='res-btn more-jobs-btn'><HiOutlineBriefcase></HiOutlineBriefcase> See More Jobs</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsResponsive;