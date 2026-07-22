import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Optimized: single IntersectionObserver on the wrapper via whileInView,
// children stagger with variants — was 3 separate observers before.
export function SectionTitle({ eyebrow, title, subtitle, align = 'center', className = '' }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-brand-section px-4 py-1.5 text-xs font-btn font-semibold uppercase tracking-wider text-brand-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-slate-500">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
