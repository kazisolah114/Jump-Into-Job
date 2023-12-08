import React from 'react';
import './ForEmployersJobBanner.css'
import  Link  from 'next/link';

const ForEmployersJobBanner = () => {
    return (
        <div className='employers-job-banner-section'>
            <div className="employers-job-banner-content container">
                <h2>Ready to start hiring?</h2>
                <p>Begin posting your jobs on JobHubGlobal today.</p>
                <Link href="/foremployers/postjobs"><button>Post a job now</button></Link>
            </div>
        </div>
    );
};

export default ForEmployersJobBanner;