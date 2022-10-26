
import { useState, useEffect } from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Components/Route/Router';


function App() {
 
  return (
    <div  className="bg-slate-200">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
