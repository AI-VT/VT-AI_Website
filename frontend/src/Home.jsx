import logo from "./logo.png";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* 🧠 SEO for the Home page */}
      <title>VT@AI | Virginia Tech AI & Machine Learning Club</title>
      <meta
        name="description"
        content="VT@AI is Virginia Tech's AI & Machine Learning Club. Explore workshops, projects, events, and community opportunities in artificial intelligence and ML."
      />

      <section className="Home-container">
        <img className="logo-picture" src={logo} alt="VT@AI logo" />

        <h2 className="logo-text">Welcome to AI at Virginia Tech!</h2>

        <p className="body-text">
          We’re the Artificial Intelligence & Machine Learning Club at Virginia Tech —
          exploring ML concepts, building projects, discussing innovations, and
          connecting with peers, faculty, and industry.
        </p>

        <div className="cta-row">
          <a
            className="btn btn-primary"
            href="https://discord.gg/jAYYvFAurX"
            target="_blank"
            rel="noreferrer"
          >
            Join the Discord
          </a>

          {/* FIXED: route must be lowercase to match your router */}
          <Link className="btn btn-outline" to="/projects">
            View Projects
          </Link>
        </div>
      </section>
    </>
  );
}
