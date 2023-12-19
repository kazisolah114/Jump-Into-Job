import SaveDismissButtons from "@/ResumeBuilder/Layout/Button/SaveDismissButtons";
import React, { useCallback, useEffect, useState } from "react";

function EperienceFiels({ props }) {
  const [index, setIndex] = useState(0);

  const [experienceFields, setExperienceFields] = useState({});
  const BaseFormat = {
    job_title: "",
    company: "",
    job_city: "",
    job_country: "",
    job_starting_year: "",
    job_ending_year:
      experienceFields.job_ending_year == "on" ? "off" : "",
    job_description : "",
  };
  const { setResumeData, resumeData, formIndex, state, setState } = props;

  useEffect(() => {
    if (resumeData.experiences[index]) {
      setExperienceFields(resumeData.experiences[index]);
    }
  }, [resumeData]);

  const handleChange = useCallback((key, value) => {
    setExperienceFields((prev) => {
      prev[key] = value;
      return prev;
    });
    updateResumeData(index, experienceFields);
  });

  useEffect(() => {
    if (state.type == "insert") {
      setExperienceFields(BaseFormat);
      setIndex(formIndex);
      updateResumeData(formIndex, BaseFormat);
    }
    if (state.type == "update") {
      setExperienceFields(resumeData.experiences[state.id]);
      setIndex(state.id);
    }
  }, [formIndex]);

  const updateResumeData = useCallback((index, experienceFields) => {
    const resumeEducations = resumeData.experiences;

    //check if the item is in the array
    resumeEducations[index] = experienceFields;
    console.log(resumeEducations);
    setResumeData((prev) => {
      return { ...prev, educations: resumeEducations };
    });
  });


  return (
    <form action="" className="heading-form" style={{ marginTop: "50px" }}>
      <div className="heading-form-main">
        <div className="resume-input-field">
          <label htmlFor="jobtitle">JOB TITLE</label>
          <input
            type="text"
            value={experienceFields?.job_title}
            placeholder="Python Developer"
            id="jobtitle"
            onChange={(e) => handleChange("job_title", e.target.value)}
          />{" "}
          
        </div>
        <div className="resume-input-field">
          <label htmlFor="company">COMPANY</label>
          <input
            type="text"
            value={experienceFields?.company}
            placeholder="Prospectbd"
            id="company"
            onChange={(e) => handleChange("company", e.target.value)}
          />
         
        </div>
        <div className="resume-input-field">
          <label htmlFor="city">CITY</label>
          <input
            type="text"
            value={experienceFields?.city}
            placeholder="Rajshahi"
            id="city"
            onChange={(e) => handleChange("job_city", e.target.value)}
          />
       
        </div>
        <div className="resume-input-field">
          <label htmlFor="job_country">COUNTRY</label>
          <input
            type="text"
            value={experienceFields?.country}
            placeholder="Bangladesh"
            id="country"
            onChange={(e) => handleChange("job_country", e.target.value)}
          />
        </div>
        <div className="resume-input-field">
          <label htmlFor="starting">START DATE</label>
          <input
            type="date"
            value={experienceFields?.job_starting_year}
            placeholder="05-18-2023"
            id="starting"
            onChange={(e) => handleChange("job_starting_year", e.target.value)}
          />
        </div>
        <div className="resume-input-field">
          <label htmlFor="end">END DATE</label>
          <input
            type="date"
            value={
              experienceFields?.job_ending_year
            }
            placeholder="Present"
            id="end"
            onChange={(e) => handleChange("job_ending_year", e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              marginTop: "10px",
            }}
          >
            <input
              type="checkbox"
              value={
                experienceFields?.job_ending_year
              }
              id="currently_here"
              onClick={(e) => handleChange("job_ending_year", e.target.value)}
            />
            <label style={{ fontSize: "13px" }} htmlFor="currently_here">
              I currently study here
            </label>
          </div>
        </div>
      </div>
      <div className="heading-textarea">
        <label htmlFor="achivements">JOB DESCRIPTION</label>
        <textarea
          name=""
          id="achivements"
          cols="30"
          rows="10"
          value={resumeData.experiences[formIndex]?.job_description}
          placeholder="Write your job description"
          onChange={(e) => handleChange("job_description", e.target.value)}
        ></textarea>
      </div>
       <SaveDismissButtons props={{state,setState}} />
    </form>
  );
}

export default EperienceFiels;
