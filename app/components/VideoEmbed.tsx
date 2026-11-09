'use client';

import { useState } from 'react';

/**
 * Click-to-play Facebook video. Nothing from Facebook loads (no scripts, no cookies)
 * until the visitor presses play, so the page stays fast and private by default.
 */
export default function VideoEmbed({ url, title, label }: { url: string; title: string; label: string }) {
  const [playing, setPlaying] = useState(false);
  const src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=true&width=360&height=640`;

  return (
    <div className="video">
      {playing ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
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
