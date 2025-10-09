import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { Link } from "react-router-dom";
import { usePrevPath } from "../context/RouteContext";

const Login = () => {
  const navigate = useNavigate();
  const prevPath = usePrevPath(); // get from sessionStorage
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (user && prevPath === "/home") {
      sessionStorage.removeItem("user");
      // alert("You have been logged out.");
      navigate("/login", { replace: true });
    }
  }, [user, prevPath, navigate]);

  const handleLogin = async (values) => {
    try {
      const res = await fetch(
        `http://localhost:3000/users?username=${values.username}&password=${values.password}`
      );
      const data = await res.json();

      if (data.length > 0) {
        const { id, name, username } = data[0];
        sessionStorage.setItem("user", JSON.stringify({ id, name, username }));
        navigate("/home");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Form isSignup={false} onSubmit={handleLogin} />
      <p style={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
