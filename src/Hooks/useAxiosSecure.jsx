import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const redirect = useNavigate();
  const { logout } = useAuth();
  const axiosSecure = axios.create({
    baseURL: "https://fluency-server.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    axiosSecure.interceptors.response.use((res) => res, async (err) => {
      if (
        err.response &&
        (err.response.status === 401 || err.response.status === 403)
      ) {
        await logout();
        redirect("/login");
      }
      return Promise.reject(err);
    });
  }, [redirect, logout, axiosSecure]);
  return axiosSecure;
};

export default useAxiosSecure;
