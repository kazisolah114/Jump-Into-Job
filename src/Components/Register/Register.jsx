"use client"
import React, { useState } from 'react';
import './Register.css'
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail, HiOutlineUserCircle } from 'react-icons/hi';
import { FcGoogle } from "react-icons/fc";
import  Link  from 'next/link';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    // Register User:
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('Job Seeker');


    const handleRegistration = async (e) => {
        e.target.reset()
        e.preventDefault();
        const userData = {'first_name' : firstName, 'last_name' : lastName , 'email' :  email, 'password' : password, 'password_confirmation' : confirmPassword, 'user_type' :  userType };

        // console.log(userData)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/job-seeker/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();
        if (response.ok) {
            // Handle successful registration, e.g., show a success message
            console.log('Success Registration!', data)
            alert("Registration Successfull! Please Verify Your Email")
        } else {
            // Handle registration error, e.g., display an error message
            console.log('Something is wrong!', data)
            alert(data.message)
        }
    };


return (
    <div className='register-user'>
        <div className="register-user-header">
            <h2>Register Account</h2>
            <span>.</span>
        </div>
        <div className="account-form account-form-register">
            <form action="" onSubmit={handleRegistration}>
                <div className='account-info account-info-register'>
                    <label htmlFor="first_name">First Name</label>
                    <div className="account-input  account-input-register">
                        <HiOutlineUserCircle></HiOutlineUserCircle>
                        <input type="text" placeholder='David' name="first_name" id="first_name" required value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                </div>
                {<div className='account-info account-info-register'>
                        <label htmlFor="last_name">Last Name</label>
                        <div className="account-input account-input-register">
                            <HiOutlineUserCircle></HiOutlineUserCircle>
                            <input type="text" placeholder='Warner' name="last_name" id="last_name" required value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                    </div>}
                {<div className='account-info account-info-register'>
                        <label htmlFor="user_name">User Type</label>
                        <div className="account-input account-input-register">
                            <HiOutlineUserCircle></HiOutlineUserCircle>
                            <input type="text" placeholder='davidwarner' name="user_name" id="user_name" required value={userType} readOnly />
                        </div>
                    </div>}
                <div className='account-info account-info-register'>
                    <label htmlFor="email">Email</label>
                    <div className="account-input account-input-register">
                        <HiOutlineMail></HiOutlineMail>
                        <input type="text" placeholder='warner22@info.com' name="email_or_phone" id="email" required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className='account-info account-info-register'>
                    <label htmlFor="password">Password</label>
                    <div className="account-input account-input-register account-password">
                        {showPassword
                            ?
                            <input type="text" placeholder='Password' name="password" id="password" required value={password} onChange={e => setPassword(e.target.value)} />
                            :
                            <input type="password" placeholder='Password' name="password" id="password" required value={password} onChange={e => setPassword(e.target.value)} />
                        }
                        <div onClick={() => setShowPassword(!showPassword)}>
                            {showPassword
                                ?
                                <HiOutlineEye></HiOutlineEye>
                                :
                                <HiOutlineEyeOff></HiOutlineEyeOff>
                            }
                        </div>
                    </div>
                </div>
                {<div className='account-info account-info-register'>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <div className="account-input account-input-register account-password">
                        { showPassword
                              ?
                              <input type="text" placeholder='Confirm Password' name="confirm_password" id="confirm_password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                              :
                              <input type="password" placeholder='Confirm Password' name="confirm_password" id="confirm_password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            }
                            <div onClick={() => setShowPassword(!showPassword)}>
                                { showPassword
                                    ?
                                    <HiOutlineEye></HiOutlineEye>
                                    :
                                    <HiOutlineEyeOff></HiOutlineEyeOff>
                                }
                            </div>
                        </div>
                    </div>}
                <div className="terms-conditions">
                    <p>By creating an account or logging in, you understand and agree to Job Portal's <Link href="/terms">Terms</Link>. You also acknowledge our <Link href="/cookie">Cookie</Link> and <Link href="/privacy">Privacy</Link> policies.</p>
                    <div>
                        <input type="checkbox" id="termscheck" required />
                        <label htmlFor="termscheck">I will agree company terms & conditions.</label>
                    </div>
                </div>
                <div className="register-button">
                    {/* <button onClick={handleRegistration}><Link>Sign Up</Link></button> */}
                    <input type="submit" value="Sign Up" />
                </div>

                <div className="register-to-login">
                    <p>Already have an account? <Link href="/signin">Login</Link> Here</p>
                    <span>OR</span>
                </div>
            </form>
            <div className="social-login">
                <button><FcGoogle></FcGoogle> Login With Google</button>
                <button> <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-3-logo-svg-vector.svg" alt="" /> Login With Facebook</button>
            </div>
        </div>
    </div>
    );
};

export default Register;