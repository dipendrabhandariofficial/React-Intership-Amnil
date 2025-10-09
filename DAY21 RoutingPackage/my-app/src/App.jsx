import React from "react";
import { Outlet } from "react-router-dom";
import { RouteProvider } from "./context/RouteContext"; 

const App = () => {
  return (
    <RouteProvider>
      <div className="container">
        <Outlet />
      </div>
    </RouteProvider>
  );
};

export default App;
