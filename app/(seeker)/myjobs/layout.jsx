import UserMyJobs from '@/Components/UserMyJobs/UserMyJobs'
import React from 'react'

function layout({children}) {
  return (
    <UserMyJobs>{children}</UserMyJobs>
  )
}

export default layout