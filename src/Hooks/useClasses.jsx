import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useClasses = () => {
  const { loading } = useAuth();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`https://fluency-server.vercel.app/classes`);
      return res.data;
    },
  });
  return [refetch, classes];
};

export default useClasses;
