import Image from 'next/image';
import { about, cfaCredentialUrl, experience, focus, hero, olympiad, projects, site } from './data';
import CvButton from './components/CvButton';
import { ids } from './seo';
import Timeline from './components/Timeline';
import VideoEmbed from './components/VideoEmbed';

// Structured data: a WebSite and a ProfilePage whose main entity is the Person.
const personId = ids.person;
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': ids.website,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      isPartOf: { '@id': ids.website },
      dateModified: site.updated,
      inLanguage: 'en',
      mainEntity: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      url: site.url,
      image: `${site.url}/rafid_hero.webp`,
      email: `mailto:${site.email}`,
      description: site.description,
      jobTitle: 'Finance graduate and researcher',
      address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
      knowsAbout: [
        'Financial modeling',
        'Corporate finance',
        'Valuation',
        'Econometrics',
        'Financial inclusion',
        'Private sector development',
      ],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Bangladesh University of Professionals' },
        { '@type': 'EducationalOrganization', name: 'Notre Dame College' },
        { '@type': 'EducationalOrganization', name: 'Govt. Laboratory High School, Rajshahi' },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'Chartered Financial Analyst (CFA) Level I',
        credentialCategory: 'Exam passed',
        url: cfaCredentialUrl,
      },
      worksFor: [
        { '@type': 'Organization', name: 'Bangladesh Economics Olympiad', url: 'https://ecolympbd.org' },
        { '@type': 'CollegeOrUniversity', name: 'Bangladesh University of Professionals', url: 'https://bup.edu.bd' },
      ],
      sameAs: [site.linkedin, site.facebook, 'https://alumni.bup.edu.bd/student-profile/1080', olympiad.committeeUrl],
      subjectOf: [{ '@id': `${site.url}/#btv-video` }, { '@id': `${site.url}/#press-new-age` }],
    },
    {
      '@type': 'VideoObject',
      '@id': `${site.url}/#btv-video`,
      name: olympiad.press.video.title,
      alternateName: olympiad.press.video.titleEn,
      description: `${olympiad.press.body} Published by ${olympiad.press.video.channel} on YouTube.`,
      thumbnailUrl: `${site.url}${olympiad.press.video.thumbnail}`,
      uploadDate: olympiad.press.video.uploadDate,
      duration: olympiad.press.video.duration,
      embedUrl: olympiad.press.video.embedUrl,
      contentUrl: olympiad.press.video.watchUrl,
      inLanguage: 'bn',
      publisher: { '@type': 'Organization', name: olympiad.press.video.channel, url: 'https://www.youtube.com/@bangladeshtelevisionnews' },
      about: { '@id': personId },
      isFamilyFriendly: true,
    },
    {
      '@type': 'NewsArticle',
      '@id': `${site.url}/#press-new-age`,
      headline: olympiad.news[0].title,
      url: olympiad.news[0].url,
      datePublished: olympiad.news[0].isoDate,
      inLanguage: 'en',
      articleSection: olympiad.news[0].section,
      publisher: { '@type': 'NewsMediaOrganization', name: olympiad.news[0].source, url: 'https://www.newagebd.net' },
      mentions: { '@id': personId },
    },
  ],
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

      {/* OLYMPIAD: two photographs, the committee listing and the BTV appearance */}
      <section className="section" id="olympiad">
        <div className="container">
          <div className="head-split">
            <h2>{olympiad.heading}</h2>
            <div className="head-aside">
              <p className="lead">{olympiad.lead}</p>
              <a className="btn btn--line" href={olympiad.committeeUrl} target="_blank" rel="noopener noreferrer">
                See the committee
              </a>
            </div>
          </div>
          <div className="oly-photos">
            {olympiad.photos.map((p) => (
              <figure key={p.src} className="oly-photo">
                <div className="oly-frame">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    sizes="(min-width: 960px) 45vw, 100vw"
                  />
                </div>
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="press">
            <div className="press-copy">
              <h3>{olympiad.press.heading}</h3>
              <p>{olympiad.press.body}</p>
              <p className="press-title" lang="bn">
                {olympiad.press.video.title}
              </p>
              <p className="press-credit">{olympiad.press.video.channel}</p>
              <a className="btn btn--ink" href={olympiad.press.video.watchUrl} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </div>
            <VideoEmbed
              id={olympiad.press.video.id}
              title={olympiad.press.video.title}
              thumbnail={olympiad.press.video.thumbnail}
              thumbnailAlt={`${site.name} speaking on BTV about the Bangladesh Economics Olympiad`}
              label="Play the BTV appearance"
            />
          </div>
          <div className="news">
            <h3>In the news</h3>
            <ul className="news-list">
              {olympiad.news.map((n) => (
                <li key={n.url}>
                  <a className="news-card" href={n.url} target="_blank" rel="noopener noreferrer">
                    <span className="news-title">{n.title}</span>
                    <span className="news-mention">{n.mention}</span>
                    <span className="news-meta">
                      {n.source}, {n.section}, <time dateTime={n.isoDate}>{n.date}</time>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
    </>
  );
}
