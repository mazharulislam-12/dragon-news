import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    
    const [user,setUser] = useState(null);

    const crateUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const authInfo = {
        user,
        crateUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;