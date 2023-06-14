import auth from "../Configs/Firebase";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ovserve user's state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // login users
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // create users
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logout users
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // handle social login
  const googleAuthProvider = new GoogleAuthProvider();

  const socialLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    login,
    register,
    logout,
    socialLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
