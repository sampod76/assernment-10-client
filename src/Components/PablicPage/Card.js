import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({cor}) => {
    const {about,balance,company,id,name,picture,title}=cor

    const navigate=useNavigate()

    const handelcard =()=>{
        navigate(`/course/${id}`)
    }

    return (

        <div onClick={handelcard} className= "text-white relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" style={{backgroundImage: `url(${picture})`}}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <Link  rel="noopener noreferrer" to={`/course/${id}`} className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">{name}</Link>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                    <span className="leading-none uppercase">Dec</span>
                </div>
            </div>
            <h2 className="z-10 p-5">
                <Link rel="noopener noreferrer" to={`/course/${id}`} className="font-medium text-md hover:underline dark:text-gray-100"> {title}</Link>
            </h2>
        </div>
    );
};

export default Card;