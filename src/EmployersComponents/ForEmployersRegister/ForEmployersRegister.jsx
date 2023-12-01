import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail, HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './ForEmployersRegister.css'

const ForEmployersRegister = () => {
    const [showPassword, setShowPassword] = useState(false)
    // Register User:
    const [companyName, setCompanyName] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('Employer');


    const handleRegistration = async (e) => {
        e.target.reset()
        e.preventDefault();
        const userData = { 'company_name': companyName, 'company_type': companyType, 'email': email, 'password': password, 'password_confirmation': confirmPassword, 'user_type': userType };

        // console.log(userData)
        const response = await fetch('https://api.jumpintojob.com/api/v1/auth/employer/signup', {
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
        <div>
            <div className='register-user'>
                <div className="register-user-header">
                    <h2>Register Account</h2>
                    <span>.</span>
                </div>
                <div className="account-form account-form-register">
                    <form action="" onSubmit={handleRegistration}>
                        <div className='account-info'>
                            <label htmlFor="company_name">Company Name</label>
                            <div className="account-input  account-input-register">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                <input type="text" placeholder='Mircosoft Corp.' name="company_name" id="company_name" required value={companyName} onChange={e => setCompanyName(e.target.value)} />
                            </div>
                        </div>
                        {<div className='account-info account-info-register'>
                            <label htmlFor="company_type">Company Type</label>
                            <div className="account-input  account-input-register">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                {/* <input type="text" placeholder='Warner' name="last_name" id="last_name" required value={lastName} onChange={e => setLastName(e.target.value)} /> */}
                                <select name="company_type" id="company_type" required value={companyType} onChange={e => setCompanyType(e.target.value)}>
                                    <option value="">Select Type</option>
                                    <option value="Technology and IT">Technology and IT</option>
                                    <option value="Retail and Consumer Goods">Retail and Consumer Goods</option>
                                    <option value="Finance and Banking">Finance and Banking</option>
                                    <option value="Healthcare and Pharmaceuticals">Healthcare and Pharmaceuticals</option>
                                    <option value="Manufacturing and Industrial">Manufacturing and Industrial</option>
                                    <option value="Energy and Utilities">Energy and Utilities</option>
                                    <option value="Media and Entertainment">Media and Entertainment</option>
                                    <option value="Real Estate and Property">Real Estate and Property</option>
                                    <option value="Travel and Hospitality">Travel and Hospitality</option>
                                    <option value="Automotive">Automotive</option>
                                    <option value="Education and E-learning">Education and E-learning</option>
                                    <option value="Agriculture and Food Production">Agriculture and Food Production</option>
                                    <option value="Construction and Engineering">Construction and Engineering</option>
                                    <option value="Transportation and Logistics">Transportation and Logistics</option>
                                    <option value="Telecommunications">Telecommunications</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>}
                        {<div className='account-info'>
                            <label htmlFor="user_type">User Type</label>
                            <div className="account-input  account-input-register">
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                                <input type="text" name="user_type" id="user_type" required value={userType} readOnly />
                            </div>
                        </div>}
                        <div className='account-info'>
                            <label htmlFor="email">Email</label>
                            <div className="account-input  account-input-register">
                                <HiOutlineMail></HiOutlineMail>
                                <input type="email" placeholder='microsoft@info.com' name="email" id="email" required value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className='account-info'>
                            <label htmlFor="password">Password</label>
                            <div className="account-input  account-input-register account-password">
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
                        {<div className='account-info'>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <div className="account-input  account-input-register account-password">
                                {showPassword
                                    ?
                                    <input type="text" placeholder='Confirm Password' name="confirm_password" id="confirm_password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                    :
                                    <input type="password" placeholder='Confirm Password' name="confirm_password" id="confirm_password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
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
                        </div>}
                        <div className="terms-conditions">
                            <p>By creating an account or logging in, you understand and agree to Job Portal's <Link to="/terms">Terms</Link>. You also acknowledge our <Link to="/cookie">Cookie</Link> and <Link to="/privacy">Privacy</Link> policies.</p>
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
                            <p>Already have an account? <Link to="/signin">Login</Link> Here</p>
                            <span>OR</span>
                        </div>
                    </form>
                    <div className="social-login">
                        <button><FcGoogle></FcGoogle> Login With Google</button>
                        <button> <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-3-logo-svg-vector.svg" alt="" /> Login With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForEmployersRegister;