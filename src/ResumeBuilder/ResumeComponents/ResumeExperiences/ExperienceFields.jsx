import React,{useCallback,useEffect,useState} from 'react'

function EperienceFiels({props}) {

    
    const {setResumeData,resumeData,isFormFilled,formIndex,setFormFilled} = props;

    const isEmptyFieldPresent =useCallback((array)=>{
        console.log(Object.values(array))
        let ValueList = Object.values(array);
        return ValueList.indexOf('')!==-1

    })


    const handleFormChange =useCallback((formData,fieldCount)=>{
        let status = true && !isEmptyFieldPresent(formData) &&Object.keys(formData).length ==fieldCount 
        setFormFilled(status)
        console.log(status)
    })

    useEffect(()=>{
        handleFormChange(experienceFields,7)
    },[resumeData])

    const [experienceFields,setExperienceFields] = useState({});
    const handleChange = useCallback((key,value)=>{
        setExperienceFields((prev)=>{
            prev[key]= value;
            return prev
        })

    // console.log(resumeData,experienceFields)
    const resumeEexperiences = resumeData.experiences;

    //check if the item is in the array
    // console.log(resumeEexperiences[formIndex],formIndex)
    if(resumeEexperiences[formIndex]!=undefined){

        
        resumeEexperiences[formIndex]=experienceFields;
        // console.log(resumeEducations,resumeData)
    }
    else{

        resumeEexperiences.push(experienceFields);
        // console.log(resumeEducations,resumeData)

    }

    setResumeData( (prev)=> {
        return {...prev, experiences: resumeEexperiences}  })
        handleFormChange(experienceFields,7)
    })
    
  return (
    <form action="" className="heading-form" style={{ marginTop: '50px' }}>
    <div className="heading-form-main">
        <div className='resume-input-field'>
            <label htmlFor="jobtitle">JOB TITLE</label>
            <input type="text" value={resumeData.experiences[formIndex]?.job_title} placeholder='Python Developer' id="jobtitle" onChange={(e) => handleChange('job_title',e.target.value)} />   {/*setResumeData( { ...resumeData, 'job_title2': e.target.value })*/}
        </div>
        <div className='resume-input-field'>
            <label htmlFor="company">COMPANY</label>
            <input type="text" value={resumeData.experiences[formIndex]?.company} placeholder='Prospectbd' id="company" onChange={(e) => handleChange('company',e.target.value)} /> {/* setResumeData({ ...resumeData, 'company2': e.target.value }) */}
        </div>
        <div className='resume-input-field'>
            <label htmlFor="city">CITY</label>
            <input type="text" value={resumeData.experiences[formIndex]?.city} placeholder='Rajshahi' id="city" onChange={(e) => handleChange('city',e.target.value)} /> {/*setResumeData({ ...resumeData, 'city2': e.target.value }) */}
        </div>
        <div className='resume-input-field'>
            <label htmlFor="country">COUNTRY</label>
            <input type="text" value={resumeData.experiences[formIndex]?.country} placeholder='Bangladesh' id="country" onChange={(e) => handleChange('country',e.target.value)} /> {/* setResumeData({ ...resumeData, 'country2': e.target.value })*/}
        </div>
        <div className='resume-input-field'>
            <label htmlFor="starting">START DATE</label>
            <input type="date" value={resumeData.experiences[formIndex]?.country} placeholder='05-18-2023' id="starting" onChange={(e) => handleChange('job_starting_year',e.target.value)} /> {/* setResumeData({ ...resumeData, 'job_starting_year2': e.target.value })*/}
        </div>
        <div className='resume-input-field'>
            <label htmlFor="end">END DATE</label>
            <input type="date" value={resumeData.experiences[formIndex]?.education_graduation_year2} placeholder='Present' id="end" onChange={(e) => handleChange('job_ending_year',e.target.value)} /> {/* setResumeData({ ...resumeData, 'job_ending_year2': e.target.value })*/}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }}>
                <input type="checkbox" value={resumeData.experiences[formIndex]?.education_graduation_year2} id="currently_here" onClick={(e) => handleChange('job_ending_year',e.target.value) } /> {/*setResumeData({ ...resumeData, 'job_ending_year2': 'Present' }) */}
                <label style={{ fontSize: '13px' }} htmlFor="currently_here">I currently study here</label>
            </div>
        </div>

    </div>
    <div className='heading-textarea'>
        <label htmlFor="achivements">JOB DESCRIPTION</label>
        <textarea name="" id="achivements" cols="30" rows="10" value={resumeData.experiences[formIndex]?.education_achivements2} placeholder='Write your job description' onChange={(e) => handleChange('job_description', e.target.value) }></textarea> {/* setResumeData({ ...resumeData, 'job_description2': e.target.value })*/}
    </div>
</form>
  )
}

export default EperienceFiels