import React from 'react';
import { useState, useEffect } from 'react';
import { HiBookmark, HiBriefcase, HiEye, HiMail, HiMap, HiOutlineBriefcase, HiPhone, HiPhoneIncoming } from 'react-icons/hi';
import  Link  from 'next/link';
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const ManageJobsDashboard = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('/userprofile.json')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    
    const [mostAppliedJobs, setMostAppliedJobs] = useState([]);
    useEffect(() => {
        fetch('/public/employerjobs.json')
            .then(res => res.json())
            .then(data => {
                const mostApplied = data.slice().sort((a, b) => b.applications - a.applications);
                setMostAppliedJobs(mostApplied);
            })
    }, [])
    console.log(mostAppliedJobs)
    return (
        <div className='myjobs-dashboard'>
            <div className="dashboard-content">
                <div className="dashboard-data-items">
                    <div className="data-item applied-item">
                        <div>
                            <HiBriefcase />
                        </div>
                        <div>
                            <h5>Jobs Posted</h5>
                            <h4>72</h4>
                        </div>
                    </div>
                    <div className="data-item saved-item">
                        <div>
                            <HiBookmark />
                        </div>
                        <div>
                            <h5>Active Jobs</h5>
                            <h4>35</h4>
                        </div>
                    </div>
                    <div className="data-item interview-item">
                        <div>
                            <HiPhoneIncoming />
                        </div>
                        <div>
                            <h5>Interview</h5>
                            <h4>09</h4>
                        </div>
                    </div>
                    <div className="data-item view-item">
                        <div>
                            <HiEye />
                        </div>
                        <div>
                            <h5>Shortlisted</h5>
                            <h4>19</h4>
                        </div>
                    </div>
                </div>
                <div className="dashboard-stats-and-profile">
                    <div className='dashboard-application-stats'>
                        <h5>Application Stats Will Be Added Here</h5>
                    </div>
                    <div className="dashboard-user-profile">
                        {
                            userData.map(data => <>
                                <div className="user-profile-main">
                                    <img src="https://img.freepik.com/free-icon/man_318-677829.jpg" alt="" />
                                    <h4>{data.user_name}</h4>
                                    <p>{data.job_role}</p>
                                    <p className='user-address'><HiMap /> {data.user_address}</p>
                                </div>
                                <div className="user-profile-contact">
                                    <p><HiPhone /> {data.user_phone}</p>
                                    <p><HiMail /> {data.user_email}</p>
                                    <div className="dashboard-update-profile-btn">
                                        <Link href="/userprofile/aboutme"><button>Update Profile</button></Link>
                                    </div>
                                </div>

                            </>)
                        }
                    </div>
                </div>
                <div className="most-applied-jobs">
                    <h2>Most Applied Jobs</h2>
                    <div className=''>
                        <div className="">
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
                                    mostAppliedJobs.slice(0, 5).map((item, index) => <ul key={item.id} className='active-jobs-table-body'>
                                        <li className='index'>{index + 1}</li>
                                        <li>{item.job_title}</li>
                                        <li>{item.date_posted}</li>
                                        <li className={`${item.status == "active" ? "active-status" : "inactive-status"}`}>{item.status}</li>
                                        <li>{item.applications}</li>
                                        <Link href=""><button className='managejobs-actions-btn'>View Applicants</button></Link>
                                        <Link href=""><button className='managejobs-actions-btn'>Job Details</button></Link>
                                        <div className='active-jobs-actions'>
                                            <button><HiOutlinePencilAlt /></button>
                                            <button className='delete'><HiOutlineTrash /></button>
                                        </div>
                                    </ul>)
                                }

                            </div>
                        </div>
                    </div>
                    <div className="post-new-job-btn">
                        <Link href="/foremployers/postjobs"><button>Post a new job</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageJobsDashboard;