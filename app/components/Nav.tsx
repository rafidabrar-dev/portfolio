import Link from 'next/link';
import { nav, site } from '../data';
import { Icon } from './Icon';
import CvButton from './CvButton';
import ActiveNav from './ActiveNav';

export function Sidebar() {
  return (
    <aside className="side">
      <Link className="brand" href="/" aria-label={`${site.name}, home`}>
        <span className="brand-sub">Portfolio</span>
        <span className="brand-name">{site.name}</span>
      </Link>
      <nav aria-label="Primary">
        <ul className="side-list">
          {nav.map((n) => (
            <li key={n.id}>
              <Link href={n.href} data-nav={n.id}>
                <Icon name={n.icon} />
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <CvButton className="btn btn--quiet side-cv" />
    </aside>
  );
}

export function Dock() {
  return (
    <nav className="dock" aria-label="Primary mobile">
      {nav.map((n) => (
        <Link key={n.id} href={n.href} data-nav={n.id}>
          <Icon name={n.icon} />
          <span>{n.short}</span>
        </Link>
      ))}
      <ActiveNav />
    </nav>
  );
}
