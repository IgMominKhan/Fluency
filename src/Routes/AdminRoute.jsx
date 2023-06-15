import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Button, Spinner } from "flowbite-react";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  console.log(isAdmin);

  if (loading || isAdminLoading) {
    return (
      <div className="grid place-items-center h-screen -mt-20">
        <Button>
          <Spinner aria-label="Spinner button example" />
          <span className="pl-3">
            Loading...
          </span>
        </Button>
      </div>
    );
  } else if (user && isAdmin) return children;
  else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default AdminRoute;
