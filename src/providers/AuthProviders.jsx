import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    
    const [user,setUser] = useState(null);

    const crateUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    // sign out
    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state change', currentUser);
            setUser(currentUser)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        crateUser,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;