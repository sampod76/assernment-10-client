import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.init';
const auth= getAuth(app)
export const AuthContex = createContext()
const ContexApi = ({ children }) => {
    const [user,setUser]=useState(null);
    const [looding,setLooding]=useState(true);


    const googleProvider=new GoogleAuthProvider();
    const gitHubProvider=new GithubAuthProvider()
    const GoogleLogin=()=>{
        setLooding(true)
        return signInWithPopup(auth ,googleProvider)
    }

    const gitHubSing=()=>{
        setLooding(true);
        return signInWithPopup(auth,gitHubProvider);
    }

    const singInEmailAndPassword=(email,password)=>{
        setLooding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

  

useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth ,currentUser=>{
        setUser(currentUser);
        setLooding(false)
    })
    return ()=> {
        unSubscribe()
    }
    
},[])


   
    const authInfo={user,looding,setLooding,GoogleLogin,gitHubSing,singInEmailAndPassword}
    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default ContexApi;