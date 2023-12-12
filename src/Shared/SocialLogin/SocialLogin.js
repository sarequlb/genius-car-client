import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';

const SocialLogin = () => {
    const location = useLocation();
    const navigate =  useNavigate();
    const from = location.state?.from?.pathname || '/';

    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
            setAuthToken(user)
            navigate(from,{replace:true})
            
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <p className='text-center'><small>Social login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;