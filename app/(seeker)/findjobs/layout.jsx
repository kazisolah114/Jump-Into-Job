"use client"
import React from 'react';
import AllJobs from '@/Components/AllJobs/AllJobs';

// export const metadata = {
//   title: 'This is findjobs',
//   description: '...',
// }

function RootLayout({ children }) {


  return (<>
    <AllJobs>
        {children}
    </AllJobs>
  </>
  );
}

export default RootLayout;
