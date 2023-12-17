import React, { useEffect } from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import '../ResumeHeading/ResumeHeading.css'
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import PreviewEducation from './PreviewEducation';
import EducationFields from './EducationFields';
import PrevNextButton from '@/ResumeBuilder/Layout/Button/PrevNextButton';

const ResumeEducation = () => {
    const { currentStep, setCurrentStep, resumeData, setResumeData } = useUserContext();

    const [inputType,setInputType]= useState('insert')
    const [addMore, setAddMore] = useState(false);
    const [educationFields,setEducationFields] = useState({});
    const [formIndex ,setformIndex] = useState(0);
    const handleAddMore = () => {
       setAddMore(true) && setEditEducation(false);
       setformIndex(prev =>prev+1)
       
    }
    const  [isFormFilled,setFormFilled] = useState(false);

    const [editEducation, setEditEducation] = useState(false);
    const [deleteEducation, setDeleteEducation] = useState(false);
    // useEffect(() => {
    //     if (editEducation!==false) {
        
    //         return setAddMore(false);
    //     }
    // }, [editEducation])
    // useEffect(() => {
    //     if (deleteEducation!==false) {
    //         setAddMore(false);
    //         let resumeEducations = resumeData.educations;
    //         resumeEducations[deleteEducation] = {}
    //         setResumeData({...resumeData,educations : resumeEducations })
    //     }
    // }, [deleteEducation])

    return (
        <div className='resume-education'>
            <div className="resume-education-container container">
                <div className="resume-form-header">
                    <h3>Now complete your <span>education</span></h3>
                </div>
                <div className="resume-education-content resume-heading-content">
                    <PreviewEducation props={{resumeData,setEditEducation,deleteEducation,deleteEducation,setDeleteEducation,setEducationFields,inputType,setInputType}}  />
                    <EducationFields props={{setResumeData,resumeData,isFormFilled,formIndex,isFormFilled,setFormFilled,educationFields,setEducationFields,deleteEducation ,inputType,setInputType}}/>
                    
                    {
                        addMore ||
                        <div className="add-more-education">
                            <button onClick={() => isFormFilled && handleAddMore()} style={{ cursor: isFormFilled ? 'pointer' : 'not-allowed', opacity: isFormFilled ? 1 : 0.5 }}><FaPlus /> ADD MORE EDUCATION</button>
                        </div>
                    }
                </div>
                <div>

                  <PrevNextButton  props={{setCurrentStep}}/>
                </div>
            </div>
        </div>
    );
};

export default ResumeEducation;