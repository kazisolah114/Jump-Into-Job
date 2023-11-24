import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import WhyUs from '../WhyUs/WhyUs';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import ResumeHelp from '../ResumeHelp/ResumeHelp';
import FeaturedCompanies from '../FeaturedCompanies/FeaturedCompanies';
import { useUserContext } from '../../UserContext/UserContext';
import UserHome from '../UserHome/UserHome';

const Home = () => {
    const { userData } = useUserContext();
    // console.log(userData)
    
    return (
        <div>
            {userData ?
                <UserHome></UserHome>
                :
                <>
                    <Banner></Banner>
                    <FeaturedJobs></FeaturedJobs>
                    <FeaturedCompanies></FeaturedCompanies>
                    <WhyUs></WhyUs>
                </>
            }
            <ResumeHelp></ResumeHelp>
        </div>
    );
};

export default Home;