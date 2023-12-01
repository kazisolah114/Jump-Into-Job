import React, { useEffect, useState } from 'react';
import './ManageJobs.css';
import { Link } from 'react-router-dom';
import { HiOutlineBriefcase, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import ViewApplicants from './ViewApplicants';

const ManageJobsActiveJobs = () => {
    // const [employerJobs, setEmployerJobs] = useState([]);
    const [activeJobs, setActiveJobs] = useState([]);
    useEffect(() => {
        fetch('/public/employerjobs.json')
            .then(res => res.json())
            .then(data => {
                // setEmployerJobs(data);
                const filterActiveJobs = data.filter(job => job.status == "active");
                setActiveJobs(filterActiveJobs);
            })
    }, [])
    console.log(activeJobs);

    const [applicants, setApplicants] = useState([]);
    const [job, setJob] = useState([]);
    const [showViewApplicants, setShowViewApplicants] = useState(false);
    const handleViewApplicants = (job) => {
        setApplicants(job.applicants)
        setShowViewApplicants(true);
        setJob(job);
    }

    return (
        <>
            {
                showViewApplicants ?
                    <div className='show-view-applicants'>
                        <ViewApplicants applicants={applicants} setShowViewApplicants={setShowViewApplicants} job={job} />
                    </div>
                    :
                    <div className='active-jobs'>
                        <div className="manage-jobs-header">
                            <HiOutlineBriefcase />
                            <h2>Active Jobs</h2>
                        </div>
                        <div className="active-jobs-container">
                            <div className="active-jobs-content">
                                <ul className='active-jobs-table-header'>
                                    <li></li>
                                    <li>Job Title</li>
                                    <li>Date Posted</li>
                                    <li>Status</li>
                                    <li>Applications</li>
                                    <li>View Applicants</li>
                                    <li>Job Details</li>
                                    <li>Actions</li>
                                </ul>

                                {
                                    activeJobs.map((item, index) => <ul key={item.id} className='active-jobs-table-body'>
                                        <li className='index'>{index + 1}</li>
                                        <li>{item.job_title}</li>
                                        <li>{item.date_posted}</li>
                                        <li className={`${item.status == "active" ? "active-status" : "inactive-status"}`}>{item.status}</li>
                                        <li>{item.applications}</li>
                                        <Link to=""><button onClick={() => handleViewApplicants(item)} className='managejobs-actions-btn'>View Applicants</button></Link>
                                        <Link to=""><button className='managejobs-actions-btn'>Job Details</button></Link>
                                        <div className='active-jobs-actions'>
                                            <button><HiOutlinePencilAlt /></button>
                                            <button className='delete'><HiOutlineTrash /></button>
                                        </div>
                                    </ul>)
                                }

                            </div>
                        </div>
                    </div>
            }

        </>
    );
};

export default ManageJobsActiveJobs;