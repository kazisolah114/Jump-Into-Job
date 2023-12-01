import React, { useState, useCallback } from 'react';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFileAlt, FaGlobe, FaUserTie } from "react-icons/fa";
import { HiBookmark, HiBriefcase, HiCog, HiMenu, HiOutlineUser, HiOutlineUserAdd, HiQuestionMarkCircle, HiX } from "react-icons/hi";
import { useUserContext } from '../../UserContext/UserContext';
import { TbBell, TbLogout, TbSend, TbUserCircle } from 'react-icons/tb';
import Swal from 'sweetalert2';


const Header = () => {
    const forEmployerNavigate = useNavigate();
    const [mobileMenuClicked, setMobileMenuClicked] = useState(false);
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(location);
    const { userData, setUserData } = useUserContext();
    const [userLoggedout, setUserLoggedout] = useState(false);
    const [userProfileClicked, setUserProfileClicked] = useState(false);
    

    const [selectedOption, setSelectedOption] = useState('Global');
    const toggleOption = () => {
        setSelectedOption(selectedOption === 'Global' ? 'Local' : 'Global');
    };
    // console.log(selectedOption)


    const toggleUserProfile = useCallback(() => {
        setUserProfileClicked((prev) => !prev);
    }, []);

    const handleActiveMenu = (e) => {
        setActiveMenu(e);
    };

    const handleLogout = async () => {
        localStorage.removeItem('userData');
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
            });
            const userLogoutData = await userLogoutResponse.json();
            setUserLoggedout(userLogoutData);
            setUserData(null);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User logout successful!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error("Logout failed:", error);
            alert(error);
        }
    };

    const handleSignoutAlert = async () => {
        if (userData) {
            const result = await Swal.fire({
                title: 'You will be logged out from your job seeker account!',
                text: "Are you sure?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            });

            if (result.isConfirmed) {
                Swal.fire(
                    'Welcome!',
                    'To post jobs, create an employer account with your business email',
                    'success'
                ).then(() => {
                    handleLogout(); // Call handleLogout only if the user confirms
                    forEmployerNavigate('/foremployers');
                });
            }
        } else {
            forEmployerNavigate('/foremployers');
        }
    };

    

    return (
        <div className='main-header'>
            <div className="web-header container">
                <div className="header-logo">
                    <img className='jump-job-logo' src="https://i.ibb.co/RNtVFY1/blue-full.jpg" alt="" />
                    {/* <p>Explore Apply Conqure</p> */}
                    <div className='mobile-menu-icon'>
                        {userData ?
                            <div className={`loggedin-user-container`}>
                                <div className='local-global'>
                                    <label className="toggle-switch">
                                        <input type="checkbox" onClick={toggleOption} />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <TbBell></TbBell>
                                {/* <TbSend></TbSend> */}
                                <TbUserCircle onClick={toggleUserProfile} className={userProfileClicked ? 'user-profile-active' : ''}></TbUserCircle>

                                <div className={`user-profile-icon ${!userProfileClicked ? 'hide-profile-menu' : 'show-profile-menu'}`}>
                                    <div className="user-profile-icon-header">
                                        <h4>Welcome {userData?.data?.user.first_name} !</h4>
                                        <p>{userData?.data?.user.email}</p>
                                    </div>
                                    <div className="loggedin-user-options">
                                        <Link to="/userprofile/aboutme" onClick={toggleUserProfile}><FaUserTie></FaUserTie> Profile</Link>
                                        <Link onClick={toggleUserProfile}><FaFileAlt></FaFileAlt> Resume Build</Link>
                                        <Link onClick={toggleUserProfile}><HiBriefcase></HiBriefcase>My Jobs</Link>
                                        <Link onClick={toggleUserProfile}><HiCog></HiCog> Settings</Link>
                                        <Link onClick={toggleUserProfile}><HiQuestionMarkCircle></HiQuestionMarkCircle> Help Center</Link>
                                    </div>
                                    <button className='signout-btn' onClick={handleLogout}>Sign Out <TbLogout></TbLogout></button>
                                </div>

                            </div>
                            :
                            <div>
                                <Link to="signin" className='mobile-login-btn'><button><HiOutlineUser /> Sign in</button></Link>
                            </div>
                        }
                        <div className='menu-close-open'>
                            {mobileMenuClicked ?
                                <HiX onClick={() => setMobileMenuClicked(!mobileMenuClicked)} />
                                :
                                <HiMenu onClick={() => {
                                    setMobileMenuClicked(!mobileMenuClicked);
                                    setUserProfileClicked(false);
                                }} />
                            }
                        </div>
                    </div>
                </div>
                <div className={`header-menu ${!mobileMenuClicked ? 'hide-header-menu' : 'show-header-menu'}`}>
                    <ul className="main-menu">
                        <li><Link to="/" onClick={() => (handleActiveMenu(activeMenu), setMobileMenuClicked(false))} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/findjobs" onClick={() => (handleActiveMenu(activeMenu), setMobileMenuClicked(false))} className={location.pathname === '/findjobs' ? 'active' : ''}>Jobs</Link></li>
                        <li><Link to="/companies" onClick={() => (handleActiveMenu(activeMenu), setMobileMenuClicked(false))} className={location.pathname === '/companies' ? 'active' : ''}>Companies</Link></li>
                        <li><Link to="/message" onClick={() => (handleActiveMenu(activeMenu), setMobileMenuClicked(false))} className={location.pathname === '/message' ? 'active' : ''}>Message</Link></li>
                        <li><Link onClick={handleSignoutAlert}>For Employers</Link></li>
                    </ul>
                    <ul className="account-menu">
                        {
                            userData?.data ?
                                <div className="loggedin-user-container">
                                    <>
                                        <div className='local-global'>
                                            <label className="toggle-switch">
                                                <input type="checkbox" onClick={toggleOption} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <TbBell></TbBell>
                                        {/* <TbSend></TbSend> */}
                                        <TbUserCircle onClick={toggleUserProfile} className={userProfileClicked ? 'user-profile-active' : ''}></TbUserCircle>

                                        {userProfileClicked ?
                                            <div className="user-profile-icon">
                                                <div className="user-profile-icon-header">
                                                    <h4>Welcome {userData?.data?.user.first_name} !</h4>
                                                    <p>{userData?.data?.user.email}</p>
                                                </div>
                                                <div className="loggedin-user-options">
                                                    <Link to="/userprofile/aboutme" onClick={toggleUserProfile}><FaUserTie></FaUserTie> Profile</Link>
                                                    <Link to="/myjobs/dashboard" onClick={toggleUserProfile}><HiBriefcase></HiBriefcase> My Jobs</Link>
                                                    <Link to="/resumebuilder" onClick={toggleUserProfile}><FaFileAlt></FaFileAlt> Resume Build</Link>
                                                    <Link onClick={toggleUserProfile}><HiCog></HiCog> Settings</Link>
                                                    <Link onClick={toggleUserProfile}><HiQuestionMarkCircle></HiQuestionMarkCircle> Help Center</Link>
                                                </div>
                                                <button className='signout-btn' onClick={handleLogout}>Sign Out <TbLogout></TbLogout></button>
                                            </div>
                                            :
                                            ''
                                        }
                                    </>
                                </div>
                                :
                                userLoggedout?.result ?
                                    <>
                                        <li><Link to="/register" className='register-btn' onClick={() => setMobileMenuClicked(false)}><HiOutlineUserAdd />Register</Link></li>
                                        <li><Link to="signin" className='login-btn' onClick={() => setMobileMenuClicked(false)}><HiOutlineUser />Sign In</Link></li> 
                                    </>
                                    :
                                    <>
                                        <li><Link to="/register" className='register-btn'><HiOutlineUserAdd />Register</Link></li>
                                        <li><Link to="signin" className='login-btn'><HiOutlineUser />Sign In</Link></li>
                                    </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
