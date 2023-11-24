import React from 'react';
import ResumeHeader from '../Layout/ResumeHeader/ResumeHeader';
import ResumeFooter from '../Layout/ResumeFooter/ResumeFooter';
import ResumeContainer from '../ResumeComponents/ResumeContainer/ResumeContainer';


const ResumeMain = () => {
    return (
        <div>
            <ResumeHeader />
            <ResumeContainer />
            <ResumeFooter />
        </div>
    );
};

export default ResumeMain;