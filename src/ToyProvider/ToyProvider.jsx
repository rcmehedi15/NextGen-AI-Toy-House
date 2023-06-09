import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const ToyContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const ToyProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=> {
            return unsubscribe();
        }
    },[])


    // Handle Login
    const signUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth, provider);
    }

    const gitHubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const chefInfo = {
        signUp,
        login,
        logOut,
        user,
        loading,
        auth,
        googleLogIn,
        
    }
    return (
        <ToyContext.Provider value={chefInfo}>
            {children}
        </ToyContext.Provider>
    );
};

export default ToyProvider;