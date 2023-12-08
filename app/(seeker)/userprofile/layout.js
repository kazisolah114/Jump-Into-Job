import React from 'react'

import UserProfile from '@/Components/UserProfile/UserProfile'
function layout({children}) {
  return (
    <UserProfile>
        {children}
    </UserProfile>
  )
}

export default layout