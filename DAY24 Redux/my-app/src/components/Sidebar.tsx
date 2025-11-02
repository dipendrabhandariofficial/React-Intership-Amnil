import { useSelector } from "react-redux";
import type { RootState } from "../redux/Store";
import "./Sidebar.css";

export default function Sidebar() {
  const isSidebarOpen = useSelector((state: RootState) => state.ui.isSidebarOpen);

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <h2>Menu</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </nav>
    </aside>
  );
}