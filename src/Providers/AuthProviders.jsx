import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.confige";

export const AuthContex = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [lodding,useLodding] = useState(true)

    const crateUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth,currentUser =>{
            console.log('Auth state change',currentUser)
            setUser(currentUser)
            useLodding(false)
        })
        return()=>{
            unsubscrib();
        }
    })

    const logOut = () =>{
        signOut(auth)
    }
  

    const AuthInfo = {
        user,
        crateUser,
        loginUser,
        logOut,
        lodding
    }

  
    return (
        <div>
            <AuthContex.Provider value={AuthInfo}>
              {children}
            </AuthContex.Provider>
            
        </div>
    );
};

export default AuthProviders;