import type { TimelineItem } from '../data';

/** A dot on a line, the current entry's dot large. Pure markup, no script. */
export default function Timeline({ items, className = '' }: { items: TimelineItem[]; className?: string }) {
  return (
    <ol className={`rows timeline ${className}`.trim()}>
      {items.map((it) => (
        <li key={it.title} className={`row${it.current ? ' is-current' : ''}`}>
          {it.year ? <p className="row-year num">{it.year}</p> : null}
          <div className="row-main">
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
          <p className="row-when">
            {it.when}
            {it.current ? (
              <>
                {' '}
                <span className="tag">Current</span>
              </>
            ) : null}
          </p>
        </li>
      ))}
    </ol>
  );
}
