import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = (status) => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/cart?email=${user?.email}&status=${status}`,
      );
      return res.data;
    },
  });
  return [refetch, classes];
};

export default useCart;
