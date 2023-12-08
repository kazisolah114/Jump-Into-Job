import React, { useEffect, useState } from 'react';
import  Link  from 'next/link';
import { HiOutlineBookmark } from 'react-icons/hi';
import { FaBookmark } from "react-icons/fa";

const MyJobsSaved = () => {
    const [savedJobs, setSavedJobs] = useState([]);
    useEffect(() => {
        fetch('/alljobs.json')
        .then(res => res.json())
        .then(data => setSavedJobs(data))
    }, [])
    console.log(savedJobs)
    return (
        <div className='myjobs-savedjobs'>
            <h2>Saved Jobs</h2>
            <div className="savedjobs-content">
                {
                    savedJobs.slice(0, 5).map(savedjob => <div className='savedjob-item' value={savedjob.id}>
                        <div className="saved-job-item-data">
                            <div className="saved-jobs-item-data-logo">
                                <img src={savedjob.image} alt="" />
                            </div>
                            <div className="saved-jobs-item-data-info">
                                <Link  href={""}><h3>{savedjob.job_title}</h3></Link>
                                <p>{savedjob.company_name}</p>
                                <p>{savedjob.address}</p>
                                <span>Bookmarked 2 days ago</span>
                            </div>
                        </div>
                        <div className="saved-job-item-actions">
                            <Link  href={""}><button className='savedjob-apply'>Apply now</button></Link>
                            <abbr title="Unsave job"><button><FaBookmark/></button></abbr>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyJobsSaved;