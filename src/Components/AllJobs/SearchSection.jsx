"use client"
import { HiOutlineBriefcase,HiOutlineLocationMarker } from 'react-icons/hi'
import React from 'react'

function SearchSection({handleFilteredJobs}) {
  return (
    <div className="all-jobs-search-section container">
    <div className="search-content">
        <form action="" onSubmit={handleFilteredJobs}>
            <div>
                <HiOutlineBriefcase/>
                <input type="text" name="jobTitle" placeholder='Job title or keywords' />
            </div>
            <div>
                <HiOutlineLocationMarker/>
                <input type="text" name='jobLocation' placeholder='Location' />
            </div>
            <input type="submit" value="Search" />
        </form>
    </div>
</div>
  )
}

export default SearchSection