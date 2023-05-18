import { createContext, useEffect, useState } from "react";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)



 
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
const [user ,setUser] = useState(null)
const [loading, setLoading] =useState(true)

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
},[])


    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createUserWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(email, password, auth);
    }
    const loginWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    const authInfo = {
        GoogleLogin,
        createUserWithEmailPass,
        loginWithEmailPass,
        logOut,
        user,
        setUser,
        loading,
        setLoading


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;