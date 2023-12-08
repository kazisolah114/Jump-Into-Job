import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { HiArchive, HiOutlineArchive } from "react-icons/hi";
import  Link  from 'next/link';

const MyJobsApplied = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        fetch('/alljobs.json')
        .then(res => res.json())
        .then(data => setAppliedJobs(data))
    }, [])
    // console.log(savedJobs)
    return (
        <div className='myjobs-savedjobs myjobs-appliedjobs'>
            <h2>Applied Jobs</h2>
            <div className="savedjobs-content appliedjobs-content">
                {
                    appliedJobs.slice(0, 5).map(appliedjob => <div className='savedjob-item appliedjob-item' value={appliedjob.id}>
                        <div className="saved-job-item-data applied-job-item-data">
                            <div className="saved-jobs-item-data-logo applied-job-item-data-logo">
                                <img src={appliedjob.image} alt="" />
                            </div>
                            <div className="saved-jobs-item-data-info applied-jobs-item-data-info">
                                <p className='application-status'>Applied</p>
                                <Link href={""}><h3>{appliedjob.job_title}</h3></Link>
                                <p>{appliedjob.company_name}</p>
                                <p>{appliedjob.address}</p>
                                <span>Applied on Sep 5</span>
                            </div>
                        </div>
                        <div className="saved-job-item-actions applied-job-item-actions">
                            <button className='savedjob-apply appliedjob-status'>Update status</button>
                            <abbr title="Archive job"><button><HiArchive/></button></abbr>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyJobsApplied;