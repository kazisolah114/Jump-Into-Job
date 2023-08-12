import React from 'react';
import ResumeBanner from '../ResumeBanner/ResumeBanner';
import ResumeSteps from '../ResumeSteps/ResumeSteps';
import ResumeTry from '../ResumeTry/ResumeTry';

const Resume = () => {
    return (
        <div>
            <ResumeBanner></ResumeBanner>
            <ResumeSteps></ResumeSteps>
            <ResumeTry></ResumeTry>
        </div>
    );
};

export default Resume;