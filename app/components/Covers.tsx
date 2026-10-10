"use client";

/* ------------------------------------------------------------------ */
/* 1. Audio Streaming — radiating broadcast arcs                        */
/* ------------------------------------------------------------------ */

export function AudioStreamingArt() {
  return (
    <svg viewBox="0 0 800 500" className="cover-svg" aria-hidden="true">
      <rect width="800" height="500" className="cover-bg" />
      <g
        stroke="#16161A"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M 445 196 A 70 70 0 0 1 445 304" className="arc arc-1" />
        <path d="M 477 158 A 120 120 0 0 1 477 342" className="arc arc-2" />
        <path d="M 509 120 A 170 170 0 0 1 509 380" className="arc arc-3" />
        <path d="M 355 196 A 70 70 0 0 0 355 304" className="arc arc-1" />
        <path d="M 323 158 A 120 120 0 0 0 323 342" className="arc arc-2" />
        <path d="M 291 120 A 170 170 0 0 0 291 380" className="arc arc-3" />
      </g>
      <circle cx="400" cy="250" r="30" fill="#2B4EFF" />
      <circle cx="400" cy="250" r="10" fill="#fff" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 2. JCarousel — fanned deck of cards                                  */
/* ------------------------------------------------------------------ */

export function JCarouselArt() {
  return (
    <svg viewBox="0 0 800 500" className="cover-svg" aria-hidden="true">
      <rect width="800" height="500" className="cover-bg" />
      <g className="deck">
        <rect
          x="312"
          y="142"
          width="220"
          height="150"
          rx="18"
          fill="#2B4EFF"
          opacity="0.14"
        />
        <rect
          x="292"
          y="162"
          width="220"
          height="150"
          rx="18"
          fill="#fff"
          stroke="#16161A"
          strokeWidth="6"
        />
        <g className="deck-front">
          <rect
            x="272"
            y="182"
            width="220"
            height="150"
            rx="18"
            fill="#fff"
            stroke="#16161A"
            strokeWidth="6"
          />
          <line
            x1="304"
            y1="232"
            x2="460"
            y2="232"
            stroke="#16161A"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.22"
          />
          <line
            x1="304"
            y1="258"
            x2="418"
            y2="258"
            stroke="#16161A"
            strokeWidth="9"
            strokeLinecap="round"
            opacity="0.12"
          />
          <circle cx="458" cy="288" r="13" fill="#2B4EFF" />
        </g>
      </g>
      <g
        stroke="#2B4EFF"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M 176 250 l 38 -38 M 176 250 l 38 38" />
        <path d="M 624 250 l -38 -38 M 624 250 l -38 38" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 3. React Wasps — dotted flight path + geometric wasp                 */
/* ------------------------------------------------------------------ */

export function WaspsArt() {
  return (
    <svg viewBox="0 0 800 500" className="cover-svg" aria-hidden="true">
      <rect width="800" height="500" className="cover-bg" />
      <path
        d="M 105 365 C 235 225, 340 425, 470 295 S 655 205, 705 335"
        stroke="#16161A"
        strokeWidth="5"
        strokeDasharray="1 16"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      <g className="wasp-bob">
        <g transform="translate(470 290)">
          <ellipse
            cx="-4"
            cy="-30"
            rx="27"
            ry="13"
            fill="#fff"
            stroke="#16161A"
            strokeWidth="5"
            className="wing wing-l"
          />
          <ellipse
            cx="4"
            cy="-30"
            rx="27"
            ry="13"
            fill="#fff"
            stroke="#16161A"
            strokeWidth="5"
            className="wing wing-r"
          />
          <clipPath id="waspBodyClip">
            <ellipse cx="0" cy="0" rx="37" ry="24" />
          </clipPath>
          <g clipPath="url(#waspBodyClip)">
            <ellipse cx="0" cy="0" rx="37" ry="24" fill="#16161A" />
            <rect x="-10" y="-24" width="15" height="48" fill="#2B4EFF" />
            <rect x="13" y="-24" width="15" height="48" fill="#2B4EFF" />
          </g>
          <circle cx="36" cy="-5" r="11" fill="#16161A" />
          <circle cx="39" cy="-8" r="3" fill="#fff" />
          <path
            d="M -37 0 l -16 7 l 16 7 z"
            fill="#16161A"
          />
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 4. BPM Detector — heartbeat pulse line                               */
/* ------------------------------------------------------------------ */

export function BpmArt() {
  return (
    <svg viewBox="0 0 800 500" className="cover-svg" aria-hidden="true">
      <rect width="800" height="500" className="cover-bg" />
      <g stroke="#16161A" strokeWidth="2" opacity="0.07">
        <line x1="0" y1="125" x2="800" y2="125" />
        <line x1="0" y1="250" x2="800" y2="250" />
        <line x1="0" y1="375" x2="800" y2="375" />
      </g>
      <path
        d="M 60 250 H 215 l 36 -88 l 36 176 l 36 -126 l 32 38 H 465 l 36 -88 l 36 176 l 36 -126 l 32 38 H 740"
        fill="none"
        stroke="#2B4EFF"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="100"
        className="pulse-line"
      />
      <circle cx="287" cy="162" r="10" fill="#16161A" className="beat" />
      <circle cx="537" cy="162" r="10" fill="#16161A" className="beat beat-2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Film grain overlay                                                   */
/* ------------------------------------------------------------------ */

export function Grain() {
  return (
    <div className="grain" aria-hidden="true">
      <svg>
        <filter id="grainNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainNoise)" />
      </svg>
    </div>
  );
}
