import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updatePassword,
    updateProfile,
} from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/firebase.config";
import { AuthContext } from "../Context/AuthContext";
import { useEffect } from "react";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const signUpUser = (email, password) => {
        setIsUserLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setIsUserLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGooglePopUp = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const updateUserProfile = (newlyUpdatedDataAsObject) => {
        return updateProfile(auth.currentUser, newlyUpdatedDataAsObject);
    };

    const resetPassword = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword);
    };

    const resetForgottenPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const signOutUser = () => {
        setIsUserLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        isUserLoading,
        setUser,
        signUpUser,
        signInUser,
        signOutUser,
        signInWithGooglePopUp,
        updateUserProfile,
        resetPassword,
        resetForgottenPassword,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsUserLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
