import React, { useContext, useState } from 'react';
import { AuthContex } from '../ContexApi/ContexApi';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
const Profile = () => {
    const { user, passwordReset, updateProfileUser } = useContext(AuthContex)
    //    console.log(user);
    const [password, setPassword] = useState('')

    console.log(user)
    const handlepasswordReset = (password) => {


        passwordReset(password)
            .then(result => {
                Swal.fire({
                    title: 'Custom animation with Animate.css',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }).catch(err => {
                console.log(err.message);
            })

    }

    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50 border-4 border-fuchsia-700">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">You Profile Information</h1>
                    {user.photoURL? <img  src={user.photoURL} alt="" srcset="" /> : <img  src='https://i.ibb.co/j41h2KG/ppp.png'></img>}
                    <div className="space-y-4">

                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" defaultValue={user.displayName} className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" readOnly defaultValue={user.email} className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                    </label>

                    <div className='border-2 border-red-400 flex flex-col gap-2 p-2'>

                        <label>Input New password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" name="passwordChange" id="" className='border-2 border-blue-500' />

                        <Link type="button" onClick={handlepasswordReset} className="self-center p-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400 border-2 border-red-400" >Updata password</Link>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Profile;