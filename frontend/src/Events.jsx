import { useState } from "react";
import "./Events.css";

const events = []; // fill later with real events

function EmptyState() {
  return (
    <section className="empty">
      <div className="empty-card">
        <div className="empty-badge">No events right now</div>
        <h2>Check back soon!</h2>
        <p>
          We’re planning the next lineup. Join our Discord or follow our Instagram to get notified.
        </p>
        <div className="cta-row">
          <a className="btn" href="https://discord.gg/jAYYvFAurX" target="_blank" rel="noreferrer">Join Discord</a>
          <a className="btn" href="https://www.instagram.com/vtaiml/" target="_blank" rel="noreferrer">Follow Instagram</a>
        </div>
      </div>
    </section>
  );
}

function EventCard({ e }) {
  return (
    <article className="event">
      <div className="date-badge">
        <span className="month">{e.month}</span>
        <span className="day">{e.day}</span>
      </div>
      <div className="event-body">
        <h3>{e.title}</h3>
        <p>{e.description}</p>
        <ul className="tags">{e.tags.map(t => <li key={t}>{t}</li>)}</ul>
        <div className="meta">
          <span>{e.time}</span>
          <span>{e.location}</span>
        </div>
        <div className="cta-row">
          {e.rsvp && <a className="btn" href={e.rsvp} target="_blank" rel="noreferrer">RSVP</a>}
          {e.calendar && <a className="btn" href={e.calendar} target="_blank" rel="noreferrer">Add to Calendar</a>}
        </div>
      </div>
    </article>
  );
}

export default function Events() {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const tabs = ["Upcoming", "Past", "Workshops", "Talks", "Social"];

  return (
    <main className="page">
      <header className="page-head">
        <h1>Events</h1>
        <p>Talks, workshops, and project nights.</p>

        <div className="chip-row">
          {tabs.map(t => (
            <button
              key={t}
              type="button"
              className={`chip ${activeTab === t ? "chip-active" : ""}`}
              onClick={() => setActiveTab(t)}
              aria-pressed={activeTab === t}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      {events.length === 0 ? (
        <EmptyState />
      ) : (
        <section className="grid">
          {events.map(e => <EventCard key={e.id} e={e} />)}
        </section>
      )}
    </main>
  );
}
