












import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import type { Service } from '../../data/site';

export function ServiceCard({ service, index = 0 }: {service: Service;index?: number;}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index % 3 * 0.08 }}>
      
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-card border border-slate-100 bg-white p-6 shadow-glass transition-all duration-300 hover:-translate-y-2 hover:shadow-float">
        
        <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-section transition-transform duration-500 group-hover:scale-150" />
        <span className="relative grid h-14 w-14 place-items-center rounded-btn bg-brand-primary text-white shadow-float transition-colors group-hover:bg-brand-secondary">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="relative mt-5 font-display text-xl font-bold text-brand-dark">{service.title}</h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-500">{service.short}</p>
        <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-btn font-semibold text-brand-primary">
          Learn more
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>);

}