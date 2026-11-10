// Shared site footer. Lives outside /app so it can be reused by any route or layout.
import Link from 'next/link';
import { nav, site } from '@/app/data';

const updated = new Date(site.updated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <p className="foot-mark">{site.name}</p>
        <div className="foot-col">
          <p className="foot-h" id="foot-pages">
            Pages
          </p>
          <nav aria-labelledby="foot-pages">
            <ul>
              {nav
                .filter((n) => ['experience', 'work', 'education', 'contact'].includes(n.id))
                .map((n) => (
                  <li key={n.id}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className="foot-col">
          <p className="foot-h">Elsewhere</p>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <p className="foot-h">Based in</p>
          <p>{site.location}</p>
          <p className="foot-legal">
            &copy; {new Date().getFullYear()} {site.name}.
          </p>
          <p className="foot-legal">
            Last updated <time dateTime={site.updated}>{updated}</time>
          </p>
        </div>
      </div>
      <p className="foot-credit">
        Made by Choto bhai{' '}
        <a href="https://shahoriar.bd" target="_blank" rel="noopener">
          Shahoriar
        </a>
      </p>
    </footer>
  );
}
