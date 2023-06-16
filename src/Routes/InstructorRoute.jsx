import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";
import { Button, Spinner } from "flowbite-react";
import { Navigate } from "react-router-dom";

const InstructorRoute = ({ children }) => {
  const [isInstructor, insLoading] = useInstructor();
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading || insLoading) {
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
  } else if (user && isInstructor) return children;
  else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default InstructorRoute;
