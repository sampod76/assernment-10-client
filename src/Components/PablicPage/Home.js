import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Corse from './Corse';
const Home = () => {
    const getCoures = useLoaderData()
 
    return (
        <div className=''>
          
                <h1 className='h1'>Here you will find the lowest cost to complete many programming language courses in the world</h1>
            

        </div>
    );
};

export default Home;
