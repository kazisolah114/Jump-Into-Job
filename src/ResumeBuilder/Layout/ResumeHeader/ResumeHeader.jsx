import React from 'react';
import  Link  from 'next/link';
import './ResumeHeader.css'

const ResumeHeader = () => {
    return (
        <header className='resume-header'>
            <div className="resume-header-container container">
                <div className="resume-header-content">
                    <div className="resume-header-title">
                        <h2>JobsHub</h2>
                        <span>Resume Builder</span>
                    </div>
                    <div className="resume-header-button">
                        <Link href="/"><button>Job Board</button></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ResumeHeader;