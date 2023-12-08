"use client"
import React, { useEffect, useState } from 'react';
import './AllJobs.css'
import  Link  from 'next/link';
import JobDetails from '../JobDetails/JobDetails';
import { HiOutlineBookmark, HiOutlineBriefcase, HiOutlineCursorClick, HiOutlineLocationMarker } from 'react-icons/hi';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useUserContext } from '../../UserContext/UserContext';

const AllJobs = ({children}) => {
    const { clickedFeaturedJob } = useUserContext();
    const [allJobs, setAllJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [jobsToShow, setJobsToShow] = useState(6)
    const [clickedJob, setClickedJob] = useState();
    const jobsToShowIncrement = 6;
    const isMobileScreen = useMediaQuery("only screen and (max-width : 1368px)");
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/circular`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.data);
                setAllJobs(data.data);
                // If you want to use filteredJobs for filtering logic later on,
                // you might want to keep it separate initially
                setFilteredJobs(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle errors appropriately (e.g., show an error message to the user)
            });
    }, []);
    const handleClickedJob = (e) => {
        setClickedJob(e)
    }
    const totalJobs = filteredJobs.length;
    const shouldShowButton = jobsToShow < totalJobs;
    const handleFilteredJobs = (event) => {
        event.preventDefault();
        const jobTitle = event.target.jobTitle.value.toLowerCase();
        const jobLocation = event.target.jobLocation.value.toLowerCase();

        const filterJobs = allJobs.filter(job =>
            (!jobTitle || ((job.job_title + job.job_description + job.address).toLowerCase().includes(jobTitle))) &&
            (!jobLocation || job.address.toLowerCase().includes(jobLocation))
        );

        setFilteredJobs(filterJobs);
    }

    // console.log(clickedFeaturedJob)



    return (
        <div className='all-jobs'>

            <div className="all-jobs-search-section container">
                <div className="search-content">
                    <form action="" onSubmit={handleFilteredJobs}>
                        <div>
                            <HiOutlineBriefcase/>
                            <input type="text" name="jobTitle" placeholder='Job title or keywords' />
                        </div>
                        <div>
                            <HiOutlineLocationMarker/>
                            <input type="text" name='jobLocation' placeholder='Location' />
                        </div>
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <div className="all-jobs-main">
                <div className="all-jobs-content container">
                    <div className="show-all-jobs">
                        <div className="all-jobs-container">
                            {
                                filteredJobs.slice(0, jobsToShow).map(job =>
                                    <div className={`single-job ${clickedJob === job.id ? "clicked-job" : ""}`} key={job.id}>
                                        <div className="single-job-header">
                                            <h2>{job.job_title}</h2>
                                            <HiOutlineBookmark/>
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
                        {shouldShowButton ?
                            <button onClick={() => setJobsToShow(previousJobs => previousJobs + jobsToShowIncrement)}>Show More</button>
                            :
                            <div className='jobs-reached-end-message'>
                                <p>Ops!!! You have reached the end. There's no more jobs at this time. Please check back later.</p>
                            </div>
                        }
                    </div>

                    {/* <Outlet></Outlet> */}

                    {
                        (clickedFeaturedJob || clickedJob) ?
                            <>{children}</>
                            :
                            <div className='default-job-details job-details'>
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