import React, { createContext } from 'react';

export const AuthContex = createContext()
const ContexApi = ({ children }) => {
    const sam ='sampod'
    const authInfo={sam}
    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default ContexApi;