import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Optimized: single rAF-based mousemove listener, tighter spring config,
// pointer-coarse guard prevents desktop cursor on touch devices.
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hoverRef = useRef(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  // Blob — slow, dreamy follow
  const bx = useSpring(x, { stiffness: 80, damping: 25, mass: 0.5 });
  const by = useSpring(y, { stiffness: 80, damping: 25, mass: 0.5 });

  // Dot — snappy follow
  const dx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.3 });
  const dy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.3 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const isHover = !!(e.target as HTMLElement).closest('a, button, [role="button"]');
      if (isHover !== hoverRef.current) {
        hoverRef.current = isHover;
        setHovering(isHover);
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Ambient blob — desktop only, pointer-events none, low z */}
      <motion.div
        aria-hidden
        style={{ x: bx, y: by }}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <div className="h-48 w-48 rounded-full bg-brand-secondary/8 blur-2xl" />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        aria-hidden
        style={{ x: dx, y: dy, scale: hovering ? 2 : 1 }}
        transition={{ scale: { type: 'spring', stiffness: 400, damping: 30 } }}
        className="pointer-events-none fixed left-0 top-0 z-[61] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-primary bg-brand-primary/30 md:block"
      />
    </>
  );
}
