import { site } from '../data';

/** Download CV. Stays inert until `cvUrl` is set in app/data.ts. */
export default function CvButton({ className = 'btn' }: { className?: string }) {
  if (!site.cvUrl) {
    return (
      <button type="button" className={className} aria-disabled="true">
        Download CV
      </button>
    );
  }
  return (
    <a className={className} href={site.cvUrl} download>
      Download CV
    </a>
  );
}
