import React, { useEffect, useState } from 'react';
import './AllJobs.css'
import { Link, Outlet } from 'react-router-dom';
import JobDetails from './JobDetails/JobDetails';
import { HiBookmark, HiBookmarkAlt, HiOutlineBookmark, HiOutlineBriefcase, HiOutlineCursorClick, HiOutlineLocationMarker } from 'react-icons/hi';

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [clickedJob, setClickedJob] = useState(false);
    const [bookmarkedJob, setBookmarkedJob] = useState(false)
    useEffect(() => {
        fetch('/alljobs.json')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])
    const handleClickedJob = (clicked) => {
        setClickedJob(clicked)
    }
    
    // console.log(allJobs)
    return (
        <div className='all-jobs'>
            <div className="all-jobs-search-section container">
                <div className="search-content">
                    <form action="">
                        <div>
                            <HiOutlineBriefcase></HiOutlineBriefcase>
                            <input type="text" placeholder='Job Title' required />
                        </div>
                        <div>
                            <HiOutlineLocationMarker></HiOutlineLocationMarker>
                            <input type="text" placeholder='Location' required />
                        </div>
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <div className="all-jobs-main">
                <div className="all-jobs-content container">
                    <div className="all-jobs-container">
                        {
                            allJobs.map(job =>
                                <div  className={`single-job ${clickedJob ? "clicked-job" : ""}`} key={job.id}>
                                    <div className="single-job-header">
                                        <h2>{job.job_title}</h2>
                                        
                                        <HiOutlineBookmark></HiOutlineBookmark>
                                        
                                    </div>
                                    <h3>{job.company_name}</h3>
                                    <p>{job.address}</p>
                                    <p>{job.job_description.slice(0, 150)}...</p>
                                    <div className="single-job-bottom">
                                    <p className='single-job-salary'>{job.salary} <span>(Estimated)</span></p>
                                    <p className='posting-date'>22d</p>
                                    </div>
                                    <Link onClick={() => handleClickedJob(true)} to={`/alljobs/jobdetails/${job.id}`}>View Details</Link>
                                </div>
                            )
                        }
                    </div>
                    {
                        clickedJob ? <Outlet></Outlet> : <div className='default-job-details job-details'>
                            <div className="default-job-details-img">
                                <img src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?w=1060&t=st=1691861591~exp=1691862191~hmac=972b280150a5093294a8636690684d858e166b77a44957ee43b427187a9271cd" alt="" />
                            </div>
                            <div className="default-job-details-text">
                                <h2>Start Your Career Today In The Top Companies!</h2>
                                <p>Are you looking for a job? You can increase the chance of getting your desired job by subscribing to our Weekly Job alerts! Every week you will find be notified about a job that matches your previous searches.</p>
                                <button className='default-job-details-subscribe'>Subscribe Now <HiOutlineCursorClick></HiOutlineCursorClick></button>
                            </div>
                        </div>
                    }
                    
                    
                </div>
            </div>


        </div>
    );
};

export default AllJobs;