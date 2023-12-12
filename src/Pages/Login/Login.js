import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { setAuthToken } from '../../api/auth';

const Login = () => {
    const location = useLocation();
    const navigate =  useNavigate();
    const from = location.state?.from?.pathname || '/';

    const {login} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        login(email,password)
        .then(result => {
            const user = result.user;
            setAuthToken(user)
            navigate(from,{replace:true})

           
            
        })
        .catch(error =>console.log(error))
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img}></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
                <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Login'></input>
                        </div>
                    </form>
                    <p className='text-center'>New to GEnius Car? <Link className='text-orange-600 font-bold' to={'/signup'}>Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;