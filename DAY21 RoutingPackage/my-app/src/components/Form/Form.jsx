import { useState } from "react";
import { useFormValidation } from '../../hooks/useFormValidation';
import { validateForm as validationRules } from '../../utils/validationRules';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Form.css";

const Form = ({ isSignup, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    {
      name: "",
      username: "",
      password: "",
    },
    (values) => validationRules(values, isSignup ? "signup" : "login")
  );

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      {isSignup && (
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
      )}

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>

      <div className="form-group password-field">
        <label>Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          <span className="eye-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit" className="btn-submit">
        {isSignup ? "Signup" : "Login"}
      </button>
    </form>
  );
};

export default Form;
