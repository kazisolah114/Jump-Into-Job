'use client';
import React from 'react';
import JobDetails from '@/Components/JobDetails/JobDetails';

import { useParams } from 'next/navigation';
import { useContext } from 'react';
import { useJobContext } from '@/jobContext/JobContext';




function Page() {


    const {allJobs} = useJobContext();
    // console.log(allJobs)


  return (<JobDetails props={{  jobs : allJobs}} />);
}

export default Page;
