import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Corse from './Corse';

const Corses = () => {
    const getCoures = useLoaderData()
   

    return (
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">

               

            </div>
        </div>
    );
};

export default Corses;