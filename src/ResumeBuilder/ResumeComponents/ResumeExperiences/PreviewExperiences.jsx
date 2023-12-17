import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const PreviewExperiences = ({resumeData, setEditExperience, editExperience, setDeleteExperience, deleteExperience}) => {
    const len = resumeData.experiences.length;

    return <>
    {resumeData&& resumeData.experiences.map((experience,key) =>{

        //check if the last item is in editng mode
        if (len>1 && key==len-1){

            return <></>
        }

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
                {/* {console.log('hi there')} */}
                <button className='edit' onClick={() => setEditExperience(key) }><FaPencilAlt /></button>
                <button className='delete' onClick={() => setDeleteExperience(key)}><FaTrashAlt /></button>
            </div>
        </div>
    );
}
)}</>
};

export default PreviewExperiences;