import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo2 from '../../images/logo2.png';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Save User Info 
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    // Handle Error 
    const [showError, setError] = useState({
        email: "",
        password: "",
        others: "",
        
    })

    // Get User email 
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setUserInfo({...userInfo, email: email});
    }

    // Get User Password 
    const handlePassChange = (e) => {
        const pass = e.target.value;
        setUserInfo({...userInfo, password: pass});
    }
     // // SIgn in with email and pass 
    const [signInWithEmailAndPassword, user, loading, loginError] = useSignInWithEmailAndPassword(auth);

    // Error 
    useEffect(() => {
        const error = loginError;
        if(error){
            switch(error?.code){
                case "auth/user-not-found":
                    setError({...showError, email: "User Not Found"});
                    break;
                case "auth/wrong-password":
                    setError({...showError, password: error.message});
                    break;
                default:
                setError({...showError, others: "Something went wrong"});
            }
        }
    },[loginError, showError]);

    // Login Button 
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
        console.log(userInfo);
    }
    
    const from = location.state?.from?.pathname || '/';
    useEffect( () => {
        if(user){
            navigate(from);
        }
    },[user])

    return (
        <>
            <div className='signup-area'>
                <div className='container'>
                    <div className='w-50 mx-auto mt-5'>
                        <div>
                            <img src={logo2} alt="" className='img-fluid w-50 d-block mx-auto' />
                        </div>
                        <div className='signup-form mx-auto my-5' >
                            <form onSubmit={handleLogin}>
                                
                                <input type="email" name="name" id="email" placeholder='Email' onChange={handleEmailChange}
                                    className='w-100 mt-4 ps-3' />
                                    {showError && <span className='text-danger fw-bold'> {showError.email} </span>}
                                    
                                <input type="password" name="name" id="pass" placeholder='Password'  onChange={handlePassChange}
                                    className='w-100 mt-4 ps-3' />
                                {showError && <span className='text-danger fw-bold'> {showError.password} </span>}

                                <button type="submit" className='w-100 border rounded-3 text-white login-btn mt-4'> Login </button>
                                {showError && <span className='text-danger fw-bold'> {showError.others} </span>}
                                

                            </form>
                            <p className='mx-auto text-center '> Not Yet Member?
                                <Link to='/signup' className='text-decoration-none text-danger '> Sign Up Now </Link>
                            </p>

                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Login;