







import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, TagIcon, ArrowLeftIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { BLOG } from '../data/site';
import { img } from '../data/images';

export function BlogDetails() {
  const { slug } = useParams();
  const post = BLOG.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const others = BLOG.filter((p) => p.slug !== post.slug);

  return (
    <>
      <PageHero title={post.title} crumb="Blog" />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5"><CalendarIcon className="h-4 w-4 text-brand-primary" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><UserIcon className="h-4 w-4 text-brand-primary" /> {post.author}</span>
          <span className="rounded-full bg-brand-section px-3 py-1 text-xs font-semibold text-brand-primary">{post.category}</span>
        </div>

        <img src={img(post.image)} alt={post.title} loading="lazy" decoding="async" className="mt-6 w-full rounded-img object-cover shadow-glass" />

        <div className="prose mt-8 max-w-none text-slate-600">
          <p className="text-lg leading-relaxed">{post.excerpt}</p>
          <p className="mt-5 leading-relaxed">
            Your eyes work tirelessly every waking moment, yet most of us give them little thought until something feels
            wrong. Understanding the basics of how your vision works — and the small habits that protect it — can make a
            lasting difference to your eye health.
          </p>
          <blockquote className="my-6 rounded-card border-l-4 border-brand-primary bg-brand-section p-5 text-brand-dark">
            “Prevention and early detection are the two most powerful tools we have in protecting your sight.”
          </blockquote>
          <p className="leading-relaxed">
            If you notice any persistent changes in your vision, don't wait. A timely consultation with a specialist can
            catch issues early, when they are most treatable. Our team is always here to help you see clearly and live
            fully.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <TagIcon className="h-4 w-4 text-brand-primary" />
          {['Eye Health', post.category, 'Tips'].map((t) =>
          <span key={t} className="rounded-full bg-brand-section px-3 py-1.5 text-xs font-medium text-brand-primary">{t}</span>
          )}
        </div>

        <Link to="/blog" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
          <ArrowLeftIcon className="h-4 w-4" /> Back to blog
        </Link>
      </article>

      <section className="bg-brand-section/50 py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-brand-dark">More articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((p) =>
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex gap-4 rounded-card bg-white p-4 shadow-glass hover:shadow-float">
                <img src={img(p.image)} alt={p.title} loading="lazy" decoding="async" className="h-20 w-24 shrink-0 rounded-btn object-cover" />
                <div>
                  <p className="text-xs text-slate-400">{p.date}</p>
                  <h3 className="mt-1 font-display font-bold leading-snug text-brand-dark group-hover:text-brand-primary">{p.title}</h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>);

}