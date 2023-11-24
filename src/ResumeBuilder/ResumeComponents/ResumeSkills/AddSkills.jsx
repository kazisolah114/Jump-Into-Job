import React from 'react';
import { HiPencil, HiPlus, HiX } from "react-icons/hi";
import './AddSkills.css'
import { useState } from 'react';
import { useUserContext } from '../../../UserContext/UserContext';
import { FaTrashAlt } from 'react-icons/fa';
import { useEffect } from 'react';

const AddSkills = () => {
    const { resumeData, setResumeData } = useUserContext();
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = (e) => { 
        setShowModal(e)
    }
    const [skillList, setSkillList] = useState([]);
    const [currentSkill, setCurrentSkill] = useState("");
    const handleSkillList = (skill) => {
        setSkillList([...skillList, skill]);
        setCurrentSkill("");
    }
    
    const handleSaveSkill = () => {
        setResumeData({ ...resumeData, skills: skillList });
    }
    
    const handleRemoveSkill = (index) => {
        const updatedSkillList = [...skillList];
        updatedSkillList.splice(index, 1);
        setSkillList(updatedSkillList);
    };
    useEffect(() => {
        // This effect runs whenever skillList changes
        handleSaveSkill();
    }, [skillList]);
    console.log(resumeData)
    return (
        <div className='add-skills'>
            <div className="add-new-skill" onClick={() => handleShowModal(true)}>
                <h4>Add skill</h4>
                <button><HiPlus /></button>
            </div>
            <ul className="skills-list">
                {
                    resumeData?.skills?.map((skill, index) => <li className='skill'>
                        <p>{skill}</p>
                        <button onClick={() => handleRemoveSkill(index)}><FaTrashAlt /></button>
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
                    <p>Add your top skills to impress the employers</p>
                    <div>
                        <label htmlFor="skill">Skill*</label>
                        <input type="text" value={currentSkill} onChange={(e) => setCurrentSkill(e.target.value)} />
                    </div>
                    <div className="suggested-skills">
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
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={() =>
                    (
                        handleShowModal(false),
                        handleSkillList(currentSkill)
                    )
                    }>Save</button>
                </div>
            </div>
            {/* Modal */}
        </div>
    );
};

export default AddSkills;