import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight} from "react-icons/fa";

const NavBar = ({getCoures}) => {


    return (
        <div className='border-2 border-slate-700 flex flex-col justify-center gap-5 p-2 h-screen'>
            {
                getCoures.map(cor=> <Link className='buttonb flex justify-between items-center'> <span>{cor.name
                }</span> <span><FaArrowRight></FaArrowRight></span></Link>)
            }
        </div>
    );
};

export default NavBar;