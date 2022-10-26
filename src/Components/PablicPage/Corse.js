import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContex } from '../ContexApi/ContexApi';

const Corse = () => {
  const getCoures=useLoaderData()
  const {about,balance,company,id,name,picture,title}=getCoures;
  console.log(getCoures);

    
    return (
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={picture} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <div className='flex justify-between'>
        <h2 className="text-lg font-bold title-font text-violet-800 tracking-widest">Course : {name}</h2>
        <h2 className=' text-2xl  font-semibold text-red-500'>Price : {balance}</h2>
        </div>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
        <h1 className=' text-base text-red-600 border-2 border-slate-900 p-1 w-fit rounded-md hover:bg-cyan-600 hover:text-white'>Author : {company}</h1>
        <div className="flex mb-4">
         
         
        </div>
        <p className="leading-relaxed">{about}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
         
        
        </div>
        <div className="flex justify-between">
          <p className="title-font font-medium text-2xl text-gray-900">{balance}</p>
        
        
          <a  className='buttonb' target='_' href='https://www.tutorialspoint.com/html/html_tutorial.pdf' download='htmlpdf.pdf'>Pdf Download</a>
        </div>
        
      </div>
    </div>
  </div>
</section>
    );
};

export default Corse;