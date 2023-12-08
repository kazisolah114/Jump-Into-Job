import { useMediaQuery } from '@uidotdev/usehooks';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiBookmark, HiBriefcase, HiEye, HiMail, HiMap, HiOutlineBookmark, HiOutlineBriefcase, HiOutlineEye, HiOutlinePhoneIncoming, HiPhone, HiPhoneIncoming } from 'react-icons/hi';
import  Link  from 'next/link';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsappSquare } from "react-icons/fa";

const MyJobsDashboard = () => {
    const [userData, setUserData] = useState([]);
    const [dashboarJobs, setDashboardJobs] = useState([]);
    const isMobileScreen = useMediaQuery("only screen and (max-width : 1368px)");
    useEffect(() => {
        fetch('/userprofile.json')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    useEffect(() => {
        fetch('/alljobs.json')
            .then(res => res.json())
            .then(data => {
                setDashboardJobs(data);
            })
    }, [])
    return (
        <div className='myjobs-dashboard'>
            <div className="dashboard-content">
                <div className="dashboard-data-items">
                    <div className="data-item applied-item">
                        <div>
                            <HiBriefcase />
                        </div>
                        <div>
                            <h5>Applied Jobs</h5>
                            <h4>72</h4>
                        </div>
                    </div>
                    <div className="data-item saved-item">
                        <div>
                            <HiBookmark />
                        </div>
                        <div>
                            <h5>Saved Jobs</h5>
                            <h4>35</h4>
                        </div>
                    </div>
                    <div className="data-item interview-item">
                        <div>
                            <HiPhoneIncoming />
                        </div>
                        <div>
                            <h5>Interviews</h5>
                            <h4>03</h4>
                        </div>
                    </div>
                    <div className="data-item view-item">
                        <div>
                            <HiEye />
                        </div>
                        <div>
                            <h5>Profile View</h5>
                            <h4>11</h4>
                        </div>
                    </div>
                </div>
                <div className="dashboard-stats-and-profile">
                    <div className='dashboard-application-stats'>

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
                <div className="dashboard-featuredjobs-and-social-contacts">
                    <div className="dashboard-jobs">
                        <h4>Recent Jobs</h4>
                        <div className='dashboard-jobs-content all-jobs-container'>
                            {
                                dashboarJobs.slice(0, 3).map(job =>
                                    <div className={`single-job dashboard-job`} key={job.id}>
                                        <div className="single-job-header">
                                            <h2>{job.job_title}</h2>
                                            <HiOutlineBookmark></HiOutlineBookmark>
                                        </div>
                                        <h3>{job.company_name}</h3>
                                        <p>{job.address}</p>
                                        <p>{job.job_description.slice(0, 100)}...</p>
                                        <div className="single-job-bottom">
                                            <p className='single-job-salary'>{job.salary} <span>(Estimated)</span></p>
                                            <p className='posting-date'>22d</p>
                                        </div>
                                        {isMobileScreen ?
                                            <Link onClick={() => handleClickedJob(job.id)} href={`/jobdetailsres/${job.id}`}>View Details</Link>
                                            :
                                            <Link onClick={() => handleClickedJob(job.id)} href={`/findjobs/jobdetails/${job.id}`}>View Details</Link>
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className="dashboard-viewmorejobs-btn">
                        <Link href="/findjobs"><button>View More</button></Link>
                        </div>
                    </div>
                    <div className="dashboard-social-resume">
                        <div className="dashboard-social">
                            <h4>Social Contacts</h4>
                            <ul>
                                <li className='facebook-social'><Link href={""}><FaFacebookF /> /kazisolah114</Link></li>
                                <li className='linkedin-social'><Link> href={""}<FaLinkedinIn /> /kazisolah114</Link></li>
                                <li className='github-social'><Link href={""}><FaGithub /> /kazisolah114</Link></li>
                                <li className='whatsapp-social'><Link href={""}><FaWhatsappSquare /> /kazisolah114</Link></li>
                            </ul>
                        </div>
                        <div className="dashboard-resume">
                            <img src="https://img.freepik.com/free-vector/landing-page-concept-new-message_52683-25720.jpg?w=996&t=st=1695997740~exp=1695998340~hmac=02f0a9d4d08173205c030adafb433a61738cf32c478a6b7036560d5e226f605d" alt="" />
                            <h3>Start your career with top companies</h3>
                            <p>Looking for a job? Increase the  chance of
                                getting hired with subscribing to our email
                                service.</p>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobsDashboard;