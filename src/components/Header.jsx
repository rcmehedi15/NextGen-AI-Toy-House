import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { ToyContext } from '../ToyProvider/ToyProvider';
import './Header.css'
const Header = () => {
    const { user, logOut, loading } = useContext(ToyContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const [activeButton, setActiveButton] = useState();

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    }

    return (

        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/" className="text-dark px-4" >Home</Link></li>
                            <li><Link to="/blog" className="justify-between text-dark px-4">Blog</Link></li>
                            <li><Link to="/alltoyCard" className="justify-between text-dark px-4">All Toys</Link></li>


                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/">
                        <img
                            src="https://i.postimg.cc/J7bCxfw3/nextgen.png"
                            className="md:w-40 w-32 mx-auto"
                            alt="Logo"
                        />
                    </Link>
                    <span><sup>BD</sup></span>
                </div>


              
                <div className='navbar navbar-end'>
                    <div className="dropdown dropdown-end ">
                        {
                            !loading ? <div>
                                {
                                    user ? <>

                                        <div id='parent-user-profile' className='flex items-center gap-x-3'>
                                            <label id='user-pic' tabIndex={0} className="relative btn btn-ghost btn-circle avatar flex-row-reverse">
                                                <div className="w-12 rounded-full">
                                                    <img src={user.photoURL ? user.photoURL : 'https://freesvg.org/img/abstract-user-flat-4.png'} />
                                                </div>
                                                <p id='user-name' className='absolute right-14 top-5 opacity-0 text-lg btn bg-white border-0 shadow-md btn-sm font-medium text-error overflow-hidden'>{user.displayName ? user.displayName : user?.email}</p>
                                            </label>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <Link to="/profile" className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/addToy">
                                                    Add Toy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/myToy">
                                                    My Toy
                                                </Link>
                                            </li>
                                            
                                            <li><Link onClick={handleLogOut} >Logout</Link></li>
                                        </ul>
                                    </> : <Link to='/login' className='btn btn-sm btn-outline hover:border-error rounded-md hover:bg-error hover:text-white'>Login</Link>
                                }
                            </div> : <p>Loading...</p>
                        }
                    </div>
                </div>

            </div>

        </>
    );
};

export default Header;