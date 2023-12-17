import React from 'react';
import './PreviewEducation.css'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const PreviewEducation = ({ resumeData, setEditEducation, editEducation, setDeleteEducation, deleteEducation }) => {

   return <>
   
   {resumeData && resumeData.educations.map((education,key)=>{


        console.log(education)



        const { institution_name, institution_location, degree, education_starting_year, education_graduation_year, field_study } = education;
        
        return (
            <div className='preview-education' key={key}>
                <div className='preview-number'>
                    <h2>1</h2>
                </div>
                <div className='preview-content'>
                    <h4>{degree} in {field_study}</h4>
                    <p>{institution_name}</p>
    
                    <div>
                        <p>{institution_location}</p>
                        <p>{education_starting_year} - {education_graduation_year}</p>
                    </div>
                </div>
                <div className='preview-actions'>
                    <button className='edit' onClick={() => setEditEducation(key)}><FaPencilAlt /></button>
                    <button className='delete' onClick={() => setDeleteEducation(key)}><FaTrashAlt /></button>
                </div>
            </div>
        );
    })}
    
</> 
};


// const len = resumeData.experiences.length;

// return <>
// {resumeData&& resumeData.experiences.map((experience,key) =>{

//     //check if the last item is in editng mode
//     if (len>1 && key==len-1){

//         return <></>
//     }

    
//     const {job_title, company, job_city, job_country, job_starting_year, job_ending_year} = experience;
//     return (
//         <div className='preview-education' key={key}>
//         <div className='preview-number'>
//             <h2>{key+1}</h2>
//         </div>
//         <div className='preview-content'>
//             <h4>{job_title}</h4>
//             <p>{company}</p>

//             <div>
//                 <p>{job_city} {job_country}</p>
//                 <p>{job_starting_year} - {job_ending_year}</p>
//             </div>
//         </div>
//         <div className='preview-actions'>
//             <button className='edit' onClick={() => setEditExperience(!editExperience)}><FaPencilAlt /></button>
//             <button className='delete' onClick={() => setDeleteExperience(!deleteExperience)}><FaTrashAlt /></button>
//         </div>
//     </div>
// );
// }
// )}</>
// };


export default PreviewEducation;