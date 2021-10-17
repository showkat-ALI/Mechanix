import React from 'react';
import useAuth from '../../../context/useAuth';

const Login = () => {
    const{googleSignin}=useAuth()
    return (
        <div id="login">
            <h1>Please log in</h1>
            <button onClick={googleSignin} className="btn btn-secondary">Log in</button>
        </div>
    );
};

export default Login;