import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaUserAlt, FaUserCircle, FaUserPlus, FaUserTie } from "react-icons/fa";
import { HiBookmark, HiBriefcase, HiChevronDown, HiCog, HiOutlineBookmark, HiOutlineUser, HiOutlineUserAdd, HiQuestionMarkCircle } from "react-icons/hi";
import { TbBell, TbBriefcase, TbLogout, TbUserCircle } from 'react-icons/tb';
import { useUserContext } from '../../../../UserContext/UserContext';

const ForEmployersHeader = () => {
    const [activeMenu, setActiveMenu] = useState('home');
    const { userData, setUserData } = useUserContext();
    const [userLoggedout, setUserLoggedout] = useState(false)
    const [userProfileClicked, setUserProfileClicked] = useState(false)
    const handleActiveMenu = (e) => {
        setActiveMenu(e);
    }
    const handleLogout = async (e) => {
        localStorage.removeItem('userData')
        const token = userData?.data?.access_token;
        if (!token) {
            console.error("User token not available.");
            return;
        }
        try {
            const userLogoutResponse = await fetch('https://unitechholdingsltd.com/api/v1/logout', {
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
    // console.log(userData?.data?.user)
    return (
        <div className='main-header'>
            <div className="web-header container">
                <div className="header-logo">
                    <h2>JobHubGlobal</h2>
                    <p>For Employers</p>
                </div>
                <div className="header-menu">
                    <ul className="main-menu">
                        <li><Link to="/foremployers" onClick={() => handleActiveMenu('home')} className={activeMenu === 'home' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/foremployers/postjobs" onClick={() => handleActiveMenu('jobs')} className={activeMenu === 'postjobs' ? 'active' : ''}>Post Jobs </Link></li>
                        <li><Link to="/candidates" onClick={() => handleActiveMenu('candidates')} className={activeMenu === 'candidates' ? 'active' : ''}>Candidates</Link></li>
                        <li><Link to="/whyus" onClick={() => handleActiveMenu('whyus')} className={activeMenu === 'whyus' ? 'active' : ''}>Why Us <HiChevronDown></HiChevronDown></Link>
                            <ul className='dropdown-menu'>
                                <li><Link>Dropdown Menu</Link></li>
                                <li><Link>Dropdown Menu</Link></li>
                                <li><Link>Dropdown Menu</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/">For Workers</Link></li>
                    </ul>
                    <ul className="account-menu">
                        {
                            userData?.data ?
                                <div className="loggedin-user-container">
                                    <>
                                        <TbBell></TbBell>
                                        <TbUserCircle onClick={() => setUserProfileClicked(!userProfileClicked)} className={userProfileClicked ? 'user-profile-active' : ''}></TbUserCircle>
                                        {userProfileClicked &&
                                            <div className="user-profile-icon">
                                                <div className="user-profile-icon-header">
                                                <h4>Welcome {userData?.data?.user.first_name} !</h4>
                                                <p>{userData?.data?.user.email}</p>
                                                </div>
                                                <div className="loggedin-user-options">
                                                    <Link><FaUserTie></FaUserTie> Profile</Link>
                                                    <Link><HiBookmark></HiBookmark> Saved Jobs</Link>
                                                    <Link><HiBriefcase></HiBriefcase> Applied Jobs</Link>
                                                    <Link><HiCog></HiCog> Settings</Link>
                                                    <Link><HiQuestionMarkCircle></HiQuestionMarkCircle> Help Center</Link>
                                                </div>
                                                <button className='signout-btn' onClick={handleLogout}>Sign Out <TbLogout></TbLogout></button>
                                            </div>
                                        }
                                    </>

                                    {/* <button className='signout-btn' onClick={handleLogout}>Sign Out</button> */}
                                </div>
                                :
                                userLoggedout?.result ?
                                    <>
                                        <li><Link to="/foremployers/register" className='register-btn'><HiOutlineUserAdd />Register</Link></li>
                                        <li><Link to="/foremployers/signin" className='login-btn'><HiOutlineUser />Sign In</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to="/foremployers/register" className='register-btn'><HiOutlineUserAdd />Register</Link></li>
                                        <li><Link to="/foremployers/signin" className='login-btn'><HiOutlineUser />Sign In</Link></li>
                                    </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ForEmployersHeader;