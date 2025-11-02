import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate =useNavigate();
    const handleLogout=()=>{
      localStorage.removeItem("authtoken")
      navigate("/login")
    }
  return (
    <div>
      <h1> Dashboard</h1>
      <Outlet/>
      <div>
        <Outlet />
      </div>
      <button onClick={handleLogout} style={{border:"1px red solid"}}>  Logout</button>
    </div>
  );
};

export default Dashboard;
