import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext = createContext(app);
const auth = getAuth()
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        localStorage.removeItem('genius-token')
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false);
        }) ;

        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        loading,
        user,
        createUser,
        login,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;