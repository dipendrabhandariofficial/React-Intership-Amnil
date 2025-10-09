import React, { useEffect } from "react";
import { useNavigate, Link, replace } from "react-router-dom";
import Form from "../components/Form/Form";
import {  usePrevPath } from "../context/RouteContext";

const Signup = () => {
  const navigate = useNavigate();
  const {PrevPath}= usePrevPath();

  // useEffect(()=>{
  //   const user =sessionStorage.getItem("user");
  //   if (user &&  PrevPath?.current ==="/home"){
  //     sessionStorage.removeItem("user");
  //     alert("you have been logged out");
  //     navigate("/signup",{replace:true});
  //   }

  // },[navigate])
const handleSignup = async (values) => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert("Error during signup");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Server error");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Signup</h2>
      <Form isSignup={true} onSubmit={handleSignup} />
      <p style={{ textAlign: "center" }}>
        Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>Login</Link>
      </p>
    </div>
  );
};

export default Signup;
