import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header-container" aria-label="Main navigation">
      <NavLink 
        to="/" 
        end 
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        About
      </NavLink>

      <NavLink 
        to="/events"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Events
      </NavLink>

      <NavLink 
        to="/projects"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Projects
      </NavLink>

      <NavLink 
        to="/contact"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Contact
      </NavLink>

      <NavLink 
        to="/lessons"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Lessons
      </NavLink>
    </nav>
  );
}
