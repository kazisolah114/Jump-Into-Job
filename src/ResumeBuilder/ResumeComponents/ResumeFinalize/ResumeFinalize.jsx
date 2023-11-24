import React from 'react';
import { useUserContext } from '../../../UserContext/UserContext';

const ResumeFinalize = () => {
    const {currentStep, setCurrentStep} = useUserContext();
    return (
        <div className='resume-finalize'>
            <div className="resume-finalize-container container">
                <div className="resume-form-header">
                    <h3>YAY, you are one step away from your final <span>document!</span></h3>
                </div>
                <div className="resume-prev-next-buttons">
                    <button className='prev-button' onClick={() => setCurrentStep(currentStep - 1)}>Previous</button>
                    <button className='next-button'>View Preview</button>
                </div>
            </div>
        </div>
    );
};

export default ResumeFinalize;