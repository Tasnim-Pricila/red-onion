import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    
    // Save User Info 
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    // Handle Error 
    const [error, setError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        others: ""
    })

    // Get User email 
    const handleEmailChange = (e) => {
        const email = e.target.value;
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(email);
        if(validEmail){
            setUserInfo({...userInfo, email: email});
            setError({...error, email: ""});
        }
        else{
            setError({...error, email: 'Invalid Email'});
            setUserInfo({...userInfo, email: ""});
        }
        
    }

    // Get User Password 
    const handlePassChange = (e) => {
        const pass = e.target.value;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const validPass = passRegex.test(pass);
        if(validPass){
            setUserInfo({...userInfo, password: pass});
            setError({...error, password: ""});
        }
        else{
            setUserInfo({...userInfo, password:""});
            setError({...error, password: "Set strong password"});
        }
        
    }

    // Confirm password 
    const handleConfirmPassChange = (e) => {
        const confirmPass = e.target.value;   
        if(userInfo.password !== confirmPass){
            setError({...error, confirmPassword:"Password does not matched"});
            setUserInfo({...userInfo, confirmPassword: ""});
        }
        else{
            setUserInfo({...userInfo, confirmPassword: confirmPass});
            setError({...error, confirmPassword:""});
        }
    }

    //Create User Firebase
    const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if(hookError){
            switch(hookError.code){
                case "auth/email-already-in-use":
                    setError({...error, email: "Email already exists"});
                    break;
                case "auth/invalid-email":
                    setError({...error, email: "Invalid Email"});
                    break;
                case "auth/invalid-password":
                    setError({...error, password: "Invalid Password"});
                    break;
                default:
                setError({...error, others: hookError.message});
            }
        }
    },[error, hookError]);

    //   Submit Button 
    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        // console.log(userInfo);
    }

    

    return (
        <>
            <div className='signup-area'>
                <div className='container'>
                    <div className='w-50 mx-auto mt-5'>
                        <div>
                            <img src={logo2} alt="" className='img-fluid w-50 d-block mx-auto' />
                        </div>
                        {
                            !user 
                            && 
                            <div className='signup-form mx-auto my-5' >
                            <form onSubmit={handleSignUp}>
                                <input type="text" name="name" id="name" placeholder='Name' required
                                    className='w-100 mt-4 ps-3' />
                                <input type="email" name="name" id="email" placeholder='Email' onChange={handleEmailChange}
                                    className='w-100 mt-4 ps-3' />
                                
                                    {error && <span className='text-danger fw-bold'> {error.email} </span>}
                                
                                <input type="password" name="name" id="pass" placeholder='Password' onChange={handlePassChange}
                                    className='w-100 mt-4 ps-3' />
                                 {error && <span className='text-danger fw-bold'> {error.password} </span>}
                                
                                <input type="password" name="name" id="cpass" placeholder='Confirm Password' onChange={handleConfirmPassChange}
                                    className='w-100 mt-4 ps-3' />
                                    {error && <span className='text-danger fw-bold'> {error.confirmPassword} </span>}

                                <button type="submit" className='w-100 border rounded-3 text-white signup-btn mt-4'> Sign Up </button>
                                {error && <span className='text-danger fw-bold'> {error.others} </span>}
                            </form>
                            <p className='mx-auto text-center '>
                                <Link to='/login' className='text-decoration-none text-danger '>Already have an account</Link>
                            </p>

                        </div>
                        }
                        

                    </div>

                </div>
            </div>

        </>
    );
};

export default Signup;