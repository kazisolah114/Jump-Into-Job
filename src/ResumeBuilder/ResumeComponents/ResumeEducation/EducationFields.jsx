"use client";
import React, { useState, useCallback, useEffect } from "react";

function EducationFields({ props }) {
  const [index, setIndex] = useState(0);

  const [educationFields, setEducationFields] = useState({});
  const BaseFormat = {
    institution_name: "",
    education_achivements: "",
    education_graduation_year: educationFields.education_graduation_year == "on" ? "off" : "",
    education_starting_year: "",
    field_study: "",
    degree: "",
    institution_location: "",
    institution_name: "",
    status: "edit",
  };
  const {
    setResumeData,
    resumeData,
    formIndex,
    state,
    setState,
  } = props;

  useEffect(() => {
    if (resumeData.educations[index]) {
      setEducationFields(resumeData.educations[index]);
    }
  }, [resumeData]);

  const handleChange = useCallback((key, value) => {
    setEducationFields((prev) => {
      prev[key] = value;
      return prev;
    });
    updateResumeData(index, educationFields);
  });


  useEffect(() => {
    if (state.type == "insert") {
      setEducationFields(BaseFormat);
      setIndex(formIndex);
      updateResumeData(formIndex, BaseFormat);
    }
    if (state.type == "update") {

      setEducationFields(resumeData.educations[state.id]);
      setIndex(state.id)
    }
  }, [formIndex]);

  const updateResumeData = useCallback((index, educationFields) => {
    const resumeEducations = resumeData.educations;

    //check if the item is in the array
    resumeEducations[index] = educationFields;
    console.log(resumeEducations)
    setResumeData((prev) => {
      return { ...prev, educations: resumeEducations };
    });
  });

  const saveChanges = useCallback(() => {
    setState({ type: "list-view", id: index });
  });

  return (
    <form action="" className="heading-form">
      <div className="heading-form-main">
        <div className="resume-input-field">
          <label htmlFor="institutionname">INSTITUTION NAME</label>
          <input
            type="text"
            placeholder="University of Dhaka"
            id="institutionname"
            onChange={(e) => handleChange("institution_name", e.target.value)}
            value={educationFields.institution_name}
          />
        </div>
        <div className="resume-input-field">
          <label htmlFor="institutionloc">INSTITUTION LOCATION</label>
          <input
            type="text"
            placeholder="Dhaka, Bangladesh"
            id="institutionloc"
            onChange={(e) =>
              handleChange("institution_location", e.target.value)
            }
            value={educationFields.institution_location}
          />
        </div>
        <div className="resume-input-field">
          <label htmlFor="degree">QUALIFICATIONS OR DEGREE</label>
          <input
            type="text"
            placeholder="Bachelor of Science"
            id="degree"
            onChange={(e) => handleChange("degree", e.target.value)}
            value={educationFields.degree}
          />
        </div>
        <div className="resume-input-field">
          <label htmlFor="field">FIELD OF STUDY</label>
          <input
            type="text"
            placeholder="Computer Science"
            id="field"
            onChange={(e) => handleChange("field_study", e.target.value)}
            value={educationFields.field_study}
          />
        </div>
        <div className="resume-input-field">
          <label htmlFor="starting">STARTING YEAR</label>
          <input
            type="date"
            placeholder="2018"
            id="starting"
            onChange={(e) =>
              handleChange("education_starting_year", e.target.value)
            }
            value={educationFields.education_starting_year}
          />
        </div>
        <div className="resume-input-field">
          <label htmlFor="end">YEAR OF GRADUATION</label>
          <input
            type="date"
            placeholder="2022"
            id="end"
            onChange={(e) =>
              handleChange("education_graduation_year", e.target.value)
            }
            value={educationFields.education_graduation_year}
          />
          <div
            className="currently-here"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              marginTop: "10px",
            }}
          >
            <input
              type="checkbox"
              id="currently_here"
              onChange={(e) =>
                handleChange("education_graduation_year", e.target.value)
              }
              value={educationFields.education_graduation_year}
            />
            <label htmlFor="currently_here">I currently study here</label>
          </div>
        </div>
      </div>
      <div className="heading-textarea">
        <label htmlFor="achivements">NOTABLE ACHIVEMENTS</label>
        <textarea
          name=""
          id="achivements"
          cols="30"
          rows="10"
          placeholder="Write your career summary"
          onChange={(e) =>
            handleChange("education_achivements", e.target.value)
          }
          value={resumeData.educations[index]?.education_achivements}
        ></textarea>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          marginTop: "30px",
        }}
      >
        <button>Dismiss</button>
        <div
          onClick={() => {
            saveChanges()
          }}
        >
          Save
        </div>
      </div>
    </form>
  );
}

export default EducationFields;
