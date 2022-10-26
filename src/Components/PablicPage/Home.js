import React from 'react';
import { useLoaderData } from 'react-router-dom';


// import required modules


import Corse from './Corse';
const Home = () => {
    const getCoures = useLoaderData()

    return (
        <div className=''>

            <h1 className='h1'>Here you will find the lowest cost to complete many programming language courses in the world</h1>
            <h1 className='font-bold my-2'>1) Java is an Object-Oriented Programming (OOP) structure. Java is a class-based programming language. Java technology is used for developing both, applets and applications.</h1>
            <h1 className='font-bold my-2'>2)Learn PHP. PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. PHP is a widely-used </h1>
            <h1 className='font-bold my-2'>3)c++ The iostream is a header file, stands for input/output stream, provides basic input/output services for the C++ program.</h1>
            <h1 className='font-bold my-2'>4) Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript</h1>
            <h1 className='font-bold my-2'>5) Essential Python Concepts & Structures Any Serious Programmer Needs to Know, Explained · Generators · Object-Oriented Programming · Closure · Built-In Enumeration.</h1>
            <h1 className='font-bold my-2'>6) Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is </h1>
            <h1 className='font-bold my-2'>7) Ruby is... ... A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy ..</h1>
          

        </div>
    );
};

export default Home;
