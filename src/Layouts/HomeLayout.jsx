import { Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import NavigationBar from "../Shared/NavigationBar";
import FooterSection from "../Shared/Footer";

const HomeLayout = () => {
  const { user } = useAuth();
  return (
    <>
      <NavigationBar />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default HomeLayout;
