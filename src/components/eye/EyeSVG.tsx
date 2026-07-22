import React from 'react';

type Props = {
  activePart?: string | null;
  onSelect?: (id: string) => void;
  onHover?: (id: string | null) => void;
  className?: string;
};

// Optimized: removed Framer Motion import entirely.
// Pupil "blink" animation moved to CSS keyframes (animate-blink class)
// using transform:scaleY — GPU composited, no JS per frame.
export function EyeSVG({ activePart, onSelect, onHover, className = '' }: Props) {
  const isActive = (id: string) => activePart === id;
  const partClass = (id: string) =>
    `cursor-pointer transition-opacity duration-300 ${
      activePart && !isActive(id) ? 'opacity-40' : 'opacity-100'
    }`;

  const handlers = (id: string) => ({
    onClick: () => onSelect?.(id),
    onMouseEnter: () => onHover?.(id),
    onMouseLeave: () => onHover?.(null),
    role: 'button' as const,
    tabIndex: 0,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect?.(id);
      }
    },
    'aria-label': id,
  });

  return (
    <svg
      viewBox="0 0 520 420"
      className={className}
      role="group"
      aria-label="Interactive cross-section of the human eye"
    >
      <defs>
        <radialGradient id="vitreous" cx="55%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#E6F7F8" />
        </radialGradient>
        <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00B8A9" />
          <stop offset="100%" stopColor="#008B8B" />
        </radialGradient>
        <linearGradient id="nerveGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#008B8B" />
        </linearGradient>
      </defs>

      {/* Eyeball / uvea outer */}
      <g {...handlers('uvea')} className={partClass('uvea')}>
        <ellipse cx="250" cy="210" rx="200" ry="175" fill="none"
          stroke={isActive('uvea') ? '#008B8B' : '#7DD3FC'}
          strokeWidth={isActive('uvea') ? 10 : 6} />
        <ellipse cx="250" cy="210" rx="192" ry="167" fill="url(#vitreous)" />
      </g>

      {/* Retina */}
      <g {...handlers('retina')} className={partClass('retina')}>
        <path d="M 250 43 A 200 175 0 0 1 250 377" fill="none"
          stroke={isActive('retina') ? '#008B8B' : '#00B8A9'}
          strokeWidth={isActive('retina') ? 16 : 10}
          strokeLinecap="round" transform="translate(6 0)" opacity="0.7" />
      </g>

      {/* Macula */}
      <g {...handlers('macula')} className={partClass('macula')}>
        <circle cx="440" cy="210" r={isActive('macula') ? 18 : 13} fill="#1F2937" opacity="0.85" />
        <circle cx="440" cy="210" r="6" fill="#00B8A9" />
      </g>

      {/* Optic nerve */}
      <g {...handlers('optic-nerve')} className={partClass('optic-nerve')}>
        <path d="M 448 210 C 490 195, 500 225, 515 210" fill="none"
          stroke="url(#nerveGrad)"
          strokeWidth={isActive('optic-nerve') ? 30 : 22}
          strokeLinecap="round" />
      </g>

      {/* Lens */}
      <g {...handlers('lens')} className={partClass('lens')}>
        <ellipse cx="118" cy="210" rx="22" ry="52" fill="#7DD3FC" opacity="0.55"
          stroke={isActive('lens') ? '#008B8B' : '#00B8A9'}
          strokeWidth={isActive('lens') ? 5 : 3} />
      </g>

      {/* Iris */}
      <g {...handlers('iris')} className={partClass('iris')}>
        <path d="M 92 152 Q 60 210 92 268" fill="none"
          stroke="url(#irisGrad)"
          strokeWidth={isActive('iris') ? 26 : 20}
          strokeLinecap="round" />
      </g>

      {/* Cornea */}
      <g {...handlers('cornea')} className={partClass('cornea')}>
        <path d="M 88 150 Q 40 210 88 270" fill="none"
          stroke={isActive('cornea') ? '#008B8B' : '#7DD3FC'}
          strokeWidth={isActive('cornea') ? 12 : 8}
          strokeLinecap="round" opacity="0.9" />
      </g>

      {/* Pupil — CSS blink via animate-blink (transform:scaleY, GPU) */}
      <g {...handlers('pupil')} className={partClass('pupil')}>
        <circle cx="75" cy="210" r={isActive('pupil') ? 14 : 10}
          fill="#1F2937"
          className="animate-blink"
          style={{ transformOrigin: '75px 210px' }} />
      </g>

      <line x1="8" y1="210" x2="60" y2="210" stroke="#00B8A9" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
    </svg>
  );
}
