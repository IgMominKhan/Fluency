import { Outlet } from "react-router-dom";
import DashbordHeader from "../Shared/DashboardHeader";
import FooterSection from "../Shared/Footer";
import useAuth from "../Hooks/useAuth";
import LeftPanel from "../Pages/Dashboard/LeftPanel";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const [role] = useRole();
  return (
    <div className="min-h-full md:flex">
      <LeftPanel role={role} />
      <div className="min-h-screen flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
