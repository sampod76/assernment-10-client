import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

const Main = () => {
    const getCoures=useLoaderData()
    // console.log(getCoures);
    return (
        <div className='flex justify-between flex-col gap-3 '>
            <Header></Header>
            <div className='flex justify-between gap-1'>
                <div className='w-[20%]'>
                    <NavBar getCoures={getCoures}></NavBar>
                </div>
                <div className='w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;