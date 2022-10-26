import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight} from "react-icons/fa";

const NavBar = ({getCoures}) => {


    return (
        <div className=' flex flex-col  gap-5 p-2 h-screen'>
            {
                getCoures.map(cor=> <div cor={cor}  key={cor.id} > <Link className='bg-sky-600 p-2 text-base md:text-lg font-bold flex justify-between items-center ' to={`/course/${cor.id}`}> <span>{cor.name
                }</span> <span><FaArrowRight></FaArrowRight></span></Link></div>)
            }
        </div>
    );
};

export default NavBar;