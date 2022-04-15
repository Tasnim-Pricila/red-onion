import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png';
import './Signup.css';

const Signup = () => {
    
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState({
        email: "",
        password: "",
        others: ""
    })

    const handleSignUp = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className='signup-area'>
                <div className='container'>
                    <div className='w-50 mx-auto mt-5'>
                        <div>
                            <img src={logo2} alt="" className='img-fluid w-50 d-block mx-auto' />
                        </div>
                        <div className='signup-form mx-auto my-5' >
                            <form onSubmit={handleSignUp}>
                                <input type="text" name="name" id="name" placeholder='Name'
                                    className='w-100 mb-4 ps-3' />
                                <input type="email" name="name" id="email" placeholder='Email'
                                    className='w-100 mb-4 ps-3' />
                                <input type="password" name="name" id="pass" placeholder='Password'
                                    className='w-100 mb-4 ps-3' />
                                <input type="password" name="name" id="cpass" placeholder='Confirm Password'
                                    className='w-100 mb-4 ps-3' />
                                <button type="submit" className='w-100 border rounded-3 text-white'> Sign Up </button>
                            </form>
                            <p className='mx-auto text-center '>
                                <Link to='/login' className='text-decoration-none text-danger '>Already have an account</Link>
                            </p>

                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Signup;