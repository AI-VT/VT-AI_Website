import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header-container">
      <NavLink to="/" end className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/events" className="nav-link">Events</NavLink>
      <NavLink to="/projects" className="nav-link">Projects</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
      <NavLink to="/lessons" className="nav-link">Lessons</NavLink>
    </nav>
  );
}
