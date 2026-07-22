















import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuoteIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../data/site';
import { img } from '../../data/images';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const go = (dir: number) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl" />
      <div className="relative mx-auto max-w-container px-4 sm:px-6">
        <SectionTitle
          eyebrow="Patient Stories"
          title={<span className="text-white">Loved by the people we serve</span>}
          subtitle="Real experiences from patients who trusted us with their sight." />
        

        <div className="mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-card p-8 text-center sm:p-10">
              
              <QuoteIcon className="mx-auto h-10 w-10 text-brand-secondary" />
              <p className="mt-6 text-xl font-medium leading-relaxed text-white">“{t.quote}”</p>
              <div className="mt-6 flex items-center justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) =>
                <StarIcon key={i} className="h-4 w-4 fill-amber-400" />
                )}
              </div>
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="relative">
                  <img src={img(t.image)} alt={t.name} width={48} height={48} loading="lazy" decoding="async" className="h-12 w-12 rounded-full object-cover" />
                  <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand-secondary text-white">
                    <PlayIcon className="h-2.5 w-2.5 fill-white" />
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-white">{t.name}</p>
                  <p className="text-sm text-slate-300">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-brand-primary">
              
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) =>
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-brand-secondary' : 'w-2 bg-white/30'}`} />

              )}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-brand-primary">
              
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}