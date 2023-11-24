import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './UserProfile.css';
import { FaHouseUser } from 'react-icons/fa';
import { HiBriefcase, HiOutlineAcademicCap, HiOutlineCode, HiOutlineCog, HiOutlineUser, HiOutlineUserCircle } from 'react-icons/hi';

const UserProfile = () => {
    const [sidebarItemClick, setSidebarItemClick] = useState('/userprofile/aboutme');
    const [activeSidebarItem, setActiveSideItem] = useState('About Me')
    return (
        <div className='user-profile'>
            <div className="user-profile-content">
                <div className="user-profile-sidebar-menu">
                    <div className="userprofile-sidebar-sticky">
                        <h2>My Information</h2>
                        <ul>
                            <li onClick={() => setActiveSideItem('About Me')} className={`${activeSidebarItem == 'About Me' ? 'active-sidebar-item' : ''}`}>
                                <HiOutlineUser></HiOutlineUser>
                                <Link to={sidebarItemClick} onMouseOver={() => setSidebarItemClick('/userprofile/aboutme')} >About Me</Link>
                            </li>
                            <li onClick={() => setActiveSideItem('Qualifications')} className={`${activeSidebarItem == 'Qualifications' ? 'active-sidebar-item' : ''}`}>
                                <HiOutlineAcademicCap></HiOutlineAcademicCap>
                                <Link to={sidebarItemClick} onMouseOver={() => setSidebarItemClick('/userprofile/qualifications')}>Qualifications</Link>
                            </li>
                            <li onClick={() => setActiveSideItem('Job Preferences')} className={`${activeSidebarItem == 'Job Preferences' ? 'active-sidebar-item' : ''}`}>
                                <HiBriefcase></HiBriefcase>
                                <Link to={sidebarItemClick} onMouseOver={() => setSidebarItemClick('/userprofile/jobpreferences')}>Job Preferences</Link>
                            </li>
                            <li onClick={() => setActiveSideItem('Account Setting')} className={`${activeSidebarItem == 'Account Setting' ? 'active-sidebar-item' : ''}`}>
                                <HiOutlineCog></HiOutlineCog>
                                <Link to={sidebarItemClick} onMouseOver={() => setSidebarItemClick('/userprofile/accountsetting')}>Account Setting</Link>
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

export default UserProfile;
