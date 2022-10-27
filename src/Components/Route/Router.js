import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Corse from "../PablicPage/Corse";
import Corses from "../PablicPage/corses";
import Error from "../PablicPage/Error";
import Home from "../PablicPage/Home";
import Login from "../PablicPage/Login";
import Main from "../PablicPage/Main";
import Register from "../PablicPage/Register";
import Chackout from "../PrivetRoutePage/Chackout";
import Profile from "../PrivetRoutePage/Profile";
import Quiz from "../PrivetRoutePage/Quiz";
import PrivetRouter from "./PrivetRouter";

export const router =createBrowserRouter([
    {
        path:'/',
        loader: ()=>fetch('https://s-seven-omega.vercel.app/allCorses'),
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader: ()=>fetch('https://s-seven-omega.vercel.app/allCorses'),
                element:<Home></Home>
            },
            {
                path:'/home',
                loader: ()=>fetch('https://s-seven-omega.vercel.app/allCorses'),
                element:<Home></Home>
            },
            {
                path:'/corse',
                element:<Corse></Corse>
            },
            {
                path:'/corses',
                loader: ()=>fetch('https://s-seven-omega.vercel.app/allCorses'),
                element:<Corses></Corses>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/course/:id',
                loader: ({params})=>fetch(`https://s-seven-omega.vercel.app/allCorses/${params.id}`),
                element:<Corse> </Corse>
            },
            {
                path:'/course/chackout',
                // loader: ({params})=>fetch(`http://localhost:5000/allCorses/${params.id}`),
                element:<PrivetRouter><Chackout></Chackout></PrivetRouter>

            },
            {
                path:'/profile',
                element:<PrivetRouter><Profile></Profile></PrivetRouter>
            },
            {
                path:'/quiz',
                element:<Quiz></Quiz>
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])