import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import App from "./App";
import HomePage from "./pages/homepage/HomePage";
import SignupPage from "./pages/signupPage/SignupPage";
import LoginPage from "./pages/loginpage/LoginPage";
import LogoutPage from "./pages/logoutpage/LogoutPage";
import AdminPage from "./pages/adminpage/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/inscription",
        element: <SignupPage />,
      },
      {
        path: "/connexion",
        element: <LoginPage />,
      },
      {
        path: "/deconnexion",
        element: <LogoutPage />,
      },

      {
        path: "/patate",
        element: <AdminPage />,
      },
      {
        path: "/*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
