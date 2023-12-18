import React, { useEffect } from "react";
import { useUserContext } from "../../../UserContext/UserContext";
import "../ResumeHeading/ResumeHeading.css";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import PreviewEducation from "./PreviewEducation";
import EducationFields from "./EducationFields";
import PrevNextButton from "@/ResumeBuilder/Layout/Button/PrevNextButton";

const ResumeEducation = () => {
  const { currentStep, setCurrentStep, resumeData, setResumeData } =
    useUserContext();

  const [state, setState] = useState({ type :  "list-view" , id : -1});
  const [educationFields, setEducationFields] = useState({});
  const [isFormFilled, setFormFilled] = useState(false);


  return (
    <div className="resume-education">
      <div className="resume-education-container container">
        <div className="resume-form-header">
          <h3>
            Now complete your <span>education</span>
          </h3>
        </div>
        <div className="resume-education-content resume-heading-content">
          {(state.type=='list-view' || state.type=='delete') && (
            <PreviewEducation
              props={{
                resumeData,
                setEducationFields,
                state,
                setState,
                setResumeData
              }}
            />
          )}
          {(state.type == "update" || state.type == "insert") && (
            <EducationFields
              props={{
                setResumeData,
                resumeData,
                isFormFilled,
                formIndex : state.id,
                isFormFilled,
                setFormFilled,
                educationFields,
                setEducationFields,
                state,
                setState,
              }}
            />
          )}

          {(state.type=='list-view' || state.type=='delete') && (
            <div className="add-more-education">
              <button
                onClick={() => setState({type : 'insert' , id : state.id+1 })}
                style={{
                  cursor: "pointer" ,
                  opacity:  1 ,
                }}
              >
                <FaPlus /> ADD EDUCATION
              </button>
            </div>
          )}
        </div>
        <div>
          <PrevNextButton props={{ setCurrentStep }} />
        </div>
      </div>
    </div>
  );
};

export default ResumeEducation;
