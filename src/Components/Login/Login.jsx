import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail, HiOutlineUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='register-user'>
            <div className="register-user-header">
                <h2>Login Account</h2>
                <span>.</span>
            </div>
            <div className="account-form">
                <form action="">
                    <div className='account-info'>
                        <label htmlFor="email">Email</label>
                        <div className="account-input">
                            <HiOutlineMail></HiOutlineMail>
                            <input type="email" placeholder='info@example.com' name="email" id="email" required />
                        </div>
                    </div>
                    <div className='account-info'>
                        <label htmlFor="password">Password</label>
                        <div className="account-input account-password">
                            {showPassword
                                ?
                                <input type="text" placeholder='Password' name="password" id="password" required />
                                :
                                <input type="password" placeholder='Password' name="password" id="password" required />
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
                    <div className="terms-conditions rememberme-n-forget">
                        <div>
                            <input type="checkbox" id="rememberme" required />
                            <label htmlFor="rememberme">Remember me</label>
                        </div>
                        <div>
                            <Link>Forget Password?</Link>
                        </div>
                    </div>
                    <div className="register-button">
                    <input type="submit" value="Login" />
                    </div>

                    <div className="register-to-login">
                        <p>New to the website? <Link to="/register">Register</Link> Here</p>
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

export default Login;