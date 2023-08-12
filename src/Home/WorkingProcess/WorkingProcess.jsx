import React from 'react';
import './WorkingProcess.css'

const WorkingProcess = () => {
    return (
        <div className='working-process-section'>
            <div className="working-process-content container">
                <div className="section-header working-process-header">
                    <h2>Our Working Process At <span>Job Portal</span></h2>
                </div>
                <div className="working-process-items">
                    <div className="working-process-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/account-create.svg" alt="" />
                        <h2>Account Create</h2>
                        <p>To create your account be confident & safely.</p>
                    </div>
                    <div className="working-process-item working-process-item-two">
                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/create-resume.svg" alt="" />
                        <h2>Build Resume</h2>
                        <p>To create your account be confident & safely.</p>
                    </div>
                    <div className="working-process-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/job-find.svg" alt="" />
                        <h2>Find Jobs</h2>
                        <p>To create your account be confident & safely.</p>
                    </div>
                    <div className="working-process-item working-process-item-four">
                        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/icon/job-apply.svg" alt="" />
                        <h2>Apply Jobs</h2>
                        <p>To create your account be confident & safely.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;