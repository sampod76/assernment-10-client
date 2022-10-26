import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../ContexApi/ContexApi';

const PrivetRouter = ({children}) => {
    const {user}=useContext(AuthContex);
    const location =useLocation()

    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRouter;