import { site } from '../data';
import { breadcrumbLd, pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Get in touch with Rafid Abrar about financial modeling, research, private sector development and financial inclusion.',
  path: '/contact',
});

const jsonLd = [
  breadcrumbLd([{ name: 'Contact', path: '/contact' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: `${site.url}/contact`,
    mainEntity: { '@type': 'Person', name: site.name, email: site.email },
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-top">
        <div className="container">
          <header className="page-head">
            <h1>Let&rsquo;s talk finance.</h1>
            <p className="lead">Write to me about financial innovation, research or market development.</p>
          </header>

          <div className="contact-grid">
            <div className="contact-list">
              <a className="contact-card contact-card--main" href={`mailto:${site.email}`}>
                <span className="cell-note">Email</span>
                <span className="contact-value">{site.email}</span>
              </a>
              <a className="contact-card" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="cell-note">LinkedIn</span>
                <span className="contact-value contact-value--sm">linkedin.com/in/rafid-abrar</span>
              </a>
              <a className="contact-card" href={site.facebook} target="_blank" rel="noopener noreferrer">
                <span className="cell-note">Facebook</span>
                <span className="contact-value contact-value--sm">facebook.com/rafidabrar.bd</span>
              </a>
              <div className="contact-card">
                <span className="cell-note">Based in</span>
                <span className="contact-value contact-value--sm">{site.location}</span>
              </div>
            </div>

            {/* No server needed: submitting opens the visitor's email app with the message filled in. */}
            <form className="contact-form" action={`mailto:${site.email}`} method="get">
              <h2>Write a message</h2>
              <label>
                <span>Subject</span>
                <input type="text" name="subject" autoComplete="off" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="body" rows={6} required />
              </label>
              <button className="btn btn--ink" type="submit">
                Open in my email app
              </button>
              <p className="form-note">Nothing is sent from this page. Your email app opens with the message ready to send.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
