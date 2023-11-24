import React, { useEffect, useState } from 'react';
import './JobCategory.css'

const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([]);
    useEffect(() => {
        fetch('jobsbyindustry.json')
        .then(res => res.json())
        .then(data => setJobCategory(data))
    }, [])
    console.log(jobCategory)
    return (
        <div className='job-category'>
            <div className="job-category-content container">
                <div className="section-header">
                    <h2>Browse jobs by industry</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, laudantium. Aperiam molestias libero iure officiis.</p>
                </div>
                <div className="job-category-items">
                        {
                            jobCategory.map(item => <div key={item.id} className="job-category-item">
                                <img src={item.image} alt="logo" />
                                <h3>{item.name}</h3>
                            </div>)
                        }
                    
                </div>
            </div>
        </div>
    );
};

export default JobCategory;