import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleIcon, ArrowUpIcon } from 'lucide-react';
import { CLINIC } from '../../data/site';

// Fixed: replaced animate boxShadow pulse (non-GPU) with CSS @keyframes on
// a pseudo-element using transform+opacity — GPU accelerated, no JS per frame.
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-primary shadow-glass hover:bg-brand-section transition-colors"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Pulse ring via CSS — GPU transform/opacity only, no JS per frame */}
      <a
        href={CLINIC.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-pulse relative grid h-14 w-14 place-items-center rounded-full bg-brand-secondary text-white shadow-float"
      >
        <MessageCircleIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
