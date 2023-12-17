import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import { FaPlus } from 'react-icons/fa';
import PreviewExperiences from './PreviewExperiences';
import ExperienceFildes from './ExperienceFields'
import PrevNextButton from '@/ResumeBuilder/Layout/Button/PrevNextButton';
const ResumeExperiences = () => {
    const { currentStep, setCurrentStep, resumeData, setResumeData } = useUserContext();
    const [addMore, setAddMore] = useState(false);
    const [formIndex,setFormIndex] = useState(0);
    const handleAddMore = () => {
        isFormFilled&&setAddMore(true)&&setEditExperience(false);
    }
    // const isFormFilled = (
    //     resumeData &&
    //     resumeData.job_title &&
    //     resumeData.company &&
    //     resumeData.job_city &&
    //     resumeData.job_country &&
    //     resumeData.job_starting_year &&
    //     resumeData.job_ending_year
    // )

    const [isFormFilled,setFormFilled] = useState(false)
    const [editExperience, setEditExperience] = useState(false)
    const [deleteExperience, setDeleteExperience] = useState(false);

    useEffect(() => {
        console.log('calledme');
        if (editExperience!==false) {
            
            return setAddMore(false);
        }
    }, [editExperience])
    useEffect(() => {
        console.log('calledme');
        if (deleteExperience!==false) {
            setAddMore(false);
            let resumeEducations = resumeData.experiences;
            resumeEducations[deleteExperience] = {}


            setResumeData({...resumeData,educations : resumeEducations })
            // resumeData.educations[deleteEducation].institution_name=""
        }
    }, [deleteExperience])

    return (
        <div className='resume-experiences'>
            <div className="resume-experiences-container container">
            <div className="resume-form-header">
                    <h3>Now complete your <span>experiences</span></h3>
                </div>
                <div className="resume-education-content resume-heading-content">
                    {
                        addMore ?
                            <PreviewExperiences resumeData={resumeData} setEditExperience={setEditExperience} editExperience={editExperience} deleteExperience={deleteExperience} setDeleteExperience={setDeleteExperience} />
                            :
                            <ExperienceFildes props={{resumeData,setResumeData,formIndex,isFormFilled,setFormFilled}}/>
                    }
                    {
                        addMore &&
                        <ExperienceFildes props={{resumeData,setResumeData,formIndex :formIndex+1,setFormFilled,isFormFilled}}/>

                    }
                    {
                        addMore ||
                        <div className="add-more-education">
                            <button onClick={() => handleAddMore()} style={{ cursor: isFormFilled ? 'pointer' : 'not-allowed', opacity: isFormFilled ? 1 : 0.5 , }}><FaPlus /> ADD MORE EXPERIENCES</button>
                        </div>
                    }
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

export default ResumeExperiences;