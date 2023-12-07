import React from 'react';
import { HiPencil, HiPlus, HiX } from "react-icons/hi";
import { useState } from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import { FaTrashAlt } from 'react-icons/fa';
import { useEffect } from 'react';

const AddLanguages = () => {
    const { resumeData, setResumeData } = useUserContext();
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = (e) => { 
        setShowModal(e)
    }
    const [languageList, setLanguageList] = useState([]);
    const [currentLanguage, setCurrentLanguage] = useState("");
    const handleLanguageList = (language) => {
        setLanguageList([...languageList, language]);
        setCurrentLanguage("");
    }
    
    const handleSaveLanguage = () => {
        setResumeData({ ...resumeData, languages: languageList });
    }
    
    const handleRemoveLanguage = (index) => {
        const updatedLanguageList = [...languageList];
        updatedLanguageList.splice(index, 1);
        setLanguageList(updatedLanguageList);
    };
    useEffect(() => {
        // This effect runs whenever skillList changes
        handleSaveLanguage();
    }, [languageList]);
    console.log(resumeData)
    return (
        <div className='add-skills'>
            <div className="add-new-skill" onClick={() => handleShowModal(true)}>
                <h4>Add Languages</h4>
                <button><HiPlus /></button>
            </div>
            <ul className="skills-list">
                {
                    resumeData?.languages?.map((language, index) => <li className='skill'>
                        <p>{language}</p>
                        <button onClick={() => handleRemoveLanguage(index)}><FaTrashAlt /></button>
                    </li>)
                }
            </ul>
            {/* Modal */}
            <div className={`add-skills-modal ${showModal ? 'show-modal' : 'hide-modal'}`}>
                <div className="modal-header">
                    <p>Add Skills</p>
                    <button onClick={() => handleShowModal(false)}><HiX /></button>
                </div>
                <div className="modal-content">
                    <p>Add up to three languages to impress the employers</p>
                    <div>
                        <label htmlFor="languages">Languages*</label>
                        <input type="text" id="languages" value={currentLanguage} onChange={(e) => setCurrentLanguage(e.target.value)} />
                    </div>
                    {/* <div className="suggested-skills">
                        <p>Suggested based on your profile</p>
                        <ul>
                            <li>AngularJS</li>
                            <li>Git</li>
                            <li>Figma</li>
                            <li>SAAS</li>
                            <li>AJAX</li>
                            <li>InVison</li>
                            <li>Object Oriented Programming</li>
                            <li>Restfull APIs</li>
                            <li>NodeJS</li>
                            <li>NestJS</li>
                            <li>Django</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div> */}
                </div>
                <div className="modal-footer">
                    <button onClick={() =>
                    (
                        handleShowModal(false),
                        handleLanguageList(currentLanguage)
                    )
                    }>Save</button>
                </div>
            </div>
            {/* Modal */}
        </div>
    );
};

export default AddLanguages;