import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Corse from "../PablicPage/Corse";
import Corses from "../PablicPage/corses";
import Error from "../PablicPage/Error";
import Home from "../PablicPage/Home";
import Login from "../PablicPage/Login";
import Main from "../PablicPage/Main";
import Register from "../PablicPage/Register";

export const router =createBrowserRouter([
    {
        path:'/',
        loader: ()=>fetch('http://localhost:5000/allCorses'),
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader: ()=>fetch('http://localhost:5000/allCorses'),
                element:<Home></Home>
            },
            {
                path:'/home',
                loader: ()=>fetch('http://localhost:5000/allCorses'),
                element:<Home></Home>
            },
            {
                path:'/corse',
                element:<Corse></Corse>
            },
            {
                path:'/corses',
                loader: ()=>fetch('http://localhost:5000/allCorses'),
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
                loader: ({params})=>fetch(`http://localhost:5000/allCorses/${params.id}`),
                element:<Corse> </Corse>
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])