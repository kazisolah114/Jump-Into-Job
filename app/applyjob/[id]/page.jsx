"use client"
import ApplyJob from '@/Components/ApplyJob/ApplyJob'
import { useUserContext } from '@/UserContext/UserContext'
import React from 'react'

function page() {
    const {jobs} = useUserContext();
  return (
    < ApplyJob jobs={jobs}/>
  )
}

export default page