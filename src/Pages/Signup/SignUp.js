import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../api/auth';

const SignUp = () => {
    const location = useLocation();
    const navigate =  useNavigate();
    const from = location.state?.from?.pathname || '/';

    const {createUser,name} = useContext(AuthContext)

    const handleSignup = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setAuthToken(user)
            navigate(from,{replace:true})
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img}></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
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
                            <input type='submit' className="btn btn-primary" value='Sign Up'></input>
                        </div>
                    </form>
                    <p className='text-center'>Already Have a Account? <Link className='text-orange-600 font-bold' to={'/login'}>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;