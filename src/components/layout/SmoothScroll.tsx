import React from 'react';

// SmoothScroll removed — native browser scrolling is smoother, GPU-accelerated,
// respects OS momentum, touch, keyboard, and accessibility out of the box.
// The old rAF lerp + wheel preventDefault caused: lag, stuck scroll,
// inconsistent momentum, and fought with Framer Motion scroll listeners.
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
