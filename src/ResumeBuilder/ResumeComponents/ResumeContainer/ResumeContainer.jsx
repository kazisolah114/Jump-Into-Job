"use client"
import React, { useState } from 'react';
import ResumeSteps from '../ResumeSteps/ResumeSteps';
import ResumeTemplates from '../ResumeTemplates/ResumeTemplates';
import { useUserContext } from '../../../UserContext/UserContext';
import ResumeHeading from '../ResumeHeading/ResumeHeading';
import ResumeEducation from '../ResumeEducation/ResumeEducation';
import ResumePreview from '../ResumePreview/ResumePreview';
import ResumeExperiences from '../ResumeExperiences/ResumeExperiences';
import ResumeSkills from '../ResumeSkills/ResumeSkills';
import ResumeFinalize from '../ResumeFinalize/ResumeFinalize';

const ResumeContainer = () => {
    const { currentStep, setCurrentStep, resumeData, setResumeData } = useUserContext();
    const [templateType, setTemplateType] = useState(null);
    const [selectedTemplateId, setSelectedTemplateId] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState([]);




    const handleSelectedTemplate = (template) => {
        setSelectedTemplateId(template.id);
        setTemplateType(template.type)
        setSelectedTemplate(template);

    }
    // console.log(resumeData)
    const handleCurrentStep = (step) => {

        if(step==1){
            return  <ResumeTemplates handleSelectedTemplate={handleSelectedTemplate} selectedTemplateId={selectedTemplateId} />
        }

        return <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '30px' }}>
                    <div className="resume-form">
                       {step==2 && <ResumeHeading templateType={templateType} />}
                       {step==3 && <ResumeEducation />}
                       {step==4 &&  <ResumeExperiences /> }
                       {step==5 &&  <ResumeSkills /> }
                       {step==6 &&  <ResumeFinalize /> }
                    </div>
                    <div className="resume-preview">
                        <ResumePreview selectedTemplate={selectedTemplate} />
                    </div>
                </div>
    }
    return (
        <div style={{ padding: '50px 0' }} className='container'>
            <ResumeSteps />
            <div className="resume-content" style={{ padding: '30px', margin: '50px 0' }}>
                {handleCurrentStep(currentStep)}
            </div>
        </div>
    );
};

export default ResumeContainer;