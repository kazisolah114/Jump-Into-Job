import React from 'react';
import  Link  from 'next/link';
import './ForEmployersBanner.css'

const ForEmployersBanner = () => {
    return (
        <div className='employers-banner'>
            <div className="employers-banner-content container">
                <div className="employers-banner-text">
                    <h2>Discover Exceptional Employees for Your Company Through Our Job Portal</h2>
                    <p>Every single candidate available on our Job Portal has undergone a comprehensive verification process conducted by our dedicated team at Job Portal.</p>
                    <button><Link href={""}>Post a Job</Link></button>
                </div>
                <div className="employers-banner-image">
                    <img src="https://img.freepik.com/free-vector/tiny-hr-manager-looking-candidate-job-interview-magnifier-computer-screen-flat-vector-illustration-career-employment_74855-8619.jpg?w=996&t=st=1692890834~exp=1692891434~hmac=7cb64c2ca8523b11d259492f42f6bcd82f7eef0cfd6cceb7f355f62ca320f8b0" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ForEmployersBanner;