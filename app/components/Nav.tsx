import { Fragment } from 'react';
import Link from 'next/link';
import { nav, site } from '../data';
import { Icon } from './Icon';
import CvButton from './CvButton';
import ActiveNav from './ActiveNav';

// Everything before this link scrolls within the home page; this link and the ones after it open their own pages.
const firstPageLink = 'education';

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
            <Fragment key={n.id}>
              {n.id === firstPageLink ? <li className="side-sep" role="separator" aria-hidden="true" /> : null}
              <li>
                <Link href={n.href} data-nav={n.id}>
                  <Icon name={n.icon} />
                  {n.label}
                </Link>
              </li>
            </Fragment>
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
        <Fragment key={n.id}>
          {n.id === firstPageLink ? <span className="dock-sep" role="separator" aria-hidden="true" /> : null}
          <Link href={n.href} data-nav={n.id}>
            <Icon name={n.icon} />
            <span>{n.short}</span>
          </Link>
        </Fragment>
      ))}
      <ActiveNav />
    </nav>
  );
}
