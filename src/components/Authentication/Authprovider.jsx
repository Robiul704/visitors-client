import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import axios from "axios";

export const AuthContext=createContext()
const Authprovider = ({children}) => {
    const [user,setuser]=useState()
    const [loading,setLoading]=useState(true)

    const creatuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinuser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    const googlelogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setuser(currentuser)
            setLoading(false)

            if(currentuser){
                const email={email:currentuser.email}
                axios.post('http://localhost:5000/jwt',email,{withCredentials:true} )
                .then(res=>console.log(res.data))
            }
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