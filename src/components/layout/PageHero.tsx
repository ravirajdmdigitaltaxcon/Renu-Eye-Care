import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';

type Props = {
  title: string;
  subtitle?: string;
  crumb?: string;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// Consolidated: was 3 separate motion elements each with own initial/animate.
// Now: single parent orchestrates stagger via variants — 1 observer total.
export function PageHero({ title, subtitle, crumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-section">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-secondary/20 blur-3xl animate-floaty"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-brand-sky/30 blur-3xl"
        aria-hidden
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-container px-4 py-16 text-center sm:px-6 sm:py-20"
      >
        <motion.nav
          variants={fadeUp}
          className="mb-4 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-brand-primary">Home</Link>
          <ChevronRightIcon className="h-3.5 w-3.5" />
          <span className="text-brand-primary">{crumb ?? title}</span>
        </motion.nav>

        <motion.h1
          variants={fadeUp}
          className="mx-auto max-w-3xl text-4xl font-bold text-brand-dark sm:text-5xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
