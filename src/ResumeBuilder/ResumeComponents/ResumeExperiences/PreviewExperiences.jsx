import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const PreviewExperiences = ({resumeData, setEditExperience, editExperience, setDeleteExperience, deleteExperience}) => {
    const {job_title, company, job_city, job_country, job_starting_year, job_ending_year} = resumeData;
    return (
        <div className='preview-education'>
            <div className='preview-number'>
                <h2>1</h2>
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
                <button className='edit' onClick={() => setEditExperience(!editExperience)}><FaPencilAlt /></button>
                <button className='delete' onClick={() => setDeleteExperience(!deleteExperience)}><FaTrashAlt /></button>
            </div>
        </div>
    );
};

export default PreviewExperiences;