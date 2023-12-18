import React from 'react'
import ImageUpload from './ImageUpload';

function HeadingFields({props}) {
    const {resumeData, setResumeData,templateType}=props;
  return (
    <div className={`resume-heading-content ${templateType == 'cv' ? 'resume-heading-content-yesimg' : 'resume-heading-content-noimg'}`}>
                    {templateType == 'cv'
                        &&
                        <div className="image-upload">
                            <ImageUpload />
                        </div>
                    }
                    <form action="" className="heading-form">
                        <div className="heading-form-main">
                            <div className='resume-input-field'>
                                <label htmlFor="firstname">FIRST NAME</label>
                                <input type="text" placeholder='David' id="firstname" onChange={(e) => setResumeData({ ...resumeData, 'firstName': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="lastname">LAST NAME</label>
                                <input type="text" placeholder='Warner' id="lastname" onChange={(e) => setResumeData({ ...resumeData, 'lastName': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="email">EMAIL</label>
                                <input type="text" placeholder='Your email' id="email" onChange={(e) => setResumeData({ ...resumeData, 'email': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="phone">PHONE</label>
                                <input type="text" placeholder='Your phone' id="phone" onChange={(e) => setResumeData({ ...resumeData, 'phone': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="linkedin">LINKEDIN</label>
                                <input type="text" placeholder='Linkedin link' id="linkedin" onChange={(e) => setResumeData({ ...resumeData, 'linkedinurl': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="portfolio">PORTFOLIO</label>
                                <input type="text" placeholder='Portfolio link' id="portfolio" onChange={(e) => setResumeData({ ...resumeData, 'portfoliourl': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="city">CITY</label>
                                <input type="text" placeholder='Portland' id="city" onChange={(e) => setResumeData({ ...resumeData, 'city': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="state">STATE OR DISTRICT</label>
                                <input type="text" placeholder='Oregon' id="state" onChange={(e) => setResumeData({ ...resumeData, 'state': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="country">COUNTRY</label>
                                <input type="text" placeholder='United States' id="country" onChange={(e) => setResumeData({ ...resumeData, 'country': e.target.value })} />
                            </div>
                            <div className='resume-input-field'>
                                <label htmlFor="title">TITLE</label>
                                <input type="text" placeholder='DevOps engineer' id="title" onChange={(e) => setResumeData({ ...resumeData, 'title': e.target.value })} />
                            </div>
                        </div>
                        <div className='heading-textarea'>
                            <label htmlFor="summary">SUMMARY</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Write your career summary' onChange={(e) => setResumeData({ ...resumeData, 'summary': e.target.value })}></textarea>
                        </div>
                    </form>
                </div>
  )
}

export default HeadingFields