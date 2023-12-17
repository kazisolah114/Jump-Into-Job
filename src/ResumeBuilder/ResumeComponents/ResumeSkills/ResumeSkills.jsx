import React from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import AddSkills from './AddSkills';
import PrevNextButton from '@/ResumeBuilder/Layout/Button/PrevNextButton';

const ResumeSkills = () => {
    const { currentStep, setCurrentStep } = useUserContext();
    return (
        <div className='resume-skills'>
            <div className="resume-skills-container container">
                <div className="resume-form-header">
                    <h3>Add your top <span>skills</span></h3>
                </div>
                <div className="resume-skills-container">
                    <AddSkills />
                </div>

                {/* <div className="resume-prev-next-buttons">
                    <button className='prev-button' onClick={() => setCurrentStep(currentStep - 1)}>Previous</button>
                    <button className='next-button' onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
                </div> */}
                <div>
                <PrevNextButton  props={{setCurrentStep}}/>
                </div>
            </div>
        </div>
    );
};

export default ResumeSkills;