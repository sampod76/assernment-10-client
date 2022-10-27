import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AuthContex } from '../ContexApi/ContexApi';

import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

import '../AllCss/allFile.css'
const Header = () => {
    const navigat = useNavigate()
    const { user, logOut, looding ,mode, setMode} = useContext(AuthContex);



    const handleSingOut = () => {
        logOut()
            .then(result => {
                navigat('/login')
            })


    }


    // const handleProfile = () => {
    //     navigat('/profile')

    // }
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
                            }>Home/Bloge</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/quiz' className={({ isActive }) =>
                                isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                            }>FAQ</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/corses' className={({ isActive }) =>
                                isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                            }>Courses</NavLink>
                        </li>
                        {
                            user?.email ? <li className="flex">
                                <>
                                    <NavLink onClick={handleSingOut} rel="noopener noreferrer"  className={({ isActive }) =>
                                        isActive ? 'underline decoration-sky-500 decoration-4 p-4 font-bold' : 'from-neutral-900 p-4 font-thin'
                                    }>Sing Out</NavLink>
                                    <NavLink title={user.email} to='/profile' rel="noopener noreferrer" className={({ isActive }) =>
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

                        <div className='flex justify-center items-center border-2 border-slate-900 rounded-lg w-36'>
                            <DarkModeToggle
                                mode={mode}
                                dark="Dark"
                                light="Light"
                                size="sm"
                                inactiveTrackColor="#e2e8f0"
                                inactiveTrackColorOnHover="#f8fafc"
                                inactiveTrackColorOnActive="#cbd5e1"
                                activeTrackColor="#334155"
                                activeTrackColorOnHover="#1e293b"
                                activeTrackColorOnActive="#0f172a"
                                inactiveThumbColor="#1e293b"
                                activeThumbColor="#e2e8f0"
                                onChange={(mode) => {
                                    setMode(mode);
                                }}
                            />
                        </div>


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