import ForEmployersMain from '@/EmployersComponents/ForEmployersMain/ForEmployersMain'
import React from 'react'

function layout({children}) {
  return (
    <ForEmployersMain>
        {children}
   </ForEmployersMain>
  )
}

export default layout