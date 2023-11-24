import React from 'react';
import { useUserContext } from '../../../UserContext/UserContext';

const ResumePreview = ({ selectedTemplate }) => {
    const { resumeData } = useUserContext();
    return (
        <div>
            <h3>{selectedTemplate.name + ' ' + selectedTemplate.type} preview</h3>
            {resumeData &&
                <div>
                    <p>{resumeData.firstName}</p>
                    <p>{resumeData.lastName}</p>
                    <p>{resumeData.institution_name}</p>
                    <p>{resumeData.institution_location}</p>
                    <p>{resumeData.field_study}</p>
                    <p>{resumeData.degree}</p>
                    <p>{resumeData.education_starting_year}</p>
                    <p>{resumeData.education_graduation_year}</p>
                </div>}
        </div>
    );
};

export default ResumePreview;