import logo from "./logo.png";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="Home-container">
      <img className="logo-picture" src={logo} alt="VT@AI" />
      <h2 className="logo-text">Welcome to AI at Virginia Tech!</h2>
      <p className="body-text">
        We’re the Artificial Intelligence & Machine Learning Club at Virginia Tech —
        exploring ML concepts, building projects, discussing innovations, and
        connecting with peers, faculty, and industry.
      </p>
      <div className="cta-row">
        <a className="btn btn-primary" href="https://discord.gg/jAYYvFAurX">Join the Club</a>
        <Link className="btn btn-outline" to="/Projects">View Projects</Link>
      </div>
    </section>
  );
}
