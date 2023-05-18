import { createContext } from "react";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)


const GoogleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
}

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const authInfo = {
    GoogleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
      
    );
};

export default AuthProvider;