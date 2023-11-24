import React from 'react';
import './ResumeSteps.css'
import { useUserContext } from '../../../UserContext/UserContext';

const ResumeSteps = () => {
    const {currentStep, setCurrentStep} = useUserContext();
    return (
        <div className='resume-steps'>
            <div className="resume-steps-container container">
                <div className="steps">
                    <div className="step">
                        <h5 className={`${currentStep === 1 || currentStep > 1 ? 'current-step' : ''}`}>1</h5>
                        <p>TEMPLATE</p>
                        <span style={currentStep > 1 ? {background: '#3498DB'} : {}}></span>
                    </div>
                    <div className="step">
                        <h5 className={`${currentStep === 2 || currentStep > 2 ? 'current-step' : ''}`}>2</h5>
                        <p>HEADER</p>
                        <span style={currentStep > 2 ? {background: '#3498DB'} : {}}></span>
                    </div>
                    <div className="step">
                        <h5 className={`${currentStep === 3 || currentStep > 3 ? 'current-step' : ''}`}>3</h5>
                        <p>EDUCATION</p>
                        <span style={currentStep > 3 ? {background: '#3498DB'} : {}}></span>
                    </div>
                    <div className="step">
                        <h5 className={`${currentStep === 4 || currentStep > 4 ? 'current-step' : ''}`}>4</h5>
                        <p>EXPERIENCE</p>
                        <span style={currentStep > 4 ? {background: '#3498DB'} : {}}></span>
                    </div>
                    <div className="step">
                        <h5 className={`${currentStep === 5 || currentStep > 5 ? 'current-step' : ''}`}>5</h5>
                        <p>SKILLS</p>
                        <span style={currentStep > 5 ? {background: '#3498DB'} : {}}></span>
                    </div>
                    <div className="step">
                        <h5 className={`${currentStep === 6 || currentStep > 6 ? 'current-step' : ''}`}>6</h5>
                        <p>FINALIZE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeSteps;