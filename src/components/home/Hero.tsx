import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  AwardIcon,
  ArrowRightIcon,
  PlayIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Button, ButtonLink } from "../ui/Button";
import { useAppointment } from "../../context/AppointmentContext";
import { IMAGES } from "../../data/images";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Static particles — no JS animation, uses CSS (transform/opacity only via animate-floaty).
// Was 18 Framer Motion infinite loops; each adds a RAF callback. Removed entirely.
const PARTICLE_POSITIONS = [
  "5% 15%",
  "18% 70%",
  "32% 28%",
  "47% 82%",
  "60% 12%",
  "73% 55%",
  "85% 30%",
  "92% 75%",
  "25% 48%",
  "68% 90%",
];

const StaticParticles = memo(() => (
  <div aria-hidden className="pointer-events-none absolute inset-0">
    {PARTICLE_POSITIONS.map((pos, i) => (
      <span
        key={i}
        className="absolute h-1.5 w-1.5 rounded-full bg-brand-primary/20"
        style={{
          backgroundPosition: pos,
          top: pos.split(" ")[1],
          left: pos.split(" ")[0],
        }}
      />
    ))}
  </div>
));

export const Hero = memo(function Hero() {
  const { openModal } = useAppointment();

  return (
    <section className="relative overflow-hidden bg-brand-bg">
      {/* Background decorations — CSS animation only, no JS */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-secondary/15 blur-3xl animate-floaty" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-brand-sky/15 blur-3xl" />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-primary/8 blur-3xl animate-floaty"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <StaticParticles />

      <div className="relative mx-auto grid max-w-container items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 ">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-btn font-semibold text-brand-primary shadow-float"
          >
            <ShieldCheckIcon className="h-4 w-4" /> NABH Accredited · 25+ Years
            of Trust
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-extrabold leading-[1.1] text-brand-dark sm:text-5xl lg:text-6xl"
          >
            See the world in{" "}
            <span className="text-gradient">perfect clarity</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-lg leading-relaxed text-slate-500"
          >
            Premium, compassionate eye care powered by the latest technology.
            From bladeless LASIK to advanced retina surgery — your vision is in
            expert hands.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" onClick={() => openModal()}>
              Book Appointment <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <ButtonLink to="/services" variant="outline" size="lg">
              Explore Services
            </ButtonLink>
            <button className="group flex items-center gap-3 text-sm font-semibold text-brand-dark">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-primary shadow-float transition-transform group-hover:scale-110">
                <PlayIcon className="h-4 w-4 fill-brand-primary" />
              </span>
              Watch our story
            </button>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-img bg-brand-section shadow-glass w-[560px]">
          
            <img
              src={IMAGES.IMG_HERO_DOCTOR}
              alt="Lead ophthalmologist at Renu Eye Care Centre"
              width={750}
              height={850}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Reviews floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="absolute -left-6 bottom-10 rounded-btn bg-white px-4 py-3 shadow-glass animate-floaty"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="mt-1 text-sm font-bold text-brand-dark">4.8 / 5.0</p>
            <p className="text-[11px] text-slate-400">348+ patient reviews</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
