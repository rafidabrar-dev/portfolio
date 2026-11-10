'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Click-to-play YouTube video. The poster is a local image, so nothing from YouTube loads (no scripts,
 * no cookies) until the visitor presses play. Uses the privacy-enhanced youtube-nocookie.com player.
 */
export default function VideoEmbed({
  id,
  title,
  thumbnail,
  thumbnailAlt,
  label,
}: {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  label: string;
}) {
  const [playing, setPlaying] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;

  return (
    <div className="video">
      {playing ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          <Image src={thumbnail} alt={thumbnailAlt} fill sizes="(min-width: 960px) 50vw, 100vw" />
          <span className="video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z" />
            </svg>
          </span>
          <span className="video-label">{label}</span>
        </button>
      )}
    </div>
  );
}
