import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: "donkeycar",
    title: "DonkeyCar Imitation Learning",
    desc:
      "A reinforcement and imitation learning project built around the DonkeyCar simulator. Includes conda environment setup, policy training notebooks, and integration with the simulator for testing learned models.",
    stack: "Python • Jupyter Notebook • Miniconda • DonkeyCar Simulator",
    link: "https://github.com/ChrisNassif/donkeycar_imitation_learning"
  },
  {
    id: "discordbot",
    title: "Discord Bot",
    desc:
      "A custom-built Discord bot with modular features for games, server management, and automation. Uses JSON config, a guild whitelist, and extensible commands to enhance server interactivity and efficiency.",
    stack: "Python • discord.py • JSON • CSV",
    // repo is private — leave link empty to hide the button
    link: ""
  },
  {
    id: "telescope",
    title: "Telescope — AI-Generated Content Detector",
    desc:
      "One-stop detector for AI-generated text, code, and images. Reproduces & improves Binoculars and Aeroblade with smaller, faster models. Uses cross-perplexity for text/code and VAE-based latent-space signals for images.",
    stack: "Python • Flask • PyTorch • Hugging Face • JavaScript • HTML/CSS",
    demo: "http://joshfcooper.com/telescope",              // use HTTP per disclaimer
    devpost: "https://devpost.com/software/telescope-4kx9u6",
    note: "Use HTTP (not HTTPS) for the live demo."
  }
];

function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <h3>{p.title}</h3>
      <p className="desc">{p.desc}</p>
      {p.stack && <p className="stack">{p.stack}</p>}

      <div className="btn-row">
        {p.demo && (
          <a className="btn btn-primary" href={p.demo} target="_blank" rel="noreferrer">
            Try It Now
          </a>
        )}
        {p.devpost && (
          <a className="btn btn-outline" href={p.devpost} target="_blank" rel="noreferrer">
            Devpost
          </a>
        )}
        {p.link && (
          <a className="btn btn-outline" href={p.link} target="_blank" rel="noreferrer">
            View Repo
          </a>
        )}
      </div>

      {p.note && <p className="note">{p.note}</p>}
    </article>
  );
}

export default function Projects() {
  return (
    <main className="page projects">
      <header className="page-head">
        <h1>Projects</h1>
        <p>Club builds, hackathon prototypes, and long-term research efforts.</p>
      </header>

      {projects.length === 0 ? (
        <section className="empty">
          <div className="empty-card">
            <h2>None currently</h2>
            <p>
              We’re kicking off builds soon. Bring an idea, join a team, or propose a project at our next meeting!
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/events">See Events</Link>
              <Link className="btn btn-outline" to="/contact">Contact Us</Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="grid">
          {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
        </section>
      )}
    </main>
  );
}
