import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';


const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    console.log(user)

    const handleSignOut = () =>{
        logOut()
        .then(result => {
            
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const menuItems = <>
        <li className='font-semibold'><Link to={'/'}>Home</Link></li>

        {user?.email?
            <>
                 <li className='font-semibold'><Link to={'/orders'}>Orders</Link></li>
                 <li className='font-semibold'><button onClick={handleSignOut} className='btn-ghost'>Sign Out</button></li>
            </>:
            <li className='font-semibold'><Link to={'/login'}>LogIn</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-20 mb-12 pt-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img src={logo}></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            {
                user &&
                <div className="navbar-end ">
            {
                user?.photoURL ? <img className='rounded-full w-14' alt='' src={user?.photoURL}></img>
                : <FaUser></FaUser>
            }
            </div>
            }
        </div>
    );
};

export default Header;