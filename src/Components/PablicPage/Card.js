import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cor }) => {
    return (
        <div>
            <div className="card card-compact w-full h-full bg-base-100 shadow-2xl rounded-xl p-3">
               <div className='h-[50%]'>
               <img className='h-full w-full rounded-xl' src={cor.picture
                } alt="Shoes" />
               </div>
                <div className="card-body flex flex-col justify-between">
                    <h2 className="card-title text-xl font-bold">{cor.name
                    }</h2>
                    <p className='text-lg font-semibold'>{cor.title}</p>
                    <div className="card-actions justify-end mt-3">
                        <Link to={`/course/${cor.id}`} className=" buttonb">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;