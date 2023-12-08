"use client"
import React, { useEffect, useState } from 'react';
import './ForEmployersLiveData.css'

const ForEmployersLiveData = () => {
    const [bannerData, setBannerData] = useState([]);
    useEffect(() => {
        fetch('bannerdata.json')
            .then(res => res.json())
            .then(data => setBannerData(data))
    }, [])
    return (
        <div className='employers-live-data'>
            <div className="banner-data employers-live-data-contented">
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
        </div>
    );
};

export default ForEmployersLiveData;