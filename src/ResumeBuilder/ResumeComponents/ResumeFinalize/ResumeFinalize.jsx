import React, { useCallback } from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import AddLanguages from './AddLanguages';
import './ResumeFinalize.css';

const ResumeFinalize = () => {
    const { currentStep, setCurrentStep,resumeData } = useUserContext();


    const sendResume = useCallback(()=>{

        console.log(resumeData)
    });
    return (
        <div className='resume-finalize'>
            {/* <div className="resume-finalize-container container"> */}
            <div className="resume-form-header">
                <h3>YAY, you are one step away from your final <span>document!</span></h3>
            </div>
            <div className="resume-finalize-content">
                <div>
                    <AddLanguages />
                </div>
                <div>
                    <ul className="addmore">
                        <li>
                            <input type="radio" id="projects" name="add" />
                            <label htmlFor="projects">Add projects</label>
                        </li>
                        <li>
                            <input type="radio" id="certificates" name="add" />
                            <label htmlFor="certificates">Add certificates</label>
                        </li>
                        <li>
                            <input type="radio" id="publications" name="add" />
                            <label htmlFor="publications">Add publications</label>
                        </li>
                        <li>
                            <input type="radio" id="hobbies" name="add" />
                            <label htmlFor="hobbies">Add hobbies</label>
                        </li>
                        <li>
                            <input type="radio" id="more" name="add" />
                            <label htmlFor="more">Other</label>
                            <input type="text" id="more" />
                        </li>
                    </ul>
                    <button className='addmore-btn'>Add New</button>
                </div>
            </div>
            <div className="resume-prev-next-buttons">
                <button className='prev-button' onClick={() => setCurrentStep(currentStep - 1)}>Previous</button>
                <button className='next-button' onClick={()=> {sendResume()}}>Save & Preview</button>
            </div>

        </div>
    );
};

export default ResumeFinalize;