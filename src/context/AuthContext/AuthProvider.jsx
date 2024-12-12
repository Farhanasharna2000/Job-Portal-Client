import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../../Firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

const[user,setUser]=useState(null)
const[loading,setLoading]=useState(true)

const createUser = (email,password) =>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)
}
const signInUser = (email,password) =>{
    setLoading(true)
  return  signInWithEmailAndPassword(auth, email, password)
}
const signInWithGoogle = () =>{
    setLoading(true)
  return  signInWithPopup(auth, googleProvider)
}
const signOutUser = () =>{
    setLoading(true)
  return  signOut(auth)
}
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        console.log('currentUser',currentUser);
        setLoading(false)
    })
    return ()=>{
        unSubscribe();
    }
},[])
    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;