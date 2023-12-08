import React from 'react';
import ForEmployersBanner from './ForEmployersBanner/ForEmployersBanner';
import ForEmployersProcess from './ForEmployersProcess/ForEmployersProcess';
import ForEmployersLiveData from './ForEmployersLiveData/ForEmployersLiveData';
import ForEmployersWhyUs from './ForEmployersWhyUs/ForEmployersWhyUs';
import ForEmployersJobBanner from './ForEmployersJobBanner/ForEmployersJobBanner';

const ForEmployersHome = () => {
    return (
        <div>
            <ForEmployersBanner/>
            {/* <ForEmployersLiveData></ForEmployersLiveData> */}
            {/* <ForEmployersProcess></ForEmployersProcess> */}
            <ForEmployersWhyUs></ForEmployersWhyUs>
            <ForEmployersJobBanner></ForEmployersJobBanner>
        </div>
    );
};

export default ForEmployersHome;