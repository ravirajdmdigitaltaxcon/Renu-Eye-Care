import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  PlayIcon,
  ArrowRightIcon,
  TargetIcon,
  HeartHandshakeIcon } from
'lucide-react';
import { Hero } from '../components/home/Hero';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Counter } from '../components/ui/Counter';
import { Reveal } from '../components/ui/Reveal';
import { Button, ButtonLink } from '../components/ui/Button';
import { ServiceCard } from '../components/cards/ServiceCard';
import { DoctorCard } from '../components/cards/DoctorCard';
import { EyeExplorer } from '../components/eye/EyeExplorer';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/ui/FAQ';
import { useAppointment } from '../context/AppointmentContext';
import { STATS, SERVICES, DOCTORS, TECHNOLOGIES, FAQS, BLOG } from '../data/site';
import { IMAGES, img } from '../data/images';

const WHY = [
'Internationally trained, super-specialist surgeons',
'Bladeless, latest-generation surgical technology',
'Transparent pricing with cashless insurance',
'Day-care procedures with rapid recovery'];


export function Home() {
  const { openModal } = useAppointment();

  return (
    <>
      <Hero />

      {/* Stats */}
      <section className="relative z-10 mx-auto -mt-8 max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 rounded-card bg-white p-6 shadow-glass sm:p-8 lg:grid-cols-4">
          {STATS.map((s) =>
          <Reveal key={s.label} scale className="text-center">
              <p className="text-3xl font-bold text-brand-primary sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500">{s.label}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-img shadow-glass">
                <img src={IMAGES.IMG_ABOUT} alt="Doctor examining a patient" width={600} height={500} loading="lazy" decoding="async" className="w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-card bg-brand-primary px-5 py-4 text-white shadow-float">
                <span className="text-3xl font-bold">
                  <Counter value={25} suffix="+" />
                </span>
                <span className="text-sm leading-tight">Years of<br />excellence</span>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionTitle
              align="left"
              eyebrow="About Us"
              title="Compassionate eye care, always within reach"
              subtitle="For over two decades, Renu Eye Care Centre has combined clinical excellence with genuine warmth — treating every patient like family." />
            
            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-btn bg-brand-section text-brand-primary">
                  <TargetIcon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display font-bold text-brand-dark">Our Mission</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    To make world-class eye care accessible, affordable and free of anxiety for every patient.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-btn bg-brand-section text-brand-primary">
                  <HeartHandshakeIcon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display font-bold text-brand-dark">Our Vision</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    A world where no one loses their sight to a preventable or treatable condition.
                  </p>
                </div>
              </div>
            </div>
            <ButtonLink to="/about" className="mt-8">
              More about us <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-section/50 py-20 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle
            eyebrow="Our Specialities"
            title="Comprehensive care for every part of your eye"
            subtitle="From routine check-ups to the most advanced surgeries, our super-specialists have you covered." />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) =>
            <ServiceCard key={s.slug} service={s} index={i} />
            )}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/services" variant="outline">
              View all services <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Why Choose Us"
              title="A premium experience, built around you" />
            
            <ul className="mt-6 space-y-4">
              {WHY.map((w, i) =>
              <Reveal key={w} delay={i * 0.05}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                    <span className="text-slate-600">{w}</span>
                  </li>
                </Reveal>
              )}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
              { v: 100000, s: '+', l: 'Patients' },
              { v: 40000, s: '+', l: 'Surgeries' },
              { v: 98, s: '%', l: 'Success' }].
              map((c) =>
              <div key={c.l} className="rounded-card bg-brand-section p-4 text-center">
                  <p className="text-2xl font-bold text-brand-primary">
                    <Counter value={c.v} suffix={c.s} />
                  </p>
                  <p className="text-xs text-slate-500">{c.l}</p>
                </div>
              )}
            </div>
          </div>
          <Reveal scale>
            <div className="group relative overflow-hidden rounded-img shadow-glass">
              <img src={IMAGES.IMG_SERVICE} alt="Advanced eye surgery technology" width={600} height={450} loading="lazy" decoding="async" className="w-full object-cover" />
              <button
                onClick={() => openModal()}
                className="absolute inset-0 grid place-items-center bg-brand-dark/20"
                aria-label="Play video">
                
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-brand-primary shadow-float animate-pulse-play">
                  
                  <PlayIcon className="h-6 w-6 fill-brand-primary" />
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-brand-section/50 py-20 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle
            eyebrow="Meet the Team"
            title="Expert surgeons who genuinely care"
            subtitle="Our specialists bring decades of combined experience and a warm, personal touch." />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((d, i) =>
            <DoctorCard key={d.slug} doctor={d} index={i} />
            )}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6 sm:py-24">
        <SectionTitle
          eyebrow="Technology"
          title="Precision powered by the latest innovation"
          subtitle="We invest continuously in the equipment that makes safer, sharper outcomes possible." />
        
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.name} delay={i % 3 * 0.06}>
                <div className="flex items-center gap-4 rounded-card border border-slate-100 bg-white p-5 shadow-glass transition-all hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-btn bg-brand-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-brand-dark">{tech.name}</h4>
                    <p className="text-sm text-slate-500">{tech.desc}</p>
                  </div>
                </div>
              </Reveal>);

          })}
        </div>
      </section>

      {/* Know your eyes */}
      <section className="relative overflow-hidden bg-brand-dark py-20 sm:py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle
            eyebrow="Know Your Eyes"
            title={<span className="text-white">Explore the anatomy of your eye</span>}
            subtitle="Our most interactive feature — hover and click each part to understand how your vision works." />
          
          <div className="mt-12">
            <EyeExplorer />
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/know-your-eyes" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
              Open full eye explorer <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Blog */}
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6 sm:py-24">
        <SectionTitle
          eyebrow="From Our Blog"
          title="Eye-health insights from our experts" />
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOG.map((post, i) =>
          <Reveal key={post.slug} delay={i * 0.08}>
              <Link
              to={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-glass transition-all hover:-translate-y-1 hover:shadow-float">
              
                <div className="relative overflow-hidden">
                  <img
                  src={img(post.image)}
                  alt={post.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                
                  <span className="absolute left-3 top-3 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs text-slate-400">{post.date} · {post.author}</p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand-dark group-hover:text-brand-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-500">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                    Read more <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-section/50 py-20 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle eyebrow="FAQ" title="Questions, answered" />
          <div className="mt-12">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-img bg-brand-primary px-6 py-14 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            Your clearest vision starts with a single visit
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/80">
            Book your consultation today and take the first step toward better sight.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-primary hover:bg-brand-section" onClick={() => openModal()}>
              Book Appointment
            </Button>
            <ButtonLink to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>);

}