"use client"

import React from "react";
import JobDetailsResponsive from "@/Components/JobDetailsResponsive/JobDetailsResponsive";
import { useUserContext } from "@/UserContext/UserContext";
import { useParams } from "next/navigation";




function page() {
  const {jobs} = useUserContext();
  const param = useParams();


  
  return <JobDetailsResponsive props={{ jobs: jobs, id : param.id}} />;

}

export default page;
