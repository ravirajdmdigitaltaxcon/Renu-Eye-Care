











import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon } from 'lucide-react';

type Item = {q: string;a: string;};

export function FAQ({ items }: {items: Item[];}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-card border transition-colors ${
            isOpen ? 'border-brand-primary/30 bg-white shadow-glass' : 'border-slate-200 bg-white'}`
            }>
            
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}>
              
              <span className="font-display text-base font-semibold text-brand-dark">{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                isOpen ? 'bg-brand-primary text-white' : 'bg-brand-section text-brand-primary'}`
                }>
                
                {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}>
                
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">{item.a}</p>
                </motion.div>
              }
            </AnimatePresence>
          </div>);

      })}
    </div>);

}