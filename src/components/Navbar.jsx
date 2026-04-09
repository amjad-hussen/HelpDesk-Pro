import React from 'react';
import Container from './Container';

const Navbar = () => {
    const links = <>
        <li> <a href=""> Home </a> </li>
        <li> <a href=""> Faculty </a> </li>
        <li> <a href=""> Student </a> </li>
        <li> <a href=""> Contact </a> </li>
    </>
    return (
        
            <div className="bg-purple-100 shadow ">
                <Container>
                    <div className='navbar'>

                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {links}
                                </ul>
                            </div>
                            <a className=" text-2xl font-bold text-gray-700">HelpDesk Pro</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {links}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a className="btn bg-blue-500 text-white font-semibold rounded-md"> + New Assignment</a>
                        </div>
                    </div>
                </Container>
            </div>


        
    );
};

export default Navbar;