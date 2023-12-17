'use client'
import React, { useState,useCallback, useEffect } from 'react'



function EducationFields({props}) {
    
    const [educationFields,setEducationFields] = useState({});
    const {setResumeData,resumeData,formIndex,isFormFilled,setFormFilled} = props;


    const isEmptyFiledPresent =useCallback((array)=>{
        console.log(Object.values(array))

        let ValueList = Object.values(array);
        // console.log(ValueList.indexOf('') )

        return ValueList.indexOf('')!==-1

    })


    const handleFormChange =useCallback((formData,fieldCount)=>{
        let status = true && !isEmptyFiledPresent(formData) &&Object.keys(formData).length ==fieldCount 
        setFormFilled(status)
        // console.log(status)
    })

    useEffect(()=>{
        handleFormChange(educationFields,7)
        if(resumeData.educations[formIndex]){
            setEducationFields(resumeData.educations[formIndex])
        }
    },[resumeData])

    const handleChange = useCallback((key,value)=>{

        setEducationFields((prev)=>{
            prev[key]= value;
            return prev
        })
    console.log(resumeData,educationFields)
    const resumeEducations = resumeData.educations;

    //check if the item is in the array
    // console.log(resumeEducations[formIndex],formIndex)
    if(resumeEducations[formIndex]!=undefined){

        
        resumeEducations[formIndex]=educationFields;
        // console.log(resumeEducations,resumeData)
    }
    else{

        resumeEducations.push(educationFields);
        // console.log(resumeEducations,resumeData)

    }

    setResumeData( (prev)=> {
        return {...prev, educations: resumeEducations}  })
        handleFormChange(educationFields,7)

    }
    
    )

    // useEffect(() => {

    //     const resumeEducations = resumeData.educations;

    //     //check if the item is in the array
    //     console.log(resumeEducations[formIndex],formIndex)
    //     if(resumeEducations[formIndex]!=undefined){

            
    //         resumeEducations[formIndex]=educationFields;
    //         // console.log(resumeEducations,resumeData)
    //     }
    //     else{

    //         resumeEducations.push(educationFields);
    //         // console.log(resumeEducations,resumeData)

    //     }

    //     setResumeData( (prev)=> {
    //         return {...prev, educations: resumeEducations}  })
    // }, [educationFields])


    


  return (
    <form action="" className="heading-form" >
    <div className="heading-form-main">
        <div className='resume-input-field'>
            <label htmlFor="institutionname">INSTITUTION NAME</label>
            <input type="text" placeholder='University of Dhaka' id="institutionname" onChange={(e) => handleChange('institution_name',e.target.value)  } //setResumeData({ ...resumeData, educations: [...resumeData.educations, { 'institution_name': e.target.value }]
                value={resumeData.educations[formIndex]?.institution_name}
            />
        </div>
        <div className='resume-input-field'>
            <label htmlFor="institutionloc">INSTITUTION LOCATION</label>
            <input type="text" placeholder='Dhaka, Bangladesh' id="institutionloc" onChange={(e) => handleChange('institution_location',e.target.value) } // setResumeData({ ...resumeData, educations: [...resumeData.educations, { 'institution_location': e.target.value }] 
                value={ resumeData.educations[formIndex]?.institution_location}
            />
        </div>
        <div className='resume-input-field'>
            <label htmlFor="degree">QUALIFICATIONS OR DEGREE</label>
            <input type="text" placeholder='Bachelor of Science' id="degree" onChange={(e) => handleChange('degree',e.target.value) } // setResumeData({ ...resumeData, educations: [...resumeData.educations, { 'degree': e.target.value }]
                value={resumeData.educations[formIndex]?.degree}
            />
        </div>
        <div className='resume-input-field'>
            <label htmlFor="field">FIELD OF STUDY</label>
            <input type="text" placeholder='Computer Science' id="field" onChange={(e) => handleChange('field_study',e.target.value) } // setResumeData({ ...resumeData, educations: [...resumeData.educations, { 'field_study': e.target.value }] 
                value={resumeData.educations[formIndex]?.field_study}
            />
        </div>
        <div className='resume-input-field'>
            <label htmlFor="starting">STARTING YEAR</label>
            <input type="date" placeholder='2018' id="starting" onChange={(e) => handleChange('education_starting_year',e.target.value) } //setResumeData({ ...resumeData, educations: [...resumeData.educations, { 'education_starting_year': e.target.value }]
                value={resumeData.educations[formIndex]?.education_starting_year}
            />
        </div>
        <div className='resume-input-field'>
            <label htmlFor="end">YEAR OF GRADUATION</label>
            <input type="date" placeholder='2022' id="end" onChange={(e) => handleChange('education_graduation_year',e.target.value) } //setResumeData({ ...resumeData, educations: [...resumeData.educations, { 'education_graduation_year': e.target.value }]
                value={resumeData.educations[formIndex]?.education_graduation_year}
            />
            <div className='currently-here' style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }}>
                <input type="checkbox" id="currently_here" onChange={(e) => handleChange('education_graduation_year',e.target.value) } //setResumeData({ ...resumeData, educations: [...resumeData.educations, { 'education_graduation_year': 'Present' }] 
                    value={resumeData[formIndex]?.educations.education_graduation_year}
                />
                <label htmlFor="currently_here">I currently study here</label>
            </div>
        </div>

    </div>
    <div className='heading-textarea'>
        <label htmlFor="achivements">NOTABLE ACHIVEMENTS</label>
        <textarea name="" id="achivements" cols="30" rows="10" placeholder='Write your career summary'onChange={(e) => handleChange('education_achivements',e.target.value)  } //setResumeData({ ...resumeData, educations: [...resumeData.educations, { 'education_achivements': e.target.value }]</div>
            value={resumeData.educations[formIndex]?.education_achivements}
        ></textarea>
    </div>


</form>
  )
}

export default EducationFields