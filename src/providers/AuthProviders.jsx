import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    
    const [user,setUser] = useState(null);

    // loading
    const [loading, setLoading] = useState(true)

    const crateUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    //sign in
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(true)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        crateUser,
        signIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;