import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/Firebase.config';
import { Toast } from 'react-bootstrap';

const auth = getAuth(app);
export const Authcontext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (provider) => {
        return signInWithPopup(auth, provider);
    }


    useEffect(
        () => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                // console.log("User Inside Satage", currentUser)
                if(currentUser == null || currentUser.emailVerified){
                    setUser(currentUser);
                }
                setLoading(false)
            });
            return () => unsubscribe();
        }
        , []);
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        
        return updateProfile(auth.currentUser, profile)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
            .then(() => {
                Toast("Signout Successfully")
            })
    };

    const authInfo = { user, login, logOut, register, signIn, loading, updateUserProfile,verifyEmail,setLoading };
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;