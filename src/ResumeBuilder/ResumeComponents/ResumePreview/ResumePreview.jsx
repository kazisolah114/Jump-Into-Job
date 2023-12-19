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
                    <p>{resumeData.email}</p>
                    <p>{resumeData.phone}</p>
                    <p>{resumeData.title}</p>
                    <p>{resumeData.linkedinurl}</p>
                    <p>{resumeData.portfoliourl}</p>
                    <p>{resumeData.city}</p>
                    <p>{resumeData.state}</p>
                    <p>{resumeData.country}</p>
                    <p>{resumeData.summary}</p>

                    <>{resumeData.educations.map((education)=>{
                    return<div key ={education.institution_name}>
                    <p>{education.institution_name}</p>
                    <p>{education.institution_location}</p>
                    <p>{education.degree}</p>
                    <p>{education.field_study}</p>
                    <p>{education.education_starting_year}</p>
                    <p>{education.education_graduation_year}</p>
                    <p>{education.education_achivements}</p>
                        </div>
                    })
                    
                    }</>
                    {/* job_title, company, job_city, job_country, job_starting_year, job_ending_year */}

                    <>{resumeData.experiences.map((job)=>{
                    return<>
                    <p>{job.job_title}</p>
                    <p>{job.company}</p>
                    <p>{job.job_city}</p>
                    <p>{job.job_country}</p>
                    <p>{job.job_starting_year}</p>
                    <p>{job.job_ending_year}</p>
                    <p>{job.job_description}</p>

                        </>
                    })
                    
                    }</>

                </div>}
        </div>
    );
};

export default ResumePreview;