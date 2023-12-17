"use client"
import React from 'react'
import '@/App.css'
import './globals.css'
import './responsive.css'
import '@/Home/WhyUs/WhyUs.css'
import '@/Components/AllJobs/AllJobs.css'
import '@/Components/Companies/Companies.css'
import '@/Layout/Footer/Footer.css'
import '@/Layout/Header/Header.css'
import "@/Components/Login/Login.css"
import '@/Components/Register/Register.css'
import "@/Home/UserHome/UserHome.css"
import "@/Components/UserProfile/UserProfile.css"
import "@/Components/JobDetails/JobDetails.css"
import "@/Components/JobCategory/JobCategory.css"
import "@/Components/UserMyJobs/UserMyJobs.css"
import '@/EmployersComponents/ForEmployersHome/ForEmployersJobBanner/ForEmployersJobBanner.css'
import '@/EmployersComponents/ForEmployersHome/ForEmployersBanner/ForEmployersBanner.css'
import '@/EmployersComponents/ForEmployersHome/ForEmployersLiveData/ForEmployersLiveData.css'
import '@/EmployersComponents/ForEmployersPostJob/ForEmployersPostJob.css'
import '@/EmployersComponents/ManageJobs/ManageJobs.css'
import '@/ResumeBuilder/ResumeComponents/ResumeEducation/PreviewEducation.css'
import '@/ResumeBuilder/ResumeComponents/ResumeFinalize/ResumeFinalize.css'
import '@/ResumeBuilder/ResumeComponents/ResumeHeading/ResumeHeading.css'
import '@/ResumeBuilder/ResumeComponents/ResumeSkills/AddSkills.css'
import '@/ResumeBuilder/ResumeComponents/ResumeSteps/ResumeSteps.css'
import '@/ResumeBuilder/ResumeComponents/ResumeTemplates/ResumeTemplatesCSS.css'
import { UserProvider } from "@/UserContext/UserContext"
import JobContext from '@/jobContext/JobContext'

function layout({children}) {

  // alert("main layout")
  return (
    <html lang="en">
      <body className='fou'>
      <UserProvider>
      <JobContext>
        {children}
      </JobContext>
      </UserProvider>
        </body>
    </html>
  )
}

export default layout