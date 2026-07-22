import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon } from 'lucide-react';
import { ButtonLink } from '../components/ui/Button';

// Fixed: replaced infinite Framer Motion circle animation with CSS animate-blink.
export function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <motion.svg
          viewBox="0 0 120 80"
          className="mx-auto h-40 w-56"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M10 40 Q60 0 110 40 Q60 80 10 40 Z" fill="none" stroke="#008B8B" strokeWidth="3" />
          {/* CSS blink via transform:scaleY — no JS animation loop */}
          <circle
            cx="60"
            cy="40"
            r="16"
            fill="#00B8A9"
            className="animate-blink"
            style={{ transformOrigin: '60px 40px' }}
          />
          <circle cx="66" cy="34" r="4" fill="#fff" />
        </motion.svg>

        <h1 className="mt-6 text-6xl font-bold text-gradient">404</h1>
        <p className="mt-3 font-display text-xl font-bold text-brand-dark">This page is out of sight</p>
        <p className="mx-auto mt-2 max-w-md text-slate-500">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <ButtonLink to="/" className="mt-6">
          <HomeIcon className="h-4 w-4" /> Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
