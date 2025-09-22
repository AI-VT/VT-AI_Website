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

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="lessons" element={<Lessons />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
