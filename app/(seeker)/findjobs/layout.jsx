import React from 'react';
import AllJobs from '@/Components/AllJobs/AllJobs';

export const metadata = {
  title: 'This is findjobs',
  description: '...',
}

const RootLayout =({ children }) =>{


  return (<>
    <AllJobs>
        {children}
    </AllJobs>
  </>
  );
}

export default RootLayout;
