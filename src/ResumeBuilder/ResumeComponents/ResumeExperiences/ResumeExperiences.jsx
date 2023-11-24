import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import { FaPlus } from 'react-icons/fa';
import PreviewExperiences from './PreviewExperiences';

const ResumeExperiences = () => {
    const { currentStep, setCurrentStep, resumeData, setResumeData } = useUserContext();
    const [addMore, setAddMore] = useState(false);
    const handleAddMore = () => {
        setAddMore(true);
        setEditExperience(false);
    }
    const isFormFilled = (
        resumeData &&
        resumeData.job_title &&
        resumeData.company &&
        resumeData.job_city &&
        resumeData.job_country &&
        resumeData.job_starting_year &&
        resumeData.job_ending_year
    )
    const [editExperience, setEditExperience] = useState(false)
    const [deleteExperience, setDeleteExperience] = useState(false);
    useEffect(() => {
        if(editExperience) {
            return setAddMore(false);
        }
    }, [editExperience])
    
    useEffect(() => {
        if (deleteExperience) {
            setAddMore(false);
            resumeData.job_title = "";
            resumeData.company = "";
            resumeData.job_city = "";
            resumeData.job_country = "";
            resumeData.job_description = "";
            resumeData.job_starting_year = null;
            resumeData.job_ending_year = null;
        }
    }, [deleteExperience])


    return (
        <div className='resume-experiences'>
            <div className="resume-experiences-container container">
            <div className="resume-form-header">
                    <h3>Now complete your <span>experiences</span></h3>
                </div>
                <div className="resume-education-content resume-heading-content">
                    {
                        addMore ?
                            <PreviewExperiences resumeData={resumeData} setEditExperience={setEditExperience} editExperience={editExperience} deleteExperience={deleteExperience} setDeleteExperience={setDeleteExperience} />
                            :
                            <form action="" className="heading-form">
                                <div className="heading-form-main">
                                    <div className='resume-input-field'>
                                        <label htmlFor="jobtitle">JOB TITLE</label>
                                        <input type="text" placeholder='DevOps Engineer' id="jobtitle" onChange={(e) => setResumeData({ ...resumeData, 'job_title': e.target.value })}
                                            value={isFormFilled && resumeData.institution_name}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="company">COMPANY</label>
                                        <input type="text" placeholder='Unitech Holdings' id="company" onChange={(e) => setResumeData({ ...resumeData, 'company': e.target.value })}
                                            value={isFormFilled && resumeData.institution_location}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="city">CITY</label>
                                        <input type="text" placeholder='Dhaka' id="city" onChange={(e) => setResumeData({ ...resumeData, 'job_city': e.target.value })}
                                            value={isFormFilled && resumeData.degree}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="country">COUNTRY</label>
                                        <input type="text" placeholder='Bangladesh' id="country" onChange={(e) => setResumeData({ ...resumeData, 'job_country': e.target.value })}
                                            value={isFormFilled && resumeData.field_study}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="starting">START DATE</label>
                                        <input type="date" placeholder='03-14-2022' id="starting" onChange={(e) => setResumeData({ ...resumeData, 'job_starting_year': e.target.value })}
                                            value={isFormFilled && resumeData.education_starting_year}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="end">END DATE</label>
                                        <input type="date" placeholder='07-29-2023' id="end" onChange={(e) => setResumeData({ ...resumeData, 'job_ending_year': e.target.value })}
                                            value={isFormFilled && resumeData.education_graduation_year}
                                        />
                                        <div className='currently-here' style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }}>
                                            <input type="checkbox" id="currently_here" onClick={() => setResumeData({ ...resumeData, 'job_ending_year': 'Present' })}
                                                value={isFormFilled && resumeData.education_graduation_year}
                                            />
                                            <label htmlFor="currently_here">I currently work here</label>
                                        </div>
                                    </div>

                                </div>
                                <div className='heading-textarea'>
                                    <label htmlFor="achivements">JOB DESCRIPTION</label>
                                    <textarea name="" id="achivements" cols="30" rows="10" placeholder='Write your job description' onChange={(e) => setResumeData({ ...resumeData, 'job_description': e.target.value })}
                                        value={isFormFilled && resumeData.education_achivements}
                                    ></textarea>
                                </div>
                            </form>

                    }
                    {
                        addMore &&
                        <form action="" className="heading-form" style={{ marginTop: '50px' }}>
                            <div className="heading-form-main">
                                <div className='resume-input-field'>
                                    <label htmlFor="jobtitle">JOB TITLE</label>
                                    <input type="text" value={resumeData.institution_name2} placeholder='Python Developer' id="jobtitle" onChange={(e) => setResumeData({ ...resumeData, 'job_title2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="company">COMPANY</label>
                                    <input type="text" value={resumeData.institution_location2} placeholder='Prospectbd' id="company" onChange={(e) => setResumeData({ ...resumeData, 'company2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="city">CITY</label>
                                    <input type="text" value={resumeData.degree2} placeholder='Rajshahi' id="city" onChange={(e) => setResumeData({ ...resumeData, 'city2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="country">COUNTRY</label>
                                    <input type="text" value={resumeData.field_study2} placeholder='Bangladesh' id="country" onChange={(e) => setResumeData({ ...resumeData, 'country2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="starting">START DATE</label>
                                    <input type="date" value={resumeData.education_starting_year2} placeholder='05-18-2023' id="starting" onChange={(e) => setResumeData({ ...resumeData, 'job_starting_year2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="end">END DATE</label>
                                    <input type="date" value={resumeData.education_graduation_year2} placeholder='Present' id="end" onChange={(e) => setResumeData({ ...resumeData, 'job_ending_year2': e.target.value })} />
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }}>
                                        <input type="checkbox" value={resumeData.education_graduation_year2} id="currently_here" onClick={() => setResumeData({ ...resumeData, 'job_ending_year2': 'Present' })} />
                                        <label style={{ fontSize: '13px' }} htmlFor="currently_here">I currently study here</label>
                                    </div>
                                </div>

                            </div>
                            <div className='heading-textarea'>
                                <label htmlFor="achivements">JOB DESCRIPTION</label>
                                <textarea name="" id="achivements" cols="30" rows="10" value={resumeData.education_achivements2} placeholder='Write your job description' onChange={(e) => setResumeData({ ...resumeData, 'job_description2': e.target.value })}></textarea>
                            </div>
                        </form>
                    }
                    {
                        addMore ||
                        <div className="add-more-education">
                            <button onClick={() => handleAddMore()} style={{ cursor: isFormFilled ? 'pointer' : 'not-allowed', opacity: isFormFilled ? 1 : 0.5 , }}><FaPlus /> ADD MORE EXPERIENCES</button>
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

export default ResumeExperiences;