// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import "./Formstyle.css";

const LoginForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const initialValues = {
    firstname: "",
    email: "",
    password: "",
  };
  const rules = {
    firstname: { isRequired: true, minLength: 3 },
    email: { isRequired: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    password: { minLength: 5, isRequired: true, maxLength: 15 },
  };

  // Only fields relevant for login
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    showError,
    setValues,
  } = useFormValidation(initialValues, rules);

  //  Callback when form is valid
  const onSuccess = (data) => {
    console.log("Login Successful:", data);
    setShowSuccess(true);

    // Reset form
    setValues({
      firstname: "",
      email: "",
      password: "",
    });
  };


  const closeModal = () => setShowSuccess(false);

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSuccess)} noValidate>
        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("email") ? "error-border" : ""}
            placeholder="Enter your email"
          />
          {showError("email") && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>FirstName:</label>
          <input
            type="text"
            name="firstname"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("firstname") ? "error-border" : ""}
          />
          {showError("firstname") && <span className="error">{errors.firstname}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("password") ? "error-border" : ""}
            placeholder="Enter your password"
          />
          {showError("password") && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>

      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Login Successful!</h3>
            <p>You have successfully logged in.</p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
