import { useContext } from "react";
import { NavigationContext } from "./NavigationProvider";

const Link = ({ to, children, ...props }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault(); // stop page reload
    navigate(to);       // call navigate() from context
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;
