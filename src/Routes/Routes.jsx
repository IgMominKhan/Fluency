import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructor/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";

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
      ],
    },
  ],
);

export default Routes;
