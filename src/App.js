
import { useState, useEffect, useContext } from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthContex } from './Components/ContexApi/ContexApi';


import { router } from './Components/Route/Router';


function App() {
  const {mode}=useContext(AuthContex)
  // container mx-auto p-3 shadow-2xl 

  return (
    <div  className={`container mx-auto p-3 shadow-2xl ${mode == 'dark' ? 'bg-slate-700 text-white' : 'bg-white'  } `} >
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
