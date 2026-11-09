import Image from 'next/image';
import { about, contact, credentials, education, experience, focus, hero, nav, projects, site } from './data';
import CvButton from './components/CvButton';
import Timeline from './components/Timeline';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: 'Finance graduate and researcher',
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Bangladesh University of Professionals' },
  sameAs: [site.linkedin],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO: the photograph fills its panel; the name and a line sit beneath it. */}
      <section className="hero" id="top">
        <div className="hero-photo">
          <Image
            src="/rafid_hero.webp"
            alt={`Portrait of ${site.name}, outdoors in a patterned shirt`}
            fill
            priority
            fetchPriority="high"
            sizes="(min-width: 960px) calc(100vw - 20rem), 100vw"
          />
        </div>
        <div className="hero-text">
          <h1>{site.name}</h1>
          <div className="hero-side">
            <p className="lead">
              {hero.lead} <mark>{hero.highlight}</mark>.
            </p>
            <div className="actions">
              <a className="btn btn--ink" href={`mailto:${site.email}`}>
                Email Rafid
              </a>
              <CvButton />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <div className="head-split">
            <h2>{about.heading}</h2>
            <p className="lead">{about.lead}</p>
          </div>
          <div className="bento">
            {about.cells.map((c, i) => (
              <div key={c.note} className={`cell ${i === 0 ? 'cell--lead' : 'cell--wide'}`}>
                <p className="cell-note">{c.note}</p>
                {'big' in c ? <p className="cell-big num">{c.big}</p> : <p className="cell-word">{c.word}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container">
          <div className="head-split">
            <h2>Where I have worked and led.</h2>
          </div>
          <Timeline items={experience} />
        </div>
      </section>

      {/* FOCUS */}
      <section className="section" id="focus">
        <div className="container focus">
          <h2>{focus.heading}</h2>
          <ul className="focus-rows">
            {focus.items.map((f) => (
              <li key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="work">
        <div className="container">
          <div className="head-split">
            <h2>{projects.heading}</h2>
            <p className="lead">{projects.lead}</p>
          </div>
          <ol className="rows rows--numbered">
            {projects.items.map((p, i) => (
              <li key={p.title} className="row">
                <p className="row-year num">{i + 1}</p>
                <div className="row-main">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
                <p className="row-when row-when--muted">Details to come</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="container">
          <h2 className="visually-hidden">Education</h2>
          <div className="edu">
            <Timeline items={education} className="edu-timeline" />
            <div className="creds">
              {credentials.map((c) => (
                <div key={c.title} className={`cred cred--${c.tone}`}>
                  <p className="cell-note">{c.note}</p>
                  <h3>{c.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section--close" id="contact">
        <div className="container">
          <div className="contact">
            <h2>{contact.heading}</h2>
            <p className="lead">{contact.lead}</p>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="actions">
              <a className="btn btn--line" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                Open LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="foot-in">
          <p className="foot-mark">{site.name}</p>
          <div className="foot-col">
            <h2 className="foot-h">Pages</h2>
            <ul>
              {nav
                .filter((n) => ['experience', 'work', 'education', 'contact'].includes(n.id))
                .map((n) => (
                  <li key={n.id}>
                    <a href={n.href}>{n.label}</a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="foot-col">
            <h2 className="foot-h">Elsewhere</h2>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>Email</a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h2 className="foot-h">Based in</h2>
            <p>{site.location}</p>
            <p className="foot-legal">&copy; {new Date().getFullYear()} {site.name}.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
