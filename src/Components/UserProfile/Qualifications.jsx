"use client"
import React, { useState } from 'react';
import { HiAcademicCap, HiX } from 'react-icons/hi';
import { FaAtlas, FaMedal, FaPencilAlt } from "react-icons/fa";
import CreatableSelect from 'react-select/creatable';
import { RiMedalFill } from "react-icons/ri";


const Qualifications = () => {
    const [educationModalIsOpen, setEducationModalIsOpen] = useState(false);
    const [skillsModalIsOpen, setSkillsModalIsOpen] = useState(false)
    const [languageModalIsOpen, setLanguageModalIsOpen] = useState(false)
    const [modalIsClosed, setModalIsClosed] = useState(false)
    const handleModalIsOpen = (event) => {
        setEducationModalIsOpen(event);
        setSkillsModalIsOpen(event);
        setLanguageModalIsOpen(event);
    }
    const handleModalIsClosed = (event) => {
        setModalIsClosed(event)

    }

    // Skills Select
    const optionList = [
        { value: "digital_marketing", label: "Digital Marketing" },
        { value: "web_development", label: "Web Development" },
        { value: "javascript", label: "Javascript" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
        { value: "react", label: "ReactJS" },
        { value: "node", label: "NodeJS" },
        { value: "mongo", label: "MongoDB" },
        { value: "python", label: "Python" },
        { value: "graphic", label: "Graphic Design" },
    ];


    // Education
    const education = {
        "degree": "Bachelor Degree",
        "field": "Computer Science",
    }
    console.log(education)

    // Skills
    const skills = [
        { "id": 1, "skill": "Javascript" },
        { "id": 2, "skill": "ReactJS" },
        { "id": 3, "skill": "NodeJS" },
        { "id": 4, "skill": "ExpressJS" },
        { "id": 5, "skill": "MongoDB" },
    ]

    //   Languages
    const languages = [
        { "id": 1, "name": "Bengali", "proficiency": "Native" },
        { "id": 2, "name": "English", "proficiency": "Fluent" },
        { "id": 3, "name": "Spanish", "proficiency": "Beginner" }
    ]

    return (
        <div className='user-profile-qualifications user-profile-about-me'>
            <h2>Qualifications</h2>
            <div className="qualifications-content">
                {/* Education */}
                <div className="education-content">
                    {education ?
                        <div className="qualifications-header">
                            <HiAcademicCap></HiAcademicCap>
                            <h3>Education</h3>
                        </div>
                        :
                        <div className="qualifications-header">
                            <h3>Education</h3>
                        </div>
                    }
                    <div>
                        {education ?
                            <div className="education-container qualifications-container">
                                {
                                    <p>{education.degree}, <span>{education.field}</span></p>
                                }
                                <div className="qualifications-item-container">
                                    <div className="education-items">
                                        <div className="qualification-item" onClick={() => handleModalIsOpen('education')}>
                                            <div>
                                                <p>Edit your education</p>
                                            </div>
                                            <FaPencilAlt></FaPencilAlt>
                                        </div>
                                    </div>
                                    <div className={` modal-content ${educationModalIsOpen == 'education' ? 'show-modal' : 'hide-modal'}`}>

                                        <div className="modal-item">
                                            <div className="modal-header">
                                                <h3>Edit education</h3>
                                                <HiX onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}></HiX>
                                            </div>
                                            <form action="">
                                                <div className='education-fields'>
                                                    <label htmlFor="education-level">
                                                        Level of education*
                                                    </label>
                                                    <input type="text" defaultValue={education.degree} id="education-lavel" name="education-level" required />
                                                </div>
                                                <div className='education-fields'>
                                                    <label htmlFor="education-field">Field of study</label>
                                                    <input type="text" defaultValue={education.field} id="education-field" name="education-field" />
                                                </div>
                                                <div className="modal-buttons">
                                                    <input type="submit" value="Save" className='qualification-submit-btn' />
                                                    <button className="close-modal-button" onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}>Close</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="qualifications-item-container">
                                <div className="education-items">
                                    <div className="qualification-item" onClick={() => handleModalIsOpen('education')}>
                                        <div>
                                            <HiAcademicCap></HiAcademicCap>
                                            <p>Add your last education</p>
                                        </div>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className={` modal-content ${educationModalIsOpen == 'education' ? 'show-modal' : 'hide-modal'}`}>

                                    <div className="modal-item">
                                        <div className="modal-header">
                                            <h3>Add education</h3>
                                            <HiX onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}></HiX>
                                        </div>
                                        <form action="">
                                            <div className='education-fields'>
                                                <label htmlFor="education-level">
                                                    Level of education*
                                                </label>
                                                <input type="text" placeholder='ex: Bachelor Degree' id="education-lavel" name="education-level" required />
                                            </div>
                                            <div className='education-fields'>
                                                <label htmlFor="education-field">Field of study</label>
                                                <input type="text" placeholder='ex: Computer Science' id="education-field" name="education-field" />
                                            </div>
                                            <div className="modal-buttons">
                                                <input type="submit" value="Save" className='qualification-submit-btn' />
                                                <button className="close-modal-button" onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}>Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                </div>


                {/* Skills */}
                <div className="skills-content education-content">
                    {skills ?
                        <div className="qualifications-header">
                            <RiMedalFill></RiMedalFill>
                            <h3>Skills</h3>
                        </div>
                        :
                        <div className="qualifications-header">
                            <h3>Skills</h3>
                        </div>
                    }

                    <div className="education-items">

                        {skills ?
                            <div className="skills-container qualifications-container">
                                {
                                    skills.map((skill) => <div>
                                        <p>{skill.skill}</p>

                                    </div>)
                                }
                                <div className="qualifications-item-container">
                                    <div className="qualification-item" onClick={() => handleModalIsOpen('skills')}>
                                        <div>

                                            <p>Add skills</p>
                                        </div>
                                        <button>+</button>
                                    </div>
                                    <div className={`modal-content ${skillsModalIsOpen == 'skills' ? 'show-modal' : 'hide-modal'}`}>

                                        <div className="modal-item">
                                            <div className="modal-header">
                                                <h3>Add skill</h3>
                                                <HiX onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}></HiX>
                                            </div>
                                            <form action="">
                                                <div className='skills-selector'>
                                                    <CreatableSelect
                                                        isMulti
                                                        options={optionList}
                                                    />
                                                </div>
                                                <div className="modal-buttons">
                                                    <input type="submit" value="Save" className='qualification-submit-btn' />
                                                    <button className="close-modal-button" onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}>Close</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="qualifications-item-container">
                                <div className="qualification-item" onClick={() => handleModalIsOpen('skills')}>
                                    <div>
                                        <RiMedalFill></RiMedalFill>
                                        <p>Add skills</p>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={`modal-content ${skillsModalIsOpen == 'skills' ? 'show-modal' : 'hide-modal'}`}>

                                    <div className="modal-item">
                                        <div className="modal-header">
                                            <h3>Add skill</h3>
                                            <HiX onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}></HiX>
                                        </div>
                                        <form action="">
                                            <div className='skills-selector'>
                                                <CreatableSelect
                                                    isMulti
                                                    options={optionList}
                                                />
                                            </div>
                                            <div className="modal-buttons">
                                                <input type="submit" value="Save" className='qualification-submit-btn' />
                                                <button className="close-modal-button" onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}>Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        }





                    </div>
                </div>



                {/* Languages */}
                <div className="education-content">
                    <div className='qualifications-header'>
                        <FaAtlas></FaAtlas>
                        <h3>Languages</h3>
                    </div>
                    {languages ?
                        <div className="languages-container qualifications-container">
                            {
                                languages.map(language => <div>
                                    <p>{language.name}, <span>{language.proficiency}</span></p>

                                </div>)
                            }
                            <div className="qualifications-item-container">
                                <div className="education-items">
                                    <div className="qualification-item" onClick={() => handleModalIsOpen('language')}>
                                        <div>

                                            <p>Add another languages</p>
                                        </div>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className={` modal-content ${languageModalIsOpen == 'language' ? 'show-modal' : 'hide-modal'}`}>

                                    <div className="modal-item">
                                        <div className="modal-header">
                                            <h3>Add languages</h3>
                                            <HiX onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}></HiX>
                                        </div>
                                        <form action="">
                                            <div className='education-fields'>
                                                <label htmlFor="language">
                                                    Language*
                                                </label>
                                                <input type="text" placeholder='ex: korean' id="language" name="language" required />
                                            </div>
                                            <div className='education-fields'>
                                                <label htmlFor="language-profiency">Proficiency</label>
                                                <input type="text" placeholder='ex: native' id="language-profiency" name="language_profiency" />
                                            </div>
                                            <div className="modal-buttons">
                                                <input type="submit" value="Save" className='qualification-submit-btn' />
                                                <button className="close-modal-button" onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}>Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        :
                        <div className="qualifications-item-container">
                            <div className="education-items">
                                <div className="qualification-item" onClick={() => handleModalIsOpen('language')}>
                                    <div>
                                        <FaAtlas></FaAtlas>
                                        <p>Add languages</p>
                                    </div>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className={` modal-content ${languageModalIsOpen == 'language' ? 'show-modal' : 'hide-modal'}`}>

                                <div className="modal-item">
                                    <div className="modal-header">
                                        <h3>Add languages</h3>
                                        <HiX onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}></HiX>
                                    </div>
                                    <form action="">
                                        <div className='education-fields'>
                                            <label htmlFor="language">
                                                Language*
                                            </label>
                                            <input type="text" placeholder='ex: korean' id="language" name="language" required />
                                        </div>
                                        <div className='education-fields'>
                                            <label htmlFor="language-profiency">Proficiency</label>
                                            <input type="text" placeholder='ex: native' id="language-profiency" name="language_profiency" />
                                        </div>
                                        <div className="modal-buttons">
                                            <input type="submit" value="Save" className='qualification-submit-btn' />
                                            <button className="close-modal-button" onClick={() => { handleModalIsClosed(true), handleModalIsOpen(false) }}>Close</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }

                </div>


            </div>
        </div>
    );
};

export default Qualifications;