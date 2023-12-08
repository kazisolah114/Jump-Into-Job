import React from 'react';
import { useState } from 'react';
import { FaCheckCircle, FaHistory, FaRegCheckCircle } from 'react-icons/fa';
import { HiOutlineBriefcase, HiOutlineCheckCircle, HiOutlineHome, HiOutlinePhoneIncoming } from 'react-icons/hi';
import  Link  from 'next/link';

const ManageJobs = () => {
    const [sidebarItemClick, setSidebarItemClick] = useState('/managejobs/dashboard');
    const [activeSidebarItem, setActiveSideItem] = useState('Dashboard')
    return (
        <div className='user-profile'>
            <div className="user-profile-content">
                <div className="user-profile-sidebar-menu">
                    <div className="userprofile-sidebar-sticky">
                        <h2>Manage Jobs</h2>
                        <ul>
                            <li onClick={() => setActiveSideItem('Dashboard')} className={`${activeSidebarItem == 'Dashboard' ? 'active-sidebar-item' : ''}`}>
                            <HiOutlineHome></HiOutlineHome>
                                <Link href={sidebarItemClick} onMouseOver={() => setSidebarItemClick('../managejobs/dashboard')} >Dashboard</Link>
                            </li>
                            <li onClick={() => setActiveSideItem('Active Jobs')} className={`${activeSidebarItem == 'Active Jobs' ? 'active-sidebar-item' : ''}`}>
                            <HiOutlineBriefcase></HiOutlineBriefcase>
                                <Link href={sidebarItemClick} onMouseOver={() => setSidebarItemClick('../managejobs/activejobs')}>Active Jobs</Link>
                            </li>
                            <li onClick={() => setActiveSideItem('Jobs History')} className={`${activeSidebarItem == 'Jobs History' ? 'active-sidebar-item' : ''}`}>
                            {/* <FaHistory /> */}
                            <HiOutlineBriefcase></HiOutlineBriefcase>
                                <Link href={sidebarItemClick} onMouseOver={() => setSidebarItemClick('../managejobs/jobshistory')}>Job History</Link>
                            </li>
                            <li onClick={() => setActiveSideItem('Shortlisted')} className={`${activeSidebarItem == 'Shortlisted' ? 'active-sidebar-item' : ''}`}>
                            <FaRegCheckCircle />
                            {/* <HiOutlineCheckCircle /> */}
                                <Link href={sidebarItemClick} onMouseOver={() => setSidebarItemClick('../managejobs/shortlisted')}>Shortlisted</Link>
                            </li>
                            <li onClick={() => setActiveSideItem('Interview')} className={`${activeSidebarItem == 'Interview' ? 'active-sidebar-item' : ''}`}>
                            <HiOutlinePhoneIncoming></HiOutlinePhoneIncoming>
                                <Link href={sidebarItemClick} onMouseOver={() => setSidebarItemClick('../managejobs/interview')}>Interview</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="user-profile-details">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ManageJobs;