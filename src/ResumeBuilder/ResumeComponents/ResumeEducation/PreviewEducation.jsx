import React, { useCallback, useEffect } from 'react';
import './PreviewEducation.css'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const PreviewEducation = ({ props }) => {
    const {resumeData, setEditEducation, editEducation, setDeleteEducation, deleteEducation,setEducationFields} = props;
    
    const handleEditButton = useCallback((key)=>{
        setEditEducation(key);
    });
    



    return <>
    {console.log(resumeData)}
   
   {resumeData && resumeData.educations.map((education,key)=>{
       
    //    check if the last item is in editng mode
       const len = resumeData.educations.length;
       if ((len>1 && key==len-1) || education.status =='edit' ){
   
           return <></>
       }

        console.log(education)



        const { institution_name, institution_location, degree, education_starting_year, education_graduation_year, field_study } = education;
        
        return (
            <div className='preview-education' key={key}>
                <div className='preview-number'>
                    <h2>{key+1}</h2>
                </div>
                <div className='preview-content'>
                    <h4>{degree} in {field_study}</h4>
                    <p>{institution_name}</p>
    
                    <div>
                        <p>{institution_location}</p>
                        <p>{education_starting_year} - {education_graduation_year}</p>
                    </div>
                </div>
                <div className='preview-actions'>
                    <button className='edit' onClick={() => handleEditButton(key)}><FaPencilAlt /></button>
                    <button className='delete' onClick={() => setDeleteEducation(key)}><FaTrashAlt /></button>
                </div>
            </div>
        );
    })}
    
</> 
};

export default PreviewEducation;