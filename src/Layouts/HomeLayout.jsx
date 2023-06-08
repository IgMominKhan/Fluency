import { Footer } from "flowbite-react";
import { Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import NavigationBar from "../Shared/NavigationBar";

const HomeLayout = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <NavigationBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default HomeLayout;
