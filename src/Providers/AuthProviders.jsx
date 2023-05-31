import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.confige";

export const AuthContex = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)

    const crateUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
  

    const AuthInfo = {
        user,
        crateUser,
        loginUser
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