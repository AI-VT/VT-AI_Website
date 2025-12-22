import "./Contact.css";

const socials = [
  { name: "GitHub",   handle: "@AI-VT",               url: "https://github.com/AI-VT" },
  { name: "Discord",  handle: "AI @ VT",              url: "https://discord.gg/jAYYvFAurX" },
  { name: "Instagram",handle: "@vtaiml",              url: "https://www.instagram.com/vtaiml/" },
  { name: "LinkedIn", handle: "AI and ML Club at VT", url: "https://www.linkedin.com/company/ai-and-ml-club-vt/" },
];

export default function Contact() {
  return (
    <>
      {/* 🧠 SEO for this page */}
      <title>Contact | VT@AI</title>
      <meta
        name="description"
        content="Contact VT@AI, Virginia Tech's AI & Machine Learning Club. Reach out with questions, collaboration ideas, event inquiries, or partnership opportunities."
      />

      <main className="page contact">
        <header className="page-head">
          <h1>Contact</h1>
          <p>Say hi, ask about events, or partner with the club.</p>
        </header>

        {/* Socials */}
        <section className="social-grid" aria-label="Social media links">
          {socials.map((s) => (
            <a
              className="social-card"
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{s.name}</h3>
              <p>{s.handle}</p>
            </a>
          ))}
        </section>

        {/* Form */}
        <section className="form-card">
          <h2>Send us a message</h2>

          <form
            action="mailto:vtaiml@vt.edu"
            method="post"
            encType="text/plain"
          >
            <div className="row">
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Hokie Name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@vt.edu"
                  required
                />
              </label>
            </div>

            <label className="block">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="How can we help?"
                required
              />
            </label>

            <div className="cta-row">
              <button className="btn btn-primary" type="submit">
                Send
              </button>

              <a className="btn btn-outline" href="mailto:chrisnassif@vt.edu">
                Email directly
              </a>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
