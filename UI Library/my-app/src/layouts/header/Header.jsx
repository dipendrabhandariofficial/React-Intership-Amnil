import React from "react";
import {
  Heart,
  GitBranchPlus,
  Sun,
  Moon,
  Search,
  PawPrint,
  MenuIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Dropdown from "../../components/dropdown/Dropdown";

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  const navigate = useNavigate();

  const goTo = (link) => {
    navigate(link);
  };
  const options = ["3.27.1", "3.26.0", "3.25.0"];

  return (
    <header className="header overflow-x-hidden">
      <div className="header-left">
        <button className="menu-btn" aria-label="Open menu" onClick={toggleSidebar}>
          <MenuIcon/>
        </button>
        <a href="/" className="logo">
          <div className="logo-icon">
            <PawPrint />
          </div>
          <span>Deeps</span>
        </a>
        <nav className="nav">
          <a href="#" className="nav-link">
            Docs
          </a>
          <a href="#showcase" className="nav-link">
            Showcase
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
          <a href="#guides" className="nav-link">
            Guides
          </a>
        </nav>
      </div>

      <div className="header-actions z-50">
        <a
          href="https://dipendrabhandari.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="sponsor-btn"
        >
          <Heart size={16} fill="#e53e3e" color="#e53e3e" />
          <span>Dipendra Bhandari</span>
        </a>
        <Dropdown
          options={options}
          placeholder="Version"
          onSelect={(value) => console.log("Selected:", value)}
          className="version-select"
          id="version-dropdown"
          width="120px"
        />
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search..." className="search-input" />
          <span className="search-shortcut">⌘K</span>
        </div>
        <button
          className="icon-btn"
          onClick={() =>
            window.open(
              "https://github.com/dipendrabhandariofficial",
              "_blank"
            )
          }
        >
          <GitBranchPlus size={20} />
        </button>
        <button className="icon-btn themeicon" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;