import { Link } from "react-router-dom";
import "./Projects.css";

const projects = []; // add { id, title, desc, stack, link } when ready

function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <h3>{p.title}</h3>
      <p className="desc">{p.desc}</p>
      {p.stack && <p className="stack">{p.stack}</p>}
      {p.link && (
        <a className="btn btn-outline" href={p.link} target="_blank" rel="noreferrer">
          View Repo
        </a>
      )}
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
