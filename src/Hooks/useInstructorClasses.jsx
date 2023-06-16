import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useInstructorClasses = (email) => {
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["instructor classs", email],
    queryFn: async () => {
      const res = await axios.get(
        `https://fluency-server.vercel.app/classes?email=${email}`,
      );
      return res.data;
    },
  });
  return [refetch, classes];
};

export default useInstructorClasses;
