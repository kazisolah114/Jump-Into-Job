import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail, HiOutlineUserCircle } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext/UserContext';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [rememberUser, setRememberUser] = useState(false);
    const { setUserData } = useUserContext();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const userLoginData = { 'email': userEmail, 'password': userPassword, 'remember_me': rememberUser };
        console.log(userLoginData)
        const loginData = await fetch('https://api.jumpintojob.com/api/v1/auth/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userLoginData)
        });
        const loginUserData = await loginData.json();
        if (loginData.ok) {
            console.log('Login Successfull', loginUserData);
            setUserData(loginUserData);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User login successfull!',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/')
        } else {
            console.log('Something is wrong', loginUserData)
            alert(loginUserData.message)
        }
    }

    return (
        <div className='register-user'>
            <div className="register-user-header">
                <h2>Login Account</h2>
                <span>.</span>
            </div>
            <div className="account-form">
                <form action="" onSubmit={handleLogin}>
                    <div className='account-info'>
                        <label htmlFor="email">Email</label>
                        <div className="account-input">
                            <HiOutlineMail></HiOutlineMail>
                            <input type="email" placeholder='info@example.com' name="email" id="email" required value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className='account-info'>
                        <label htmlFor="password">Password</label>
                        <div className="account-input account-password">
                            {showPassword
                                ?
                                <input type="text" placeholder='Password' name="password" id="password" required value={userPassword} onChange={e => setUserPassword(e.target.value)} />
                                :
                                <input type="password" placeholder='Password' name="password" id="password" required value={userPassword} onChange={e => setUserPassword(e.target.value)} />
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
                            <input type="checkbox" id="rememberme" value={rememberUser} onClick={() => setRememberUser(!rememberUser)} />
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
                        <p>Already have an account? <Link to="/register">Register</Link> here</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;