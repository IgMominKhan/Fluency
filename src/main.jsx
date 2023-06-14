import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import { Flowbite } from "flowbite-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
// main stracture
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Flowbite>
          <RouterProvider router={Routes} />
        </Flowbite>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
