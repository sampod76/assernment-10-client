import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.init.js';
const auth = getAuth(app)
export const AuthContex = createContext()
const ContexApi = ({ children }) => {
    const [user, setUser] = useState(null);
    const [looding, setLooding] = useState(true);
    const [defandency, setDefandency] = useState('')
    const [mode, setMode] = useState('light');


    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()
    const GoogleLogin = () => {
        setLooding(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubSing = () => {
        setLooding(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    const singInEmailAndPassword = (email, password) => {
        setLooding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const registerEmailAndPasswore = (eamil, password) => {
        setLooding(true)
        return createUserWithEmailAndPassword(auth, eamil, password)
    }
    const updateProfileUser = (name, url) => {
        setLooding(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    const passwordReset = (email) => {
        return updatePassword(auth, email)
    }

    const logOut = () => {
        setLooding(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLooding(false)
        })
        return () => {
            unSubscribe()
        }

    }, [defandency])

    console.log(user)

    const authInfo = { user, looding, setLooding, GoogleLogin, gitHubSing, singInEmailAndPassword, passwordReset, updateProfileUser, setDefandency, registerEmailAndPasswore ,logOut ,setMode,mode}
    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default ContexApi;