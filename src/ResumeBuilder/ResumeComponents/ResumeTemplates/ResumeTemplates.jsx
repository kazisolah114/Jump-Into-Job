import React, { useState } from 'react';
// import './ResumetemplatesCSS.css'
import { useUserContext } from '../../../UserContext/UserContext';
import 'bear-react-carousel/dist/index.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ResumeTemplates = ({ handleSelectedTemplate, selectedTemplateId}) => {
    const { currentStep, setCurrentStep } = useUserContext();
    const resumeTemplates = [
        { id: 1, name: 'classic', image: 'https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcmVzdW1lcy90ZWFjaGVyLXJlc3VtZS5wbmc~..png', type: 'resume' },
        { id: 2, name: 'modern', image: 'https://i.ibb.co/P1crN2n/resumetemplate2.png', type: 'resume' },
        { id: 3, name: 'creative', image: 'https://gosumo-cvtemplate.com/wp-content/uploads/2019/06/Word-CV-Template-Dublin.png', type: 'cv' },
        { id: 4, name: 'fancy', image: 'https://techguruplus.com/wp-content/uploads/2022/12/Resume-CV-Templates-Word-doc-023.jpg', type: 'cv' },
        { id: 5, name: 'stylish', image: 'https://blog.hubspot.com/hs-fs/hubfs/resume-templates-word_2.webp?width=650&height=841&name=resume-templates-word_2.webp', type: 'resume' }
    ]
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 2
    };


    return (
        <div className='resume-templates'>
            
            <div className="resume-templates-container container">
                <div className="resume-form-header">
                    <h3>Please pick a <span>template</span> below</h3>
                </div>
                
                <div className="templates">
                    <Slider {...settings} style={{maxWidth: '100%'}}>
                    {resumeTemplates.map(template => <div key={template.id} className={`template`} onClick={() => 
                        handleSelectedTemplate(template)
                        
                        }>
                        <img src={template.image} alt=""  className={`${selectedTemplateId === template.id ? 'selected-template' : ''}`} />
                        <p>{template.name} {template.type}</p>
                    </div>)}
                    </Slider>
                </div>
                
                <div className="resume-prev-next-buttons">
                    <button className='next-button' onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ResumeTemplates;