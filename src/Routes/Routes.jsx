import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructor/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import BookedClasses from "../Pages/Dashboard/BookedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses";
import DashboardLayout from "../Layouts/DashboardLayout";
import ManageClasses from "../Pages/Dashboard/ManageClasses";

// routes definations
const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "instructors",
          element: <Instructors />,
        },
        {
          path: "classes",
          element: <Classes />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Registation />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "selected-classes",
          element: <BookedClasses />,
        },
        {
          path: "enrolled-classes",
          element: <EnrolledClasses />,
        },
        { path: "manage-classes", element: <ManageClasses /> },
      ],
    },
  ],
);

export default Routes;
