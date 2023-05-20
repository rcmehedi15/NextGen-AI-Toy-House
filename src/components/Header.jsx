import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { ToyContext } from '../ToyProvider/ToyProvider';

const Header = () => {
    const { user, logOut } = useContext(ToyContext);
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
                            <li><Link to="/blog" className="justify-between text-dark px-4">Blog</Link></li>
                            

                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/" >
                        <img src="https://i.postimg.cc/J7bCxfw3/nextgen.png" class="hidden md:block md:w-40" />
                    </Link>
                </div>

                <div className="navbar-end flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    {
                        !user ? <Link to="/profile" className="btn bg-[#EB455F] text-white border-none">Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg></Link>

                            :
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user &&
                                            <a >
                                                <img src={user.photoURL} alt="" />    
                                            </a>
                                        }
                                       
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
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
                            </div>

                    }


                </div>
            </div>

        </>
    );
};

export default Header;