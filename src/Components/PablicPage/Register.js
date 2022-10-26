import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../ContexApi/ContexApi';
import { IconName, FaGithub, FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2'
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [error, serError] = useState('')
    const { looding, setLooding, GoogleLogin, gitHubSing } = useContext(AuthContex)


    const handleGithub = () => {
        gitHubSing()
            .then(result => {
                serError('')
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
            })
            .catch(error => {
                serError(error.message);
                toast.error("This didn't work.")
            })
    }

    const handleGoogle = () => {
        GoogleLogin()
    }
    return (
        <section className=" text-white rounded-lg  dark:bg-gray-900 ">
            <div className="container flex  justify-center min-h-screen px-6 mx-auto">
                <form className="w-[60%]  p-2 bg-slate-900 h-fit p-5">
                    <img className="object-cover w-24 h-24 mx-auto rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="user avatar" />




                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Name" />
                    </div>




                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </span>

                        <input type="url" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo Url" />
                    </div>
                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                    </div>

                    

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign Up
                        </button>

                        <div className="mt-6 text-center ">
                            <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Already have an account?
                            </a>
                        </div>
                        <div className='w-[20%] my-3 flex  justify-between gap-1 mx-auto '>
                            <Link onClick={handleGithub} ><FaGithub className='text-3xl'></FaGithub></Link>
                            <Link onClick={handleGoogle} ><FaGoogle className='text-3xl'></FaGoogle></Link>
                        </div>
                    </div>
                    <h1 className=' text-center  text-2xl text-red-700   '>{error}</h1>
                </form>
            </div>
            <div><Toaster/></div>
        </section>
    );
};

export default Register;