import PropTypes from "prop-types";
import "./CounterButton.css"; // external css

const CounterButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="counter-btn">
      {label}
    </button>
  );
};

CounterButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CounterButton;
