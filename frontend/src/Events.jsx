import { useState } from "react";
import "./Events.css";

const events = [
  {
    id: 1,
    title: "Weekly Lecture",
    description: "Join us for an engaging talk on tech and innovation.",
    tags: ["Lecture", "Community"],
    time: "2:00pm - 3:00pm",
    location: "Torgersen Hall 1060",
    start: "2025-09-28T14:00:00-04:00",
    end: "2025-09-28T15:00:00-04:00",
    categories: ["Talks"],
    rsvp: "",
    calendar: ""
  }
];

function EmptyState({ message = "No events right now" }) {
  return (
    <section className="empty">
      <div className="empty-card">
        <div className="empty-badge">{message}</div>
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

const byStartAsc = (a, b) => new Date(a.start) - new Date(b.start);
const byStartDesc = (a, b) => new Date(b.start) - new Date(a.start);

const toDayStart = (d) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

const isPast = (e) => {
  const today = toDayStart(new Date());
  const eventEnd = toDayStart(new Date(e.end || e.start));
  return eventEnd < today;
};

const isUpcoming = (e) => {
  const today = toDayStart(new Date());
  const eventStart = toDayStart(new Date(e.start));
  return eventStart > today;
};

function EventCard({ e }) {
  const d = new Date(e.start);
  const month = d.toLocaleString("en-US", { month: "short" });
  const day = d.getDate();

  return (
    <article className="event">
      <div className="date-badge">
        <span className="month">{month}</span>
        <span className="day">{day}</span>
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

  const filtered = (() => {
    if (activeTab === "Upcoming") return [...events].filter(isUpcoming).sort(byStartAsc);
    if (activeTab === "Past") return [...events].filter(isPast).sort(byStartDesc);
    return events.filter(e => (e.categories || []).includes(activeTab)).sort(byStartAsc);
  })();

  return (
    <>
      {/* 🧠 Page-level SEO */}
      <title>Events | VT@AI</title>
      <meta
        name="description"
        content="View upcoming and past events from VT@AI — Virginia Tech's AI & Machine Learning Club. Talks, workshops, project nights, and community meetups."
      />

      {/* 🧠 Structured Data (JSON-LD) for Google Events */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": events[0]?.title,
          "startDate": events[0]?.start,
          "endDate": events[0]?.end,
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": events[0]?.location,
            "address": "Blacksburg, VA"
          },
          "description": events[0]?.description,
          "organizer": {
            "@type": "Organization",
            "name": "VT@AI - Virginia Tech AI & Machine Learning Club",
            "url": "https://vtai.netlify.app"
          }
        })}
      </script>

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

        {filtered.length === 0 ? (
          <EmptyState message={`No ${activeTab.toLowerCase()} events`} />
        ) : (
          <section className="grid">
            {filtered.map(e => <EventCard key={e.id} e={e} />)}
          </section>
        )}
      </main>
    </>
  );
}
