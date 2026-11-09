import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '70dvh', display: 'grid', alignContent: 'center' }}>
      <div className="container contact" style={{ maxWidth: '48rem' }}>
        <h2>Page not found.</h2>
        <p className="lead">That address does not exist on this site.</p>
        <Link className="btn btn--line" href="/">
          Back to the portfolio
        </Link>
      </div>
    </section>
  );
}
