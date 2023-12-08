"use client"
import React, { useState,useContext,useEffect } from 'react';
import  Link  from 'next/link';
import { FaAngleDown, FaUserAlt, FaUserCircle, FaUserPlus, FaUserTie } from "react-icons/fa";
import { HiBookmark, HiBriefcase, HiChevronDown, HiCog, HiOutlineBookmark, HiOutlineUser, HiOutlineUserAdd, HiQuestionMarkCircle } from "react-icons/hi";
import { TbBell, TbBriefcase, TbLogout, TbUserCircle } from 'react-icons/tb';
import { UserContext } from '@/UserContext/UserContext';
import { usePathname } from 'next/navigation';



const ForEmployersHeader = () => {
    const [isClient,setClient] = useState(false)
    const activeMenu = usePathname();
    const { userData, setUserData } = useContext(UserContext);
    const [userLoggedout, setUserLoggedout] = useState(false)
    const [userProfileClicked, setUserProfileClicked] = useState(false)
    useEffect(() => {
      setClient(true)
    }, [])
    

    const handleLogout = async (e) => {
        localStorage.removeItem('userData')
        const token = userData?.data?.access_token;
        if (!token) {
            console.error("User token not available.");
            return;
        }
        try {
            const userLogoutResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const userLogoutData = await userLogoutResponse.json();
            console.log(userLogoutData)
            alert("Logout Successfull!")
            setUserLoggedout(userLogoutData)
            setUserData(null)
        }
        catch (error) {
            console.error("Logout failed:", error);
            alert(error)
        }
    }

    return (
        isClient&&
        <div className='main-header'>
            <div className="web-header container">
                <div className="header-logo employer-header-logo">
                    <img className='jump-job-logo' src="https://i.ibb.co/RNtVFY1/blue-full.jpg" alt="" />
                    <p>For Employers</p>
                </div>
                <div className="header-menu">
                    <ul className="main-menu">
                        <li><Link href="/foremployers" className={activeMenu === '/foremployers' ? 'active' : ''}>Home</Link></li>
                        <li><Link href="/foremployers/postjobs"  className={activeMenu === '/foremployers/postjobs' ? 'active' : ''}>Post Jobs </Link></li>
                        <li><Link href="/candidates"  className={activeMenu === '/candidates' ? 'active' : ''}>Candidates</Link></li>
                        <li><Link href={""}>Message</Link></li>
                        <li><Link href="/">For Workers</Link></li>
                    </ul>
                    <ul className="account-menu">
                        {
                            userData?.data ?
                                <div className="loggedin-user-container">
                                    <>
                                        <TbBell/>
                                        <TbUserCircle onClick={() => setUserProfileClicked(!userProfileClicked)} className={userProfileClicked ? 'user-profile-active' : ''}></TbUserCircle>
                                        {userProfileClicked &&
                                            <div className="user-profile-icon">
                                                <div className="user-profile-icon-header">
                                                    <h4>Welcome {userData?.data?.user.first_name} {userData?.data?.user.last_name} !</h4>
                                                    <p>{userData?.data?.user.email}</p>
                                                </div>
                                                <div className="loggedin-user-options">
                                                    <Link href="employerprofile" onClick={() => setUserProfileClicked(false)}><FaUserTie></FaUserTie>Company Profile</Link>
                                                    <Link href="managejobs/dashboard" onClick={() => setUserProfileClicked(false)}><HiBriefcase></HiBriefcase>Manage Jobs</Link>
                                                    <a onClick={() => setUserProfileClicked(false)} style={{"cursor" : "pointer"}} ><HiBriefcase></HiBriefcase>Subscriptions</a>
                                                    <a onClick={() => setUserProfileClicked(false)} style={{"cursor" : "pointer"}}><HiCog></HiCog> Settings</a>
                                                    <a onClick={() => setUserProfileClicked(false)} style={{"cursor" : "pointer"}}><HiQuestionMarkCircle></HiQuestionMarkCircle> Help Center</a>
                                                </div>
                                                <button className='signout-btn' onClick={handleLogout}>Sign Out <TbLogout></TbLogout></button>
                                            </div>
                                        }
                                    </>
                                </div>
                                :
                                userLoggedout?.result ?
                                    <>
                                        <li><Link href="/foremployers/register" className='register-btn'><HiOutlineUserAdd />Register</Link></li>
                                        <li><Link href="/foremployers/signin" className='login-btn'><HiOutlineUser />Sign In</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link href="/foremployers/register" className='register-btn'><HiOutlineUserAdd />Register</Link></li>
                                        <li><Link href="/foremployers/signin" className='login-btn'><HiOutlineUser />Sign In</Link></li>
                                    </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ForEmployersHeader;