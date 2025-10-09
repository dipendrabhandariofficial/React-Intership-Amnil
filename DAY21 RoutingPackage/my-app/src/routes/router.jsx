import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import ErrorBoundary from "../components/ErrorBoundary ";
import ProtectedLayout, { requireAuth } from "../layouts/ProtectedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      //  All routes inside this layout are protected
      {
        element: <ProtectedLayout />,
        loader: requireAuth,
        children: [
          { path: "home", element: <Home /> },
          // can later add more routes here
          // { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },
]);

export default router;
