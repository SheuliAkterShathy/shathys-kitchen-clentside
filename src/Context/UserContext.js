import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();


    const createUser =(email,password) =>{
        // setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
      }

      const updateUserProfile = (profile) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, profile);
    }
    

      const signIn = (email,password) =>{
        // setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
      }
 const signInWithGoogle = () =>{
        // setLoading(true)
        return signInWithPopup(auth,googleProvider)
       }
    const authInfo = {
        user,
        createUser,
        signInWithGoogle,
        updateUserProfile,
        signIn
      }
    return (
        <div>
              <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;