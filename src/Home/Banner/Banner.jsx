"use client"
import React, { useEffect, useState } from 'react';
import './Banner.css';
import  Link  from 'next/link';
import { TbBriefcase, TbUserSearch } from "react-icons/tb";

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);
    useEffect(() => {
        fetch('bannerdata.json')
            .then(res => res.json())
            .then(data => setBannerData(data))
    }, [])
    // console.log(bannerData)
    return (
        <div className='banner-section'>
            <div className="home-banner-content container">
                <div className="banner-titles">
                    <h1>Here Is Your <span>Career</span> Opportunity</h1>
                    <p>JumpIntoJob is a new user friendly remote work community for job seekers and employees to get their best services.</p>
                    <div className="banner-data">
                        {
                            bannerData.map(data => <div key={data.id} data={data} className='banner-data-content' >
                                <div className="banner-data-logo">
                                    <img src={data.logo} alt="" />
                                </div>
                                <div className="banner-data-info">
                                    <h5>{data.title}</h5>
                                    <p>{data.numbers}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="home-banner-buttons">
                        <Link href="/findjobs"><button className='banner-btn find-job-btn'>Find Jobs <TbBriefcase/></button></Link>
                        <Link href="foremployers"><button className='banner-btn post-job-btn'>Post Jobs <TbBriefcase/></button></Link>
                    </div>
                </div>
                <div className="banner-image">
                    <img src="https://img.freepik.com/free-vector/employee-group-portrait-illustration_74855-5495.jpg?w=996&t=st=1691679488~exp=1691680088~hmac=2c6c7540205d3ed36bce0372b17e65b18dc61d40764505cac9e75a785be6bd0b" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;