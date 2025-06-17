import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';


const googleProvider = new GoogleAuthProvider();

const Loading = () => (
  <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-primary"></span>
  </div>
);

const AuthProvider = ({children}) => {
const [loading, setLoading] = useState(true);
const [user, setUser] = useState(null);

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        console.log('user in the auth state changed', currentUser)
    }) 
    return () => {
        unSubscribe();
    }
},[])

const createUser = (email, Password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, Password)

}

const signInUser =  (email, Password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, Password)
}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
}


const authInfo = {
    loading,
    user,
    setUser,
createUser,
signInUser,
signOutUser,
googleSignIn,

}

 if (loading) {
    return <Loading />;
  }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;