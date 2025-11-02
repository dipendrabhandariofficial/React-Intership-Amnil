import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/uiSlice";
import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <FaBars 
        className="menu-icon" 
        onClick={() => dispatch(toggleSidebar())}
      />
      <h1 className="title">Dashboard</h1>
    </header>
  );
}