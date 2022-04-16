// import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {

    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if(user){
        return children;
    }
    else{
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    if(loading){
        return <p> Loaing... </p>
    }
    
    
};

export default RequireAuth;