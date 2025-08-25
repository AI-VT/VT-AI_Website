import { useState } from "react";
import "./About.css";

const features = [
  { title: "Hands-on Workshops", desc: "Intro-to-ML, Python notebooks, model evaluation, and practical AI tooling. Come to learn by doing." },
  { title: "Project Sprints", desc: "Small teams ship cool builds—computer vision demos, LLM apps, data viz, and more. Great for résumés." },
  { title: "Tech Talks", desc: "Talks from students, faculty, and industry guests. Learn what’s current and where AI is going next." },
  { title: "Community", desc: "Meet other builders, find collaborators, prep for interviews, and network with mentors & recruiters." },
];

const leaders = [
  { name: "Firstname Lastname", role: "President", link: "" },
  { name: "Firstname Lastname", role: "Vice President", link: "" },
  { name: "Firstname Lastname", role: "Projects Lead", link: "" },
  { name: "Firstname Lastname", role: "Events Lead", link: "" },
];

const milestones = [
  { date: "Fall 2025", text: "Kickoff meeting & recruiting new project teams." },
  { date: "Fall 2025", text: "Weekly workshops + lightning talks." },
  { date: "Spring 2026", text: "Demo Day: shipable project showcases." },
];

const faqs = [
  { q: "Who can join?", a: "All VT students are welcome—no prior ML experience required. Bring curiosity and we’ll help with the rest." },
  { q: "What should I know before coming?", a: "Basic Python or JavaScript helps, but many workshops start from first principles with guided notebooks." },
  { q: "How often do you meet?", a: "Weekly during the semester for workshops or project nights. Special talks/events pop up throughout the term." },
  { q: "How do I get on a project team?", a: "Join a sprint at the start of each term or hop into an existing team via our Discord’s #projects channel." },
];

function Avatar({ name }) {
  const initials = name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
  return <div className="avatar">{initials}</div>;
}

export default function About() {
  const [open, setOpen] = useState(null);

  return (
    <main className="page about">
      <header className="page-head">
        <h1>About VT@AI</h1>
        <p>
          We’re Virginia Tech’s AI & Machine Learning club—learning together,
          building useful tools, and connecting Hokies with opportunities.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="https://discord.gg/jAYYvFAurX" target="_blank" rel="noreferrer">Join our Discord</a>
          <a className="btn btn-outline" href="https://github.com/AI-VT" target="_blank" rel="noreferrer">Explore our GitHub</a>
        </div>
      </header>

      {/* What we do */}
      <section className="grid features">
        {features.map((f) => (
          <article className="card feature" key={f.title}>
            <div className="feature-icon" aria-hidden="true" />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </section>

      {/* Leadership */}
      <section className="leadership">
        <h2>Leadership</h2>
        <div className="grid leaders">
          {leaders.map((m) => (
            <article className="card leader" key={m.name}>
              <Avatar name={m.name} />
              <div className="leader-info">
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                {m.link ? (
                  <a className="mini-link" href={m.link} target="_blank" rel="noreferrer">Contact</a>
                ) : (
                  <span className="mini-link disabled">Contact</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <h2>Milestones</h2>
        <ol className="timeline-list">
          {milestones.map((m, i) => (
            <li className="timeline-item" key={i}>
              <div className="dot" />
              <div className="content">
                <div className="date">{m.date}</div>
                <div className="text">{m.text}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>FAQ</h2>
        <ul className="faq-list">
          {faqs.map((item, i) => (
            <li key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="faq-toggle">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="faq-a">{item.a}</p>}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
