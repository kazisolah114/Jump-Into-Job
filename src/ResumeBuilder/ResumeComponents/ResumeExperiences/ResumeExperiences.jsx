import React, { useCallback, useEffect, useState } from "react";
import { useUserContext } from "../../../UserContext/UserContext";
import { FaPlus } from "react-icons/fa";
import PreviewExperiences from "./PreviewExperiences";
import ExperienceFildes from "./ExperienceFields";
import PrevNextButton from "@/ResumeBuilder/Layout/Button/PrevNextButton";
import AddMoreButton from "@/ResumeBuilder/Layout/Button/AddMoreButton";
const ResumeExperiences = () => {
  const { currentStep, setCurrentStep, resumeData, setResumeData } =
    useUserContext();
  const [state, setState] = useState({ type: "list-view", id: -1 });
  const [experienceFields, setExperienceFields] = useState({});
  const [isFormFilled, setFormFilled] = useState(false);

  const handleAddMore = useCallback(()=>{
    setState({type : 'insert' , id : state.id+1})
  });

  return (
    <div className="resume-experiences">
      <div className="resume-experiences-container container">
        <div className="resume-form-header">
          <h3>
            Now complete your <span>experiences</span>
          </h3>
        </div>
        <div className="resume-education-content resume-heading-content">
          {(state.type=='list-view' || state.type=='delete') &&
            <PreviewExperiences
            props ={{
            resumeData,
            setExperienceFields,
            experienceFields,
            state,
            setState,
            setResumeData}}
            />
            }
             {(state.type == "update" || state.type == "insert") &&
            <ExperienceFildes
            props={{
                setResumeData,
                resumeData,
                isFormFilled,
                formIndex : state.id,
                isFormFilled,
                setFormFilled,
                experienceFields,
                setExperienceFields,
                state,
                setState,
              }}
            />
          }
          {(state.type=='list-view' || state.type=='delete') &&  (
            <AddMoreButton handleAddMore={handleAddMore}>
                ADD EXPERIENCE
            </AddMoreButton>
          )}
        </div>
        <div>
          <PrevNextButton props={{ setCurrentStep }} />
        </div>
      </div>
    </div>
  );
};

export default ResumeExperiences;
