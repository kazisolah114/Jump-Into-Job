import React from 'react';
import './PreviewEducation.css'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const PreviewEducation = ({ resumeData, setEditEducation, editEducation, setDeleteEducation, deleteEducation }) => {
    const { institution_name, institution_location, degree, education_starting_year, education_graduation_year, field_study } = resumeData;
    
    return (
        <div className='preview-education'>
            <div className='preview-number'>
                <h2>1</h2>
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
                <button className='edit' onClick={() => setEditEducation(!editEducation)}><FaPencilAlt /></button>
                <button className='delete' onClick={() => setDeleteEducation(!deleteEducation)}><FaTrashAlt /></button>
            </div>
        </div>
    );
};

export default PreviewEducation;