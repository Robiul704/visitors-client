import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext=createContext()
const Authprovider = ({children}) => {
    const [user,setuser]=useState()
    const [loading,setloading]=useState(true)

    const creatuser=(email,password)=>{
        loading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinuser=(email,password)=>{
        loading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    const googlelogin=()=>{
        setloading(true)
        return signInWithPopup(auth, provider)
    }

    const signout=()=>{
        loading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setuser(currentuser)
            setloading(false)
        })
        return()=>{
            return unsubscribe()
        }
    },[])

    const info={
        user,loading,signinuser,creatuser,googlelogin,signout
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;