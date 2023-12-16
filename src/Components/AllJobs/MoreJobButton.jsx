import React from 'react'

function MoreJobButton({props}) {
    const {shouldShowButton,jobsToShowIncrement,setJobsToShow } = props;
  return (
    <div>
        {shouldShowButton ?
        <button onClick={() => setJobsToShow(previousJobs => previousJobs + jobsToShowIncrement)}>Show More</button>
        :
        <div className='jobs-reached-end-message'>
            <p>Ops!!! You have reached the end. There's no more jobs at this time. Please check back later.</p>
        </div>
    }
    </div>
  )
}

export default MoreJobButton