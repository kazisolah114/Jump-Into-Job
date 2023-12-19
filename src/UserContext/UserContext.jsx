"use client"
import { useThrottle } from '@uidotdev/usehooks';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const isClient = typeof window !=='undefined'
    const storedUserData =isClient? localStorage.getItem('userData') : null;
    const initialUserData = storedUserData ? JSON.parse(storedUserData) : null;

    const [userData, setUserData] = useState(initialUserData);
    const [clickedFeaturedJob, setClickedFeaturedJob] = useState(null);

    const [bearerToken, setBearerToken] = useState(null);

    useEffect(() => {
        if (userData === null) {
            
            localStorage.removeItem('userData');

        } else {
            localStorage.setItem('userData', JSON.stringify(userData));

            // console.log(userData);
        }
    }, [userData]);

    // For Resume
    const [currentStep, setCurrentStep] = useState(1);
    const [resumeData, setResumeData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        title: "",
        linkedinurl: "",
        portfoliourl: "",
        city: "",
        state: "",
        country: "",
        summary: "",
        educations: [  {
                nstitution_name: "",
                institution_location:"",
                degree: "",
                field_study: "",
                education_starting_year: "",
                education_graduation_year:"",
                education_achivements:"",
            },
        ],
        experiences: [
            {
                job_title: "",
                company: "",
                job_city: "",
                job_country: "",
                job_starting_year: "",
                job_ending_year: "",
                job_description: "",
            },

        ],
        skills: [],
        languages: []
    });
    const handleSubmitResume = () => {
        useEffect(() => {
            localStorage.setItem('userResume', JSON.stringify(resumeData))
        }, [resumeData])
    }

    return (
        <UserContext.Provider value={{ userData, setUserData, clickedFeaturedJob, setClickedFeaturedJob, currentStep, setCurrentStep, resumeData, setResumeData, handleSubmitResume }}>
            {children}
        </UserContext.Provider>
    );
};
