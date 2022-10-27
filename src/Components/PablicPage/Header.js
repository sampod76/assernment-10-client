import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AuthContex } from '../ContexApi/ContexApi';
import { Audio, Vortex } from 'react-loader-spinner'

import '../AllCss/allFile.css'
const Header = () => {
    const navigat = useNavigate()
    const { user, logOut, looding } = useContext(AuthContex);



    const handleSingOut = () => {
        logOut()
            .then(result => {
                navigat('/login')
            })


    }


    const handleProfile = () => {

        navigat('/profile')

    }
    return (
        <div className='blurImg'>
            <header className="p-2 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <NavLink rel="noopener noreferrer" to='/' aria-label="Back to homepage" className=" flex items-center p-2">
                        <img className='w-[60%] rounded-full' src='https://thumbs2.imgbox.com/82/db/FLFQNGrC_t.jpg' alt="" />
                    </NavLink>

                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/home' className={({ isActive }) =>
                                isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                            }>Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/quiz' className={({ isActive }) =>
                                isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                            }>Quiz</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/corses' className={({ isActive }) =>
                                isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                            }>Courses</NavLink>
                        </li>
                        {
                            user?.email ? <li className="flex">
                                <>
                                    <NavLink onClick={handleSingOut} rel="noopener noreferrer" to='' className={({ isActive }) =>
                                        isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                                    }>Sing Out</NavLink>
                                    <NavLink title={user.email} onClick={handleProfile} rel="noopener noreferrer" to='' className={({ isActive }) =>
                                        isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                                    }>Profile</NavLink>

                                </>
                            </li> : <>

                                <li className="flex">
                                    <NavLink rel="noopener noreferrer" to='/login' className={({ isActive }) =>
                                        isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                                    }>Login</NavLink>
                                </li>
                                <li className="flex">
                                    <NavLink rel="noopener noreferrer" to='/register' className={({ isActive }) =>
                                        isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                                    }>Register</NavLink>
                                </li>
                            </>
                        }



                    </ul>
                    <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;