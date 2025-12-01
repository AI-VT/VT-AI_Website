import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Home.jsx";
import Events from "./Events.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Lessons from "./Lessons.jsx";

import "./index.css";

// Optional: Scroll to top on route change
// import ScrollToTop from "./ScrollToTop.jsx";

function NotFound() {
  return (
    <>
      <title>Page Not Found | VT@AI</title>
      <main style={{ padding: "4rem", textAlign: "center" }}>
        <h1>404 — Page Not Found</h1>
        <p>This page does not exist. Try using the navigation above.</p>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="lessons" element={<Lessons />} />

          {/* Fallback for unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
