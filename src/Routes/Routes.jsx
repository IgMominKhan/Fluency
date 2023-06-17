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
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../Pages/Dashboard/MyClasses";
import AddClass from "../Pages/Dashboard/AddClass";
import ErrorPage from "../Pages/ErrorPage";

// routes definations
const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
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
          path: "",
          element: <Dashboard />,
        },
        {
          path: "selected-classes",
          element: <BookedClasses />,
        },
        {
          path: "enrolled-classes",
          element: <EnrolledClasses />,
        },
        {
          path: "my-classes",
          element: (
            <InstructorRoute>
              <MyClasses />
            </InstructorRoute>
          ),
        },
        {
          path: "add-class",
          element: (
            <InstructorRoute>
              <AddClass />
            </InstructorRoute>
          ),
        },
        {
          path: "manage-classes",
          element: (
            <AdminRoute>
              <ManageClasses />,
            </AdminRoute>
          ),
        },
        {
          path: "manage-users",
          element: (
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          ),
        },
      ],
    },
  ],
);

export default Routes;
