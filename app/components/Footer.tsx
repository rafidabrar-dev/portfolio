import Link from 'next/link';
import { nav, site } from '../data';

export default function Footer() {
  return (
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
                  <Link href={n.href}>{n.label}</Link>
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
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h2 className="foot-h">Based in</h2>
          <p>{site.location}</p>
          <p className="foot-legal">
            &copy; {new Date().getFullYear()} {site.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
