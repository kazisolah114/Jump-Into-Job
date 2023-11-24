import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight, HiOutlineBookmark, HiOutlineCursorClick } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import './FeaturedJobs.css'
import { FaUpRightFromSquare } from 'react-icons/fa6';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useUserContext } from '../../UserContext/UserContext';

const FeaturedJobs = () => {
    const {setClickedFeaturedJob} = useUserContext();
    const [allJobs, setAllJobs] = useState([]);
    const [featuredJobs, setFeaturedJobs] = useState([])
    const isMobileScreen = useMediaQuery("only screen and (max-width : 1368px)");
    useEffect(() => {
        fetch('/alljobs.json')
            .then(res => res.json())
            .then(data => {
                setAllJobs(data);
                const filteredFeaturedJobs = allJobs.filter(job => job.job_vacancy >= 5);
                const sortedFeaturedJobs = filteredFeaturedJobs.sort((a, b) => b.job_vacancy - a.job_vacancy);
                setFeaturedJobs(sortedFeaturedJobs);
            });

    }, [featuredJobs])

    const handleClickedFeaturedJob = (e) => {
        setClickedFeaturedJob(e);
    }

    return (
        <div className='featured-jobs-section'>

            <div className="featured-jobs-content container">
                <div className="featured-jobs-header section-header">
                    <h2>Featured Jobs At JobHubGlobal</h2>
                    <p>Featured jobs are shown based on the number of the vacancies available in particuler job. So the users may know where they should apply or not.</p>
                </div>
                <div className="featured-jobs-items all-jobs-container">

                    {
                        featuredJobs.slice(0, 6).map(job =>
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
                <div className="featured-jobs-show-more-btn">
                    <button><Link to="/findjobs">Show More Jobs</Link></button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;