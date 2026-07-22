import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { EyeSVG } from './EyeSVG';
import { EYE_PARTS } from '../../data/site';

type Props = {
  showAll?: boolean;
};

export function EyeExplorer({ showAll = false }: Props) {
  const [active, setActive] = useState<string>('cornea');
  const [hover, setHover] = useState<string | null>(null);
  const current = EYE_PARTS.find((p) => p.id === active)!;
  const highlighted = hover ?? active;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* SVG */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 rounded-img bg-brand-section/60 blur-2xl" />
        <div className="relative rounded-img bg-white p-4 shadow-glass sm:p-8">
          <EyeSVG
            activePart={highlighted}
            onSelect={setActive}
            onHover={setHover}
            className="w-full" />
          
          {/* Tooltip */}
          <AnimatePresence>
            {hover &&
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute left-1/2 top-4 -translate-x-1/2 rounded-btn bg-brand-dark px-3 py-1.5 text-xs font-semibold text-white shadow-glass">
              
                {EYE_PARTS.find((p) => p.id === hover)?.name}
              </motion.div>
            }
          </AnimatePresence>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">
          Hover to preview · click any part to learn more
        </p>
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-wrap gap-2">
          {EYE_PARTS.map((p) =>
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-btn font-semibold transition-all ${
            active === p.id ?
            'bg-brand-primary text-white shadow-float' :
            'bg-brand-section text-brand-primary hover:bg-brand-secondary/20'}`
            }>
            
              {p.name}
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mt-6 rounded-card bg-white p-6 shadow-glass sm:p-8">
            
            <h3 className="font-display text-2xl font-bold text-brand-dark">{current.name}</h3>
            <p className="mt-2 font-medium text-brand-primary">{current.blurb}</p>
            <p className="mt-4 leading-relaxed text-slate-500">{current.detail}</p>
            {showAll &&
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-primary">
                Related conditions & videos below <ArrowRightIcon className="h-4 w-4" />
              </div>
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </div>);

}