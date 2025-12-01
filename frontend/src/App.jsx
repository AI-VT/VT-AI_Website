import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      {/* 🧠 Global fallback SEO (overridden by page-level titles/metas) */}
      <title>VT@AI | Virginia Tech AI & Machine Learning Club</title>
      <meta
        name="description"
        content="VT@AI is Virginia Tech's AI & Machine Learning Club. Join us for workshops, projects, and events exploring artificial intelligence, ML, and data science."
      />

      <div className="site">
        {/* Brand, but NOT an <h1> so pages can own the main heading */}
        <div className="brand-title" aria-label="VT at AI">
          VT@AI
        </div>

        <Header />

        {/* Each route (Home, About, Events, etc.) renders here */}
        <Outlet />
      </div>
    </>
  );
}
