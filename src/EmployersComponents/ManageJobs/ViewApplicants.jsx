import React, { useState } from 'react';
import { HiArrowLeft, HiOutlineBriefcase, HiOutlineChevronDown, HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import  Link  from 'next/link';

const ViewApplicants = ({ applicants, setShowViewApplicants, job }) => {
    
    const [selectedStatus, setSelectedStatus] = useState({});

    const handleStatusClick = (index, status) => {
        setSelectedStatus((prevSelectedStatus) => ({
            ...prevSelectedStatus,
            [index]: status,
        }));
    };

    const handleStatusChange = (index, newStatus) => {
        // Handle the logic for updating the status in your data or triggering an API call
        console.log(`Status changed for index ${index} to ${newStatus}`);
    };

    return (
        <>
            <div className='active-jobs'>
                <div className='view-applicants-main-header'>
                    <div className="manage-jobs-header view-jobs-header">
                        <HiOutlineBriefcase />
                        <h2>Applicants for {job.job_title} role</h2>
                    </div>
                    <div className='close-view-applicant' onClick={() => setShowViewApplicants(false)}>
                        <HiArrowLeft />
                    </div>
                </div>
                <div className="active-jobs-container">
                    <div className="active-jobs-content">
                        <ul className='active-jobs-table-header applicants-table-header'>
                            <li></li>
                            <li>Applicant Name</li>
                            <li>Application Date</li>
                            <li>Status</li>
                            <li>Actions</li>
                        </ul>

                        {
                            applicants.map((applicant, index) => <ul key={applicant.id} className='active-jobs-table-body applicants-table-body'>
                                <li className='index'>{index + 1}</li>
                                <li>{applicant.applicant_name}</li>
                                <li>28-11-2023</li>

                                <li className={`application-status ${selectedStatus[index] || applicant.status}`}>
                                    {selectedStatus[index] !== undefined ?
                                        <select
                                            value={selectedStatus[index]}
                                            onChange={(e) => {
                                                const newStatus = e.target.value;
                                                handleStatusClick(index, newStatus);
                                                handleStatusChange(index, newStatus);
                                            }}
                                        >
                                            <option value='applied'>applied</option>
                                            <option value='shortlisted'>shortlisted</option>
                                            <option value='interview'>interview</option>
                                            <option value='rejected'>rejected</option>
                                        </select>
                                        :
                                        <span onMouseOver={() => handleStatusClick(index, applicant.status)}>
                                            {applicant.status} <HiOutlineChevronDown />
                                        </span>
                                    }
                                </li>

                                <div>
                                    <Link href=""><button className='managejobs-actions-btn'>View Resume</button></Link>
                                    <Link href=""><button className='managejobs-actions-btn'>Cover Letter</button></Link>
                                    <Link href=""><button className='managejobs-actions-btn'>View profile</button></Link>
                                </div>
                            </ul>)
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewApplicants;