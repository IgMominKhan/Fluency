import auth from '../Configs/Firebase'
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  // ovserve user's state

  // login users
  const login = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  };
  
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
