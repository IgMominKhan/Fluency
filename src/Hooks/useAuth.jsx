import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);
  return { user, setUser, loading, setLoading };
};

export default useAuth;
