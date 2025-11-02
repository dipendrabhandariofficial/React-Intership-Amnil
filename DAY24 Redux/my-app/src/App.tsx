import { useSelector } from "react-redux";
import type { RootState } from "./redux/Store";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

export default function App() {
  const isSidebarOpen = useSelector((state: RootState) => state.ui.isSidebarOpen);

  return (
    <div className="app">
      <Sidebar />
      <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <Header />
        <main className="content">
          <h2>Hello World</h2>
          <p>Click the menu icon for sidebar.</p>
        </main>
      </div>
    </div>
  );
}