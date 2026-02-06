// src/Projects.jsx
import { Link } from "react-router-dom";
import "./Projects.css";
import donkeycarDemo from "./ai_ml_donkeycar_demo_video.mp4";

const projects = [
  {
    id: "donkeycar",
    title: "DonkeyCar Imitation Learning",
    tagline:
      "This demo is fully controlled by a machine-learning policy (imitation learning).",
    desc:
      "A reinforcement and imitation learning project built around the DonkeyCar simulator. Includes conda environment setup, policy training notebooks, and integration with the simulator for testing learned models.",
    stack: "Python • Jupyter Notebook • Miniconda • DonkeyCar Simulator",
    link: "https://github.com/ChrisNassif/donkeycar_imitation_learning",
    videoSrc: donkeycarDemo
  },
  {
    id: "discordbot",
    title: "Discord Bot",
    desc:
      "A custom-built Discord bot with modular features for games, server management, and automation. Uses JSON config, a guild whitelist, and extensible commands to enhance server interactivity and efficiency.",
    stack: "Python • discord.py • JSON • CSV",
    link: "" // private repo → leaves 'View Repo' button hidden
  },
  {
    id: "telescope",
    title: "Telescope — AI-Generated Content Detector",
    desc:
      "One-stop detector for AI-generated text, code, and images. Reproduces & improves Binoculars and Aeroblade with smaller, faster models. Uses cross-perplexity for text/code and VAE-based latent-space signals for images.",
    stack: "Python • Flask • PyTorch • Hugging Face • JavaScript • HTML/CSS",
    demo: "http://joshfcooper.com/telescope", // use HTTP per their hosting
    devpost: "https://devpost.com/software/telescope-4kx9u6",
    note: "Use HTTP (not HTTPS) for the live demo."
  }
];

function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <h3>{p.title}</h3>

      {p.tagline && <p className="tagline">{p.tagline}</p>}
      <p className="desc">{p.desc}</p>
      {p.stack && <p className="stack">{p.stack}</p>}

      {p.videoSrc && (
        <div className="embed">
          <video
            className="video"
            src={p.videoSrc}
            controls
            playsInline
            muted
            loop
            preload="metadata"
          >
            Sorry, your browser doesn’t support embedded videos.
          </video>
        </div>
      )}

      <div className="btn-row">
        {p.devpost && (
          <a
            className="btn btn-outline"
            href={p.devpost}
            target="_blank"
            rel="noreferrer"
          >
            Devpost
          </a>
        )}
        {p.link && (
          <a
            className="btn btn-outline"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
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
    <>
      {/* 🧠 SEO for Projects page */}
      <title>Projects | VT@AI</title>
      <meta
        name="description"
        content="Explore VT@AI projects, including DonkeyCar imitation learning, custom Discord bots, and Telescope—an AI-generated content detector built with PyTorch, Flask, and Hugging Face."
      />

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
                We’re kicking off builds soon. Bring an idea, join a team, or
                propose a project at our next meeting!
              </p>
              <div className="cta-row">
                <Link className="btn btn-primary" to="/events">
                  See Events
                </Link>
                <Link className="btn btn-outline" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <section className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </section>
        )}
      </main>
    </>
  );
}
