import React, { memo } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  scale?: boolean;
};

// viewport: once:true is critical — without it animations re-fire on scroll up.
// Already had it, kept. Reduced default y from 28→20 for snappier feel.
// memo: prevents re-render when parent scrolls (important in lists).
export const Reveal = memo(function Reveal({
  children,
  delay = 0,
  y = 20,
  className = '',
  scale = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: scale ? 0.93 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
});
