import Image from 'next/image';
import Link from 'next/link';
import { educationPage } from '../data';
import { breadcrumbLd, pageMetadata, webPageLd } from '../seo';

export const metadata = pageMetadata({
  title: 'Education and academic qualifications',
  description:
    'Academic background of Rafid Abrar: MBA and BBA in Finance and Banking at BUP, Notre Dame College, Govt. Laboratory High School Rajshahi and CFA Level I.',
  path: '/education',
  markdownPath: '/education.md',
});

const jsonLd = [
  breadcrumbLd([{ name: 'Education', path: '/education' }]),
  webPageLd({
    type: 'AboutPage',
    name: 'Education and academic qualifications',
    path: '/education',
    description: 'Academic background and qualifications of Rafid Abrar.',
  }),
];

export default function EducationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-top">
        <div className="container">
          <header className="page-head">
            <h1>{educationPage.title}</h1>
            <p className="lead">{educationPage.lead}</p>
          </header>

          <div className="edu-cards">
            {educationPage.entries.map((e, i) => {
              const website = 'website' in e ? e.website : undefined;
              const current = 'current' in e && e.current;
              const image = 'image' in e ? e.image : undefined;
              const imageAlt = 'imageAlt' in e ? e.imageAlt : '';
              const credit = 'credit' in e ? e.credit : undefined;
              const contain = 'imageFit' in e && e.imageFit === 'contain';
              const linkLabel = 'linkLabel' in e ? e.linkLabel : undefined;
              const extra = 'extraLink' in e ? e.extraLink : undefined;
              return (
                <article key={e.id} className="edu-card">
                  <div
                    className={`edu-mark${current ? ' edu-mark--now' : ''}${image ? ' edu-mark--photo' : ''}${contain ? ' edu-mark--badge' : ''}`}
                    aria-hidden={image ? undefined : true}
                  >
                    {image ? (
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 960px) 30vw, 100vw"
                        priority={i === 0}
                      />
                    ) : (
                      <span>{e.mark}</span>
                    )}
                  </div>
                  <div className="edu-body">
                    <h2>{e.title}</h2>
                    <p className="edu-inst">{e.institution}</p>
                    <p className="edu-period">
                      {e.period}
                      {current ? (
                        <>
                          {' '}
                          <span className="tag">Current</span>
                        </>
                      ) : null}
                    </p>
                    <p className="edu-desc">{e.description}</p>
                    {website ? (
                      <a className="edu-link" href={website} target="_blank" rel="noopener noreferrer">
                        {linkLabel ?? `Visit ${website.replace(/^https?:\/\//, '').replace(/\/$/, '')}`}
                      </a>
                    ) : null}
                    {extra ? (
                      <a className="edu-link" href={extra.url} target="_blank" rel="noopener noreferrer">
                        {extra.label}
                      </a>
                    ) : null}
                    {credit ? (
                      <p className="edu-credit">
                        <a href={credit.url} target="_blank" rel="noopener noreferrer">
                          {credit.text}
                        </a>
                        ,{' '}
                        <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer license">
                          {credit.license}
                        </a>
                        , via Wikimedia Commons. Compressed and cropped for this page.
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="edu-cta">
            <h2>Finance training, hands-on research.</h2>
            <p>The degrees and the CFA exam sit alongside teaching, research and leading the Economics Olympiad.</p>
            <div className="actions">
              <Link className="btn btn--ink" href="/#experience">
                See experience
              </Link>
              <Link className="btn btn--line" href="/contact">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
