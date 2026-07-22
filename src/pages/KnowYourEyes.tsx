







import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, PlayIcon, EyeIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { EyeExplorer } from '../components/eye/EyeExplorer';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FAQ } from '../components/ui/FAQ';
import { Link } from 'react-router-dom';
import { EYE_PARTS, FAQS } from '../data/site';

const TREE = [
{ label: 'Human Eye', children: EYE_PARTS.map((p) => p.name) },
{
  label: 'Common Conditions',
  children: ['Glaucoma', 'Cataract', 'Dry Eye', 'Myopia', 'Hyperopia', 'Astigmatism']
}];


const RELATED = [
{ name: 'Glaucoma', slug: 'glaucoma' },
{ name: 'Cataract', slug: 'cataract' },
{ name: 'Dry Eye', slug: 'dry-eye' },
{ name: 'Retina Care', slug: 'retina' }];


export function KnowYourEyes() {
  const [openBranch, setOpenBranch] = useState<number | null>(0);

  return (
    <>
      <PageHero
        title="Know Your Eyes"
        subtitle="An interactive, educational journey through the anatomy of the human eye — no medical degree required."
        crumb="Know Your Eyes" />
      

      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar tree */}
          <aside className="h-fit rounded-card bg-white p-5 shadow-glass lg:sticky lg:top-28">
            <h3 className="flex items-center gap-2 font-display font-bold text-brand-dark">
              <EyeIcon className="h-5 w-5 text-brand-primary" /> Explore
            </h3>
            <div className="mt-4 space-y-2">
              {TREE.map((branch, i) => {
                const open = openBranch === i;
                return (
                  <div key={branch.label}>
                    <button
                      onClick={() => setOpenBranch(open ? null : i)}
                      className="flex w-full items-center justify-between rounded-btn bg-brand-section px-3 py-2 text-sm font-semibold text-brand-primary">
                      
                      {branch.label}
                      <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                      className="overflow-hidden">
                      
                      <ul className="mt-1 space-y-1 pl-3">
                        {branch.children.map((c) =>
                        <li key={c}>
                            <a
                            href="#explorer"
                            className="block rounded px-2 py-1.5 text-sm text-slate-500 hover:text-brand-primary">
                            
                              {c}
                            </a>
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  </div>);

              })}
            </div>
          </aside>

          {/* Main */}
          <div className="space-y-16" id="explorer">
            <EyeExplorer showAll />

            {/* Related disease */}
            <div>
              <SectionTitle align="left" eyebrow="Related" title="Conditions to know about" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {RELATED.map((r) =>
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  className="rounded-card border border-slate-100 bg-white p-5 shadow-glass transition-all hover:-translate-y-1 hover:shadow-float">
                  
                    <EyeIcon className="h-6 w-6 text-brand-primary" />
                    <p className="mt-3 font-display font-bold text-brand-dark">{r.name}</p>
                    <p className="mt-1 text-xs text-brand-primary">Learn about treatment →</p>
                  </Link>
                )}
              </div>
            </div>

            {/* Videos */}
            <div>
              <SectionTitle align="left" eyebrow="Watch & Learn" title="Educational videos" />
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {['How the eye focuses', 'Understanding cataracts', 'What is glaucoma?'].map((v) =>
                <div key={v} className="group overflow-hidden rounded-card bg-brand-dark">
                    <div className="relative grid aspect-video place-items-center">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand-primary transition-transform group-hover:scale-110">
                        <PlayIcon className="h-6 w-6 fill-brand-primary" />
                      </span>
                    </div>
                    <p className="p-4 text-sm font-semibold text-white">{v}</p>
                  </div>
                )}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <SectionTitle align="left" eyebrow="FAQ" title="Common eye questions" />
              <div className="mt-6">
                <FAQ items={FAQS} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>);

}