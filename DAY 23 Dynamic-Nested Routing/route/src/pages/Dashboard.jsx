import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate =useNavigate();
    const goback=()=>{[
        navigate('/')

    ]}
  return (
    <div>
      <h1> Dashboard</h1>
      <nav style={{display:"flex", gap:'8px', justifyContent:'space-around'}}>
        <Link to="profile">Profile</Link> ||
        <Link to="setting">Setting</Link>
      </nav>
      <div>
        <Outlet />
      </div>
      <button onClick={goback} style={{border:"1px red solid"}}>  App</button>
    </div>
  );
};

export default Dashboard;
