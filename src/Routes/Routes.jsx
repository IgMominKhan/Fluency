import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructor/Instructors";

// routes definations
const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      children : [
        {
          path:'/',
          element:<Home/>
        },
        {
          path: 'instructors',
          element:<Instructors/>
        }

      ]
    },
  ],
);

export default Routes;
