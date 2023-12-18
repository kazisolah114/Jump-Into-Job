import React, { useCallback, useEffect } from 'react';
import './PreviewEducation.css'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const PreviewEducation = ({ props }) => {
    const {resumeData,state, setState,setResumeData} = props;
    
   useEffect(() => {

    if(state.type =='delete')
          {
            deleteEducation(state.id)
            setState({ type : 'list-view', id : resumeData.educations.length-1})

          }   
    
   }, [state])



    const deleteEducation = useCallback((index)=>{
    const educations = resumeData.educations;
    educations.splice(index, 1);
    setResumeData({...resumeData,educations: educations})
    console.log(educations)
  
      });
     





    return <>
    {console.log(resumeData)}
   
   {resumeData && resumeData.educations.map((education,key)=>{
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
                    <button className='edit' onClick={() => setState({type : 'update', id : key })}><FaPencilAlt /></button>
                    <button className='delete' onClick={() => setState({type :'delete', id :  key})}><FaTrashAlt /></button>
                </div>
            </div>
        );
    })}
    
</> 
};

export default PreviewEducation;