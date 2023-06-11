import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import { Flowbite } from "flowbite-react";

// main stracture
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Flowbite>
        <RouterProvider router={Routes} />
      </Flowbite>
    </AuthProvider>
  </React.StrictMode>,
);
