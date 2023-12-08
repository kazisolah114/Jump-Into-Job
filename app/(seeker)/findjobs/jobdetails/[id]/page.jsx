'use client';
import React from 'react';
import JobDetails from '@/Components/JobDetails/JobDetails';

import { useParams } from 'next/navigation';
import { useContext } from 'react';




function Page({params}) {

    const {jobs} = []
    console.log(jobs)

  return (<JobDetails props={{  jobs : jobs}} />);
}

export default Page;
