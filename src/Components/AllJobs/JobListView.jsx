"use client"
import React from 'react'
import { HiOutlineBookmark } from 'react-icons/hi';
import Link from 'next/link';
import { useMediaQuery } from '@uidotdev/usehooks';
function JobListView({props,children}) {
    const {filteredJobs,handleClickedJob,jobsToShow,clickedJob} = props;
    console.log(filteredJobs)
    let isClient = false;

    setInterval(() => {
        isClient = true;
        
    }, 1000);
    
    const isMobileScreen =isClient && useMediaQuery("only screen and (max-width : 1368px)");

// return <div className='scroll-container'> <>
//                         <Link href={'/findjobs/jobdetails/6'}>Job 1</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/7'}>Job 2</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/8'}>Job 3</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/9'}>Job 4</Link>
//                         <br/>
//                         <Link href={'/findjobs/jobdetails/6'}>Job 1</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/7'}>Job 2</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/8'}>Job 3</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/9'}>Job 4</Link>
//                         <br/>
//                         <Link href={'/findjobs/jobdetails/6'}>Job 1</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/7'}>Job 2</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/8'}>Job 3</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/9'}>Job 4</Link>
//                         <br/>
//                         <Link href={'/findjobs/jobdetails/6'}>Job 1</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/7'}>Job 2</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/8'}>Job 3</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/9'}>Job 4</Link>
                        
                        
//                         <Link href={'/findjobs/jobdetails/6'}>Job 1</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/7'}>Job 2</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/8'}>Job 3</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/9'}>Job 4</Link>
//                         <br/>
//                         <Link href={'/findjobs/jobdetails/6'}>Job 1</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/7'}>Job 2</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/8'}>Job 3</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/9'}>Job 4</Link>
//                         <br/>
//                         <Link href={'/findjobs/jobdetails/6'}>Job 1</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/7'}>Job 2</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/8'}>Job 3</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/9'}>Job 4</Link>
//                         <br/>
//                         <Link href={'/findjobs/jobdetails/6'}>Job 1</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/7'}>Job 2</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/8'}>Job 3</Link>
//                         <br />
//                         <Link href={'/findjobs/jobdetails/9'}>Job 4</Link>
//         </>

//                         </div>

  return (
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
            <Link onClick={() => handleClickedJob(job.id)} href={isMobileScreen?`/jobdetailsres/${job.id}`:`/findjobs/jobdetails/${job.id}`}>View Details</Link>
            </div>
        )
    }
</div>
  )
}

export default JobListView