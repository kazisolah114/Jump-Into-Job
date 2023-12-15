"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './AllJobs.css'

import { useUserContext } from '../../UserContext/UserContext';
import { useJobContext } from '@/jobContext/JobContext';
import DefaultJobDetails from './DefaultJobDetails';
import SearchSection from './SearchSection';
import JobListView from './JobListView';
import Link from 'next/link';




const AllJobs = ({children}) => {





    const {allJobs, setAllJobs} =useJobContext()
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [jobsToShow, setJobsToShow] = useState(6)
    const [clickedJob, setClickedJob] = useState();
    const jobsToShowIncrement = 6;

    useEffect(() => {
        setFilteredJobs(allJobs)
    }, [allJobs])
    

    const handleClickedJob = (e) => {
        setClickedJob(e)
    }
    const totalJobs =filteredJobs.length;
    const shouldShowButton = jobsToShow < totalJobs;
    const handleFilteredJobs = useCallback( (event) => {

        event.preventDefault();
        const jobTitle = event.target.jobTitle.value.toLowerCase();
        const jobLocation = event.target.jobLocation.value.toLowerCase();

        const filterJobs = allJobs.filter(job =>
            (!jobTitle || ((job.job_title + job.job_description + job.address).toLowerCase().includes(jobTitle))) &&
            (!jobLocation || job.address.toLowerCase().includes(jobLocation))
        );

        setFilteredJobs(filterJobs);
    })

    // console.log(clickedFeaturedJob)



    return (
        <div className='all-jobs'>
            <SearchSection handleFilteredJobs={handleFilteredJobs}/>

            <div className="all-jobs-main">
                <div className="all-jobs-content container">
                    <div className="show-all-jobs">
                        <JobListView props ={{filteredJobs : allJobs,handleClickedJob,jobsToShow,clickedJob}}/>
                    {console.log('shuld not re render',new Date().getSeconds())}


                        {console.log('shuld not re render',new Date().getSeconds())}

                        {shouldShowButton ?
                            <button onClick={() => setJobsToShow(previousJobs => previousJobs + jobsToShowIncrement)}>Show More</button>
                            :
                            <div className='jobs-reached-end-message'>
                                <p>Ops!!! You have reached the end. There's no more jobs at this time. Please check back later.</p>
                            </div>
                        }
                    </div>

                
                    <div>
                     {children}
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AllJobs;