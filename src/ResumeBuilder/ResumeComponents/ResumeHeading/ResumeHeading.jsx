import React from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import './ResumeHeading.css'
import ImageUpload from './ImageUpload';
import PrevNextButton from '@/ResumeBuilder/Layout/Button/PrevNextButton';
import HeadingFields from './HeadingFields';

const ResumeHeading = ({ templateType }) => {
    const { currentStep, setCurrentStep, resumeData, setResumeData } = useUserContext();
    // console.log(currentStep)
    return (
        <div className='resume-heading'>
            <div className="resume-heading-container container">
                <div className="resume-form-header">
                    <h3>Let's start with <span>header</span></h3>
                </div>
                <HeadingFields props={{resumeData, setResumeData,templateType}} />
                <div>
                    <PrevNextButton props={{setCurrentStep}} />
                </div>
            </div>
        </div>
    );
};

export default ResumeHeading;