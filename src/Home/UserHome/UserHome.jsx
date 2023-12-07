import React, { useEffect, useState } from 'react';
import './UserHome.css'
import { useUserContext } from '../../UserContext/UserContext';
import { useMediaQuery } from '@uidotdev/usehooks';
import { HiMap, HiOutlineBookmark } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FcBriefcase, FcBusinessman, FcFinePrint, FcOnlineSupport } from "react-icons/fc";

const UserHome = () => {
    const { setClickedFeaturedJob } = useUserContext();
    const [allJobs, setAllJobs] = useState([]);
    const [featuredJobs, setFeaturedJobs] = useState([])
    const isMobileScreen = useMediaQuery("only screen and (max-width : 1368px)");
    const [userData, setUserData] = useState([]);

    const [featuredCompanies, setFeaturedCompanies] = useState([]);
    useEffect(() => {
        fetch('/companies.json')
            .then(res => res.json())
            .then(data => {
                setFeaturedCompanies(data);
            })
    }, [])

    useEffect(() => {
        fetch('https://api.jumpintojob.com/api/v1/circular')
            .then(res => res.json())
            .then(data => {
                setAllJobs(data.data);
                const filteredFeaturedJobs = allJobs.filter(job => job.job_vacancy >= 2);
                const sortedFeaturedJobs = filteredFeaturedJobs.sort((a, b) => b.job_vacancy - a.job_vacancy);
                setFeaturedJobs(sortedFeaturedJobs);
            })
            .catch((error) => {
                console.log("Error fetching jobs:", error)
            });

    }, [featuredJobs])

    useEffect(() => {
        fetch('/userprofile.json')
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    const handleClickedFeaturedJob = (e) => {
        setClickedFeaturedJob(e);
    }



    return (
        <div className='user-home'>
            <div className="user-home-content container">
                <div className="user-home-companies res-second-div">
                    {/* <h4>Featured Companies:</h4> */}
                    <div className='user-home-company'>
                        {
                            featuredCompanies.slice(0, 3).map(company => <div key={company.id} className='company-item'>
                                <div className="company-item-content">
                                    <div className="company-item-content-banner">
                                        <img src={company.company_banner} alt="" />
                                    </div>
                                    <div className="company-item-content-main">
                                        <div className='main-items'>
                                            <img src={company.company_logo} alt="" />
                                            <div>
                                                <Link><h3>{company.company_name}</h3></Link>
                                                <p>Verified Profile</p>
                                            </div>
                                        </div>
                                        <div className='main-items'>
                                            <p>{company.company_category}</p>
                                            <p>Size: {company.company_size}</p>
                                        </div>
                                        <div className='main-items'>
                                            <p className='company_description'>{company.company_description.slice(0, 90)}...</p>
                                        </div>
                                        <div className="company-item-content-footer">
                                            <Link><button className='company-button company-details-button'>View Details</button></Link>
                                            <Link><button className='company-button company-jobs-button'>View Jobs</button></Link>

                                        </div>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="user-home-jobs res-first-div">
                    {/* <h4>Featured Jobs:</h4> */}
                    <div className='featured-jobs-items all-jobs-container'>
                        {
                            featuredJobs.slice(0, 10).map(job =>
                                <div className={`featured-job-item single-job`} key={job.id}>
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
                                        <Link onClick={() => handleClickedFeaturedJob(job.id)} to={`/jobdetailsres/${job.id}`}>View Details</Link>
                                        :
                                        <Link onClick={() => handleClickedFeaturedJob(job.id)} to={`/findjobs/jobdetails/${job.id}`}>View Details</Link>
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className="featured-jobs-more">
                        <Link to="/findjobs"><button>Explore More</button></Link>
                    </div>
                </div>
                <div className="user-home-profile res-third-div">
                    {/* <h4>User Profile:</h4> */}
                    <div className='user-home-profile-content'>
                        <div className='home-profile'>
                            <div className="home-user-profile">
                                {
                                    userData.map(data => <>
                                        <div className="user-profile-main">
                                            <img src="https://img.freepik.com/free-icon/man_318-677829.jpg" alt="" />
                                            <h3>{data.user_name}</h3>
                                            <p>{data.job_role}</p>
                                            <p className='user-address'><HiMap /> {data.user_address}</p>
                                        </div>
                                        <div className="user-profile-info">

                                            <div className="profile-info">
                                                <FcBusinessman />
                                                <div>
                                                    <p>Profile Verification</p>
                                                    <h6>Verified</h6>
                                                </div>
                                            </div>
                                            <div className="profile-info">
                                                <FcBriefcase />
                                                <div>
                                                    <p>Applied Jobs</p>
                                                    <h6>82</h6>
                                                </div>
                                            </div>
                                            <div className="profile-info">
                                                <FcOnlineSupport />
                                                <div>
                                                    <p>Interview</p>
                                                    <h6>02</h6>
                                                </div>
                                            </div>
                                            <div className="profile-info">
                                                <FcFinePrint />
                                                <div>
                                                    <p>Profile Appear</p>
                                                    <h6>08</h6>
                                                </div>
                                            </div>

                                        </div>

                                    </>)
                                }
                            </div>
                        </div>
                        <div className='home-subscribe'>
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
        </div>
    );
};

export default UserHome;