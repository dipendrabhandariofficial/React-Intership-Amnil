import  { useContext } from "react";
import { NavigationContext } from "./NavigationProvider";

const Route = ({ href, children }) => {
  const { pathname } = useContext(NavigationContext);
  return pathname === href ? children : null;
};

export default Route;
