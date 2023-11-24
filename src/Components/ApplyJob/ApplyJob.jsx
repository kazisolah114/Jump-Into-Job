import React from 'react';
import './ApplyJob.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { HiDocument, HiOutlineUpload } from "react-icons/hi";

const ApplyJob = () => {
  const { id } = useParams();
  const jobsData = useLoaderData();
  const [applyJobData, setApplyJobData] = useState([]);
  const [coverLetterOption, setCoverLetterOption] = useState('text')
  useEffect(() => {
    if (jobsData.length > 0) {
      const sortedJob = jobsData.find(job => job.id == id);
      setApplyJobData(sortedJob)
    }
  }, [])

  const handleCoverLetter = (e) => {
    setCoverLetterOption(e);
  }
  console.log(coverLetterOption)
  return (
    <div className='job-application-form'>
      <div className="job-application-form-content container">
        <div className="job-application-header">
          <div>
            <img src={applyJobData.image} alt="" />
          </div>
          <div>
            <h5>{applyJobData.job_title}</h5>
            <p>{applyJobData.address}</p>
          </div>
        </div>
        <div className="job-application-main">
          <form action="">
            <div className="step-applicant-account-info">
              <h4>Add your contact information</h4>
              <div className='application-input'>
                <label htmlFor="first_name">First Name</label>
                <input type="text" placeholder='First Name' id="first_name" />
              </div>
              <div className='application-input'>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" placeholder='Last Name' id="last_name" />
              </div>
              <div className='application-input'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' id="email" />
              </div>
              <div className='application-input'>
                <label htmlFor="citystate">City, State <span>(optional)</span></label>
                <input type="text" placeholder='City and State' id="citystate" />
              </div>
              <div className='application-input'>
                <label htmlFor="country">Country <span>(optional)</span></label>
                <select name="" id="country">
                  <option value="select">Select</option>
                  <option value="select">Australia</option>
                  <option value="select">Argentina</option>
                  <option value="select">Afghanistan</option>
                  <option value="select">Bangladesh</option>
                  <option value="select">Bhutan</option>
                </select>
              </div>
              <div className='phone'>
                <label htmlFor="phone">Phone</label>
                <PhoneInput className="phone-input"
                  country={'us'}
                  // value={phone}
                  // onChange={handlePhone}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    placeholder: 'Enter your phone number with country code',
                  }}
                />
              </div>
            </div>
            <div className="step-applicant-resume-info">
              <h4>Upload your resume and cover letter</h4>
              <div className="upload-resume">
                {/* <p>Upload resume for employer</p> */}
                <div>
                  <input type="file" />
                  <HiDocument className='document' />
                  <HiOutlineUpload className='upload' />
                  <p>Use files like pdf, doc, docx, rtf or text</p>
                  <button>Upload Resume</button>
                </div>
              </div>

              <div className="upload-coverletter upload-resume">
                <div className='cover-letter-options'>
                  <div className="cover-letter-radio">
                    <input type="radio" id="text-letter" name="text" defaultChecked onClick={() => handleCoverLetter('text')} />
                    <label htmlFor="text-letter">Text</label>
                  </div>
                  <div className="cover-letter-radio">
                    <input type="radio" id="upload-letter" name="text" onClick={() => handleCoverLetter('upload')} />
                    <label htmlFor="upload-letter" >Upload</label>
                  </div>
                </div>
                {coverLetterOption !== 'text' ?
                  <div>
                    <input type="file" />
                    <HiDocument className='document' />
                    <HiOutlineUpload className='upload' />
                    <p>Use files like pdf, doc, docx, rtf or text</p>
                    <button>Upload Cover Letter</button>
                  </div>
                  :
                  <textarea name="" id="" cols="30" rows="10" placeholder='Type coverletter'></textarea>
                }
              </div>

            </div>
            <div className='available-joining'>
            <input type="checkbox" id="available" />
            <label htmlFor="available">I'm available to join immediately</label>
            </div>
            <button className='apply-job-button' type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;