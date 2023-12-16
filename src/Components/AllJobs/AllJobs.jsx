"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './AllJobs.css'

import { useUserContext } from '../../UserContext/UserContext';
import { useJobContext } from '@/jobContext/JobContext';
import DefaultJobDetails from './DefaultJobDetails';
import SearchSection from './SearchSection';
import JobListView from './JobListView';
import Link from 'next/link';
import MoreJobButton from './MoreJobButton';




const AllJobs = ({children}) => {





    // const {allJobs, setAllJobs} =useState([])
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
        <div className='all-jobs' style={{'height' : '100%'}}>
            <SearchSection handleFilteredJobs={handleFilteredJobs}/>

            <div className="all-jobs-main" >
                <div className="all-jobs-content container">
                    <div className="show-all-jobs  scroll-container">
                        <JobListView props ={{filteredJobs : allJobs,handleClickedJob,jobsToShow,clickedJob}}/>
                        <MoreJobButton props={{shouldShowButton,jobsToShowIncrement,setJobsToShow}}/>

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