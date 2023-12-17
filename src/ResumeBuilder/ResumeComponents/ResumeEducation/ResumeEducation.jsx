import React, { useEffect } from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import '../ResumeHeading/ResumeHeading.css'
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import PreviewEducation from './PreviewEducation';
import EducationFields from './EducationFields';

const ResumeEducation = () => {
    const { currentStep, setCurrentStep, resumeData, setResumeData } = useUserContext();
    const [addMore, setAddMore] = useState(false);

    const [formIndex ,setformIndex] = useState(0);


    const handleAddMore = () => {
        isFormFilled && setAddMore(true) && setEditEducation(false);
    }
    // const isFormFilled =true || (
    //     resumeData.educations &&
    //     resumeData.educations.institution_name &&
    //     resumeData.educations.institution_location &&
    //     resumeData.educations.degree &&
    //     resumeData.educations.field_study &&
    //     resumeData.educations.education_starting_year &&
    //     resumeData.educations.education_graduation_year
    // )
    const  [isFormFilled,setFormFilled] = useState(false);



    const [editEducation, setEditEducation] = useState(false);
    const [deleteEducation, setDeleteEducation] = useState(false);
    useEffect(() => {
        if (editEducation!==false) {
        
            return setAddMore(false);
        }
    }, [editEducation])
    useEffect(() => {
        if (deleteEducation!==false) {
            setAddMore(false);
            let resumeEducations = resumeData.educations;
            resumeEducations[deleteEducation] = {}


            setResumeData({...resumeData,educations : resumeEducations })
            // resumeData.educations[deleteEducation].institution_name=""
        }
    }, [deleteEducation])

    // console.log(resumeData)
    // console.log(resumeData)

    return (
        <div className='resume-education'>
            <div className="resume-education-container container">
                <div className="resume-form-header">
                    <h3>Now complete your <span>education</span></h3>
                </div>
                <div className="resume-education-content resume-heading-content">

                    {
                        addMore ?
                            <PreviewEducation resumeData={resumeData} setEditEducation={setEditEducation} editEducation={editEducation} deleteEducation={deleteEducation} setDeleteEducation={setDeleteEducation} />
                            :
                            <EducationFields props={{setResumeData,resumeData,isFormFilled,formIndex,isFormFilled,setFormFilled}}/>
                    }
                    {
                        addMore && <EducationFields props={{setResumeData,resumeData,isFormFilled,formIndex : formIndex+1,isFormFilled,setFormFilled}}/>
                    }
                    {

                        addMore ||
                        <div className="add-more-education">
                            <button onClick={() => handleAddMore()} style={{ cursor: isFormFilled ? 'pointer' : 'not-allowed', opacity: isFormFilled ? 1 : 0.5 }}><FaPlus /> ADD MORE EDUCATION</button>
                        </div>
                    }
                </div>
                <div className="resume-prev-next-buttons">
                    <button className='prev-button' onClick={() => setCurrentStep(currentStep - 1)}>Previous</button>
                    <button className='next-button' onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ResumeEducation;