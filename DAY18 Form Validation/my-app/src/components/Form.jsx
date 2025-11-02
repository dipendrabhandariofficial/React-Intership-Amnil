import React, { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import "./Formstyle.css";

const Form = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    country: "",
    dob: "",
    phone: "",
    website: "",
    terms: false,
    message: "",
  };

  const rules = {
    name: {
      isRequired: true,
      minLength: 3,
      maxLength: 50,
      msg: {
        isRequired: "Name is required",
        minLength: "Name must be at least 3 characters",
        maxLength: "Name cannot exceed 50 characters",
      },
    },
    email: {
      isRequired: true,
      pattern: "email",
      msg: {
        isRequired: "Email is required",
        pattern: "Please enter a valid email address",
      },
    },
    password: {
      isRequired: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      msg: {
        isRequired: "Password is required",
        minLength: "Password must be at least 8 characters",
        pattern: "Password must contain uppercase, lowercase, and number",
      },
    },
    confirmPassword: {
      isRequired: true,
      matches: "password",
      msg: {
        isRequired: "Please confirm your password",
        matches: "Passwords do not match",
      },
    },
    age: {
      isRequired: true,
      min: 18,
      max: 120,
      msg: {
        isRequired: "Age is required",
        min: "You must be at least 18 years old",
        max: "Please enter a valid age",
      },
    },
    gender: {
      isRequired: true,
      msg: {
        isRequired: "Please select your gender",
      },
    },
    country: {
      isRequired: true,
      msg: {
        isRequired: "Please select a country",
      },
    },
    dob: {
      isRequired: true,
      custom: (value) => {
        if (!value) return null;
        const date = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        if (age < 18) return "You must be at least 18 years old";
        if (date > today) return "Date of birth cannot be in the future";
        return null;
      },
      msg: {
        isRequired: "Date of birth is required",
      },
    },
    phone: {
      isRequired: false,
      pattern: "phone",
      msg: {
        pattern: "Please enter a valid phone number",
      },
    },
    website: {
      isRequired: false,
      pattern: "url",
      msg: {
        pattern: "Please enter a valid URL (e.g., https://example.com)",
      },
    },
    terms: {
      isRequired: true,
      custom: (value) => {
        if (!value) return "You must accept the terms and conditions";
        return null;
      },
    },
    message: {
      isRequired: true,
      minLength: 10,
      maxLength: 100,
      msg: {
        isRequired: "Message is required",
        minLength: "Message must be at least 10 characters",
        maxLength: "Message cannot exceed 500 characters",
      },
    },
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    showError,
    resetForm,
    isSubmitting,
  } = useFormValidation(initialValues, rules, {
    validateOnChange: false,
    validateOnBlur: true,
    resetOnSubmit: false,
  });

  // Success callback
  const onSuccess = (data) => {
    console.log("Form Submitted Successfully:", data);
    setShowSuccess(true);
    resetForm();
  };

  // Error callback
  const onError = (errors) => {
    console.error("Form validation failed:", errors);
  };

  const closeModal = () => setShowSuccess(false);

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSuccess, onError)} noValidate>
        {/* Name */}
        <div className="form-group">
          <label>Name: *</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("name") ? "error-border" : ""}
            placeholder="Enter your full name"
          />
          {showError("name") && <span className="error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email: *</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("email") ? "error-border" : ""}
            placeholder="your.email@example.com"
          />
          {showError("email") && <span className="error">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password: *</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("password") ? "error-border" : ""}
            placeholder="Min 8 chars, upper, lower & number"
          />
          {showError("password") && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password: *</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("confirmPassword") ? "error-border" : ""}
            placeholder="Re-enter your password"
          />
          {showError("confirmPassword") && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age: *</label>
          <input
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("age") ? "error-border" : ""}
            placeholder="Must be 18+"
          />
          {showError("age") && <span className="error">{errors.age}</span>}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender: *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={values.gender === "male"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={values.gender === "female"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={values.gender === "other"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Other
            </label>
          </div>
          {showError("gender") && (
            <span className="error">{errors.gender}</span>
          )}
        </div>

        {/* Country */}
        <div className="form-group">
          <label>Country: *</label>
          <select
            name="country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("country") ? "error-border" : ""}
          >
            <option value="">Select Country</option>
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
          </select>
          {showError("country") && (
            <span className="error">{errors.country}</span>
          )}
        </div>

        {/* DOB */}
        <div className="form-group">
          <label>Date of Birth: *</label>
          <input
            type="date"
            name="dob"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("dob") ? "error-border" : ""}
          />
          {showError("dob") && <span className="error">{errors.dob}</span>}
        </div>

        {/* Phone (Optional) */}
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("phone") ? "error-border" : ""}
            placeholder="+1234567890"
          />
          {showError("phone") && <span className="error">{errors.phone}</span>}
        </div>

        {/* Website (Optional) */}
        <div className="form-group">
          <label>Website:</label>
          <input
            type="url"
            name="website"
            value={values.website}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("website") ? "error-border" : ""}
            placeholder="https://yourwebsite.com"
          />
          {showError("website") && (
            <span className="error">{errors.website}</span>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message: *</label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("message") ? "error-border" : ""}
            placeholder="Tell us about yourself (10-500 characters)"
            rows="4"
          ></textarea>
          {showError("message") && (
            <span className="error">{errors.message}</span>
          )}
          <small className="char-count">
            {values.message.length}/500 characters
          </small>
        </div>

        {/* Terms */}
        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            I accept the Terms & Conditions *
          </label>
          {showError("terms") && <span className="error">{errors.terms}</span>}
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Success Modal */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>✓ Form Submitted Successfully!</h3>
            <p>Thank you for registering. We'll get back to you soon.</p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;