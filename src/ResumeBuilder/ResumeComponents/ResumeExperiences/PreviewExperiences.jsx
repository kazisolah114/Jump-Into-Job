"use client"
import React, { useCallback, useEffect } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const PreviewExperiences = ({props}) => {

    const {resumeData ,setResumeData,state,setState} = props;
    useEffect(() => {
        if(state.type =='delete')
              {
                deleteExperience(state.id)
                setState({ type : 'list-view', id : resumeData.educations.length-1})
    
              }   
        
       }, [state])
    
    

        const deleteExperience = useCallback((index)=>{
        const educations = resumeData.educations;
        educations.splice(index, 1);
        setResumeData({...resumeData,educations: educations})
        console.log(educations)});
         
    
    
    return <>
    {resumeData&& resumeData.experiences.map((experience,key) =>{


        const {job_title, company, job_city, job_country, job_starting_year, job_ending_year} = experience;
        return (
            <div className='preview-education' key={key}>
            <div className='preview-number'>
                <h2>{key+1}</h2>
            </div>
            <div className='preview-content'>
                <h4>{job_title}</h4>
                <p>{company}</p>

                <div>
                    <p>{job_city} {job_country}</p>
                    <p>{job_starting_year} - {job_ending_year}</p>
                </div>
            </div>
            <div className='preview-actions'>
                <button className='edit' onClick={() => setState({type: 'update', id : state.id}) }><FaPencilAlt /></button>
                <button className='delete' onClick={() => setState({type: 'delete', id : state.id})}><FaTrashAlt /></button>
            </div>
        </div>
    );
}
)}</>
};

export default PreviewExperiences;