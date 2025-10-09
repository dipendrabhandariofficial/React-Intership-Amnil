import "../App.css";

const Tab = ({ label, isActive, onSelect }) => {
  return (
    <div
      className={isActive ? "tabs active-tabs" : "tabs"}
      onClick={onSelect}
    >
      {label}
    </div>
  );
};

export default Tab;
