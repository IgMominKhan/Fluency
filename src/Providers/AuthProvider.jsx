import { createContext, useState } from "react";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  // ovserve user's state
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
