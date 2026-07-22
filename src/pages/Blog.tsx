





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchIcon, ArrowRightIcon, TagIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { BLOG } from '../data/site';
import { img } from '../data/images';

const CATEGORIES = ['All', 'Wellness', 'Treatment', 'Awareness'];
const TAGS = ['LASIK', 'Cataract', 'Retina', 'Dry Eye', 'Children', 'Diabetes'];

export function Blog() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const posts = BLOG.filter(
    (p) =>
    (category === 'All' || p.category === category) &&
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <PageHero title="Blog & News" subtitle="Expert eye-health advice, treatment insights and clinic updates." crumb="Blog" />

      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap gap-2">
              {CATEGORIES.map((c) =>
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-btn font-semibold transition-colors ${
                category === c ? 'bg-brand-primary text-white' : 'bg-brand-section text-brand-primary'}`
                }>
                
                  {c}
                </button>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post, i) =>
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}>
                
                  <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-glass transition-all hover:-translate-y-1 hover:shadow-float">
                  
                    <div className="overflow-hidden">
                      <img src={img(post.image)} alt={post.title} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs text-slate-400">{post.date} · {post.category}</p>
                      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand-dark group-hover:text-brand-primary">{post.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-slate-500">{post.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">Read more <ArrowRightIcon className="h-3.5 w-3.5" /></span>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
            {posts.length === 0 && <p className="text-slate-500">No articles match your search.</p>}

            {/* Pagination (static) */}
            <div className="mt-10 flex justify-center gap-2">
              {[1, 2, 3].map((n) =>
              <button
                key={n}
                className={`grid h-10 w-10 place-items-center rounded-btn text-sm font-semibold ${
                n === 1 ? 'bg-brand-primary text-white' : 'bg-white text-brand-dark shadow-glass'}`
                }>
                
                  {n}
                </button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-card bg-white p-5 shadow-glass">
              <div className="flex items-center gap-2 rounded-input border border-slate-200 px-3">
                <SearchIcon className="h-4 w-4 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles"
                  className="w-full bg-transparent py-2.5 text-sm focus:outline-none" />
                
              </div>
            </div>

            <div className="rounded-card bg-white p-5 shadow-glass">
              <h3 className="font-display font-bold text-brand-dark">Recent Posts</h3>
              <ul className="mt-4 space-y-4">
                {BLOG.map((p) =>
                <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`} className="flex gap-3">
                      <img src={img(p.image)} alt={p.title} loading="lazy" decoding="async" className="h-14 w-14 shrink-0 rounded-btn object-cover" />
                      <div>
                        <p className="text-sm font-semibold leading-snug text-brand-dark hover:text-brand-primary">{p.title}</p>
                        <p className="text-xs text-slate-400">{p.date}</p>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="rounded-card bg-white p-5 shadow-glass">
              <h3 className="font-display font-bold text-brand-dark">Tags</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {TAGS.map((t) =>
                <span key={t} className="inline-flex items-center gap-1 rounded-full bg-brand-section px-3 py-1.5 text-xs font-medium text-brand-primary">
                    <TagIcon className="h-3 w-3" /> {t}
                  </span>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>);

}