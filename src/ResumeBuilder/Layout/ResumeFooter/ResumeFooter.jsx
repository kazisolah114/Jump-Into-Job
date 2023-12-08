import React from 'react';
import  Link  from 'next/link';
import './ResumeFooter.css'

const ResumeFooter = () => {
    return (
        <footer className='resume-footer'>
            <div className="resume-footer-container container">
                <div className="resume-footer-content">
                    <div>
                        <ul>
                            <p>2023 &copy; jobshub</p>
                            <li><Link href="">Do not sell my data</Link></li>
                            <li><Link href="">Terms and conditions</Link></li>
                        </ul>
                        <ul>
                            <li><Link href="/findjobs">Browse jobs</Link></li>
                            <li><Link href="/companies">Browse companies</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ResumeFooter;