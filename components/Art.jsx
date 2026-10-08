'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IMAGES } from '@/lib/images';

/**
 * Character / scene artwork. Fills its (CSS-sized) container.
 * If the file isn't in /public/images yet, shows a storyboard-style placeholder
 * with the expected filename instead of a broken image.
 */
export default function Art({ name, className = '', fit = 'contain', position = '50% 100%', sizes = '50vw', priority = false }) {
  const img = IMAGES[name];
  const [missing, setMissing] = useState(false);

  return (
    <div className={`art ${className}`} data-missing={missing ? img.file : undefined}>
      {!missing && (
        <div className="art__img">
          <Image
            src={`/images/${img.file}`}
            alt={img.alt}
            fill
            sizes={sizes}
            priority={priority}
            style={{ objectFit: fit, objectPosition: position }}
            onError={() => setMissing(true)}
          />
        </div>
      )}
    </div>
  );
}
