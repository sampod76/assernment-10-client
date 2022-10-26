import React from 'react';
import { Link } from 'react-router-dom';
import '../AllCss/allFile.css'


const Header = () => {
    return (
        <div className=' sticky top-1'>
            <header className="p-2 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link rel="noopener noreferrer" to='/' aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='w-[60%] rounded-full' src='https://thumbs2.imgbox.com/82/db/FLFQNGrC_t.jpg' alt="" />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='/home' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='/corses' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Courses</Link>
                        </li>

                       
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Sing Out</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='/login' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Login</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" to='/register' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Register</Link>
                        </li>
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