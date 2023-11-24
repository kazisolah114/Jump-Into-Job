import React from 'react';
import './ResumeHelp.css'
import { Link } from 'react-router-dom';

const ResumeHelp = () => {
    return (
        <div className='resume-help-section'>
            <div className="resume-help-contents container">
                <div className="resume-help-image-item">
                    <img src="https://img.freepik.com/free-vector/woman-computer-illustration_33099-601.jpg?w=826&t=st=1693575185~exp=1693575785~hmac=22df57a8c0c7cc2ac254c39e94cd49571a89758f9728f477e2a6ccaeeb0139c2" alt="" />
                </div>
                <div className="resume-help-text-item">
                    <h2>Don't have a resume yet? Create one to make it stand out to employers</h2>
                    <p>A good proffessional resume helps you to catch the attention of any requireters</p>
                    <Link><button>Build Resume</button></Link>
                </div>
                <div className="resume-help-image-item">
                    <img src="https://img.freepik.com/free-vector/business-meeting-brainstorming-men-women-sitting-standing-negotiating-presentation-discussion_575670-246.jpg?w=996&t=st=1693574151~exp=1693574751~hmac=9052844e13684754e17d31826917e85bba7a0a44ccf03b276373e9f3f05b168b" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ResumeHelp;