import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ buttonText, variant="primary" }) => {
    console.log(buttonText, variant);
    
  return (
    <button className={`btn ${variant}`}>
      {buttonText}
    </button>
  );
};
// PropTypes validation
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,     // Required string
  variant: PropTypes.oneOf(["primary", "secondary"]) // Must be either "primary" or "secondary"
};

// Default props
Button.defaultProps = {
  variant: "primary"   // Default variant if not passed
};

export default Button;
