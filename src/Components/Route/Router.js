import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Corses from "../PablicPage/Corses";
import Error from "../PablicPage/Error";
import Home from "../PablicPage/Home";
import Main from "../PablicPage/Main";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/corses',
                element:<Corses></Corses>
            },
            
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])