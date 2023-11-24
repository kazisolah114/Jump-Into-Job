import React, { useEffect } from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import '../ResumeHeading/ResumeHeading.css'
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import PreviewEducation from './PreviewEducation';

const ResumeEducation = () => {
    const { currentStep, setCurrentStep, resumeData, setResumeData } = useUserContext();
    const [addMore, setAddMore] = useState(false);
    const handleAddMore = () => {
        setAddMore(true);
        setEditEducation(false);
    }
    const isFormFilled = (
        resumeData &&
        resumeData.institution_name &&
        resumeData.institution_location &&
        resumeData.degree &&
        resumeData.field_study &&
        resumeData.education_starting_year &&
        resumeData.education_graduation_year
    )

    const [editEducation, setEditEducation] = useState(false);
    const [deleteEducation, setDeleteEducation] = useState(false);
    useEffect(() => {
        if (editEducation) {
            return setAddMore(false);
        }
    }, [editEducation])
    useEffect(() => {
        if (deleteEducation) {
            setAddMore(false);
            resumeData.institution_name = "";
            resumeData.institution_location = "";
            resumeData.degree = "";
            resumeData.field_study = "";
            resumeData.education_achivements = "";
            resumeData.education_starting_year = null;
            resumeData.education_graduation_year = null;
        }
    }, [deleteEducation])


    return (
        <div className='resume-education'>
            <div className="resume-education-container container">
                <div className="resume-form-header">
                    <h3>Now complete your <span>education</span></h3>
                </div>
                <div className="resume-education-content resume-heading-content">
                    {
                        addMore ?
                            <PreviewEducation resumeData={resumeData} setEditEducation={setEditEducation} editEducation={editEducation} deleteEducation={deleteEducation} setDeleteEducation={setDeleteEducation} />
                            :
                            <form action="" className="heading-form">
                                <div className="heading-form-main">
                                    <div className='resume-input-field'>
                                        <label htmlFor="institutionname">INSTITUTION NAME</label>
                                        <input type="text" placeholder='University of Dhaka' id="institutionname" onChange={(e) => setResumeData({ ...resumeData, 'institution_name': e.target.value })}
                                            value={isFormFilled && resumeData.institution_name}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="institutionloc">INSTITUTION LOCATION</label>
                                        <input type="text" placeholder='Dhaka, Bangladesh' id="institutionloc" onChange={(e) => setResumeData({ ...resumeData, 'institution_location': e.target.value })}
                                            value={isFormFilled && resumeData.institution_location}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="degree">QUALIFICATIONS OR DEGREE</label>
                                        <input type="text" placeholder='Bachelor of Science' id="degree" onChange={(e) => setResumeData({ ...resumeData, 'degree': e.target.value })}
                                            value={isFormFilled && resumeData.degree}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="field">FIELD OF STUDY</label>
                                        <input type="text" placeholder='Computer Science' id="field" onChange={(e) => setResumeData({ ...resumeData, 'field_study': e.target.value })}
                                            value={isFormFilled && resumeData.field_study}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="starting">STARTING YEAR</label>
                                        <input type="date" placeholder='2018' id="starting" onChange={(e) => setResumeData({ ...resumeData, 'education_starting_year': e.target.value })}
                                            value={isFormFilled && resumeData.education_starting_year}
                                        />
                                    </div>
                                    <div className='resume-input-field'>
                                        <label htmlFor="end">YEAR OF GRADUATION</label>
                                        <input type="date" placeholder='2022' id="end" onChange={(e) => setResumeData({ ...resumeData, 'education_graduation_year': e.target.value })}
                                            value={isFormFilled && resumeData.education_graduation_year}
                                        />
                                        <div className='currently-here' style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }}>
                                            <input type="checkbox" id="currently_here" onClick={() => setResumeData({ ...resumeData, 'education_graduation_year': 'Present' })}
                                                value={isFormFilled && resumeData.education_graduation_year}
                                            />
                                            <label htmlFor="currently_here">I currently study here</label>
                                        </div>
                                    </div>

                                </div>
                                <div className='heading-textarea'>
                                    <label htmlFor="achivements">NOTABLE ACHIVEMENTS</label>
                                    <textarea name="" id="achivements" cols="30" rows="10" placeholder='Write your career summary' onChange={(e) => setResumeData({ ...resumeData, 'education_achivements': e.target.value })}
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
                                    <label htmlFor="institutionname">INSTITUTION NAME</label>
                                    <input type="text" value={resumeData.institution_name2} placeholder='University of Dhaka' id="institutionname" onChange={(e) => setResumeData({ ...resumeData, 'institution_name2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="institutionloc">INSTITUTION LOCATION</label>
                                    <input type="text" value={resumeData.institution_location2} placeholder='Dhaka, Bangladesh' id="institutionloc" onChange={(e) => setResumeData({ ...resumeData, 'institution_location2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="degree">QUALIFICATIONS OR DEGREE</label>
                                    <input type="text" value={resumeData.degree2} placeholder='Bachelor of Science' id="degree" onChange={(e) => setResumeData({ ...resumeData, 'degree2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="field">FIELD OF STUDY</label>
                                    <input type="text" value={resumeData.field_study2} placeholder='Computer Science' id="field" onChange={(e) => setResumeData({ ...resumeData, 'field_study2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="starting">STARTING YEAR</label>
                                    <input type="date" value={resumeData.education_starting_year2} placeholder='2018' id="starting" onChange={(e) => setResumeData({ ...resumeData, 'education_starting_year2': e.target.value })} />
                                </div>
                                <div className='resume-input-field'>
                                    <label htmlFor="end">YEAR OF GRADUATION</label>
                                    <input type="date" value={resumeData.education_graduation_year2} placeholder='2022' id="end" onChange={(e) => setResumeData({ ...resumeData, 'education_graduation_year2': e.target.value })} />
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }}>
                                        <input type="checkbox" value={resumeData.education_graduation_year2} id="currently_here" onClick={() => setResumeData({ ...resumeData, 'education_graduation_year2': 'Present' })} />
                                        <label style={{ fontSize: '13px' }} htmlFor="currently_here">I currently study here</label>
                                    </div>
                                </div>

                            </div>
                            <div className='heading-textarea'>
                                <label htmlFor="achivements">NOTABLE ACHIVEMENTS</label>
                                <textarea name="" id="achivements" cols="30" rows="10" value={resumeData.education_achivements2} placeholder='Write your career summary' onChange={(e) => setResumeData({ ...resumeData, 'education_achivements2': e.target.value })}></textarea>
                            </div>
                        </form>
                    }
                    {
                        addMore ||
                        <div className="add-more-education">
                            <button onClick={() => handleAddMore()} style={{ cursor: isFormFilled ? 'pointer' : 'not-allowed', opacity: isFormFilled ? 1 : 0.5 }}><FaPlus /> ADD MORE EDUCATION</button>
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

export default ResumeEducation;