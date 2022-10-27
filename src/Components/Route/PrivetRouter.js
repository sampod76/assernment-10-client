import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../ContexApi/ContexApi';
import { Audio, Vortex } from 'react-loader-spinner'

const PrivetRouter = ({children}) => {
    const {user,looding}=useContext(AuthContex);
    const location =useLocation()

    if (looding) {
        return <>
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
            <h1>Loading.......</h1></>
    }

    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRouter;