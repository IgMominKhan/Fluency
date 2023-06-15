import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role, refetch } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/user?email=${user?.email}`,
      );
      return res.data?.role;
    },
  });
  return [role, refetch];
};

export default useRole;
