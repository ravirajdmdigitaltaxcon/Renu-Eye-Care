import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  EyeIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  GlobeIcon,
  SendIcon,
  CheckIcon
} from 'lucide-react';
import { CLINIC, SERVICES } from '../../data/site';

const socials = [
  { Icon: FacebookIcon, url: 'https://www.facebook.com/renueyecare', label: 'Facebook' },
  { Icon: InstagramIcon, url: 'https://www.instagram.com/renueyecare', label: 'Instagram' },
  { Icon: GlobeIcon, url: 'https://share.google/iE1LHGc115XQrgaeq', label: 'Google Business Profile' }
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-brand-dark text-slate-300">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-btn bg-brand-primary text-white">
                <EyeIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold text-white">Renu Eye Care</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A premium eye hospital delivering world-class ophthalmology with warmth, precision and the latest technology.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" /> {CLINIC.address}
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 text-brand-secondary" /> {CLINIC.phone}
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 text-brand-secondary" /> {CLINIC.email}
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" /> {CLINIC.hours}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {['About', 'Doctors', 'Technology', 'Testimonials', 'Pricing', 'FAQ'].map((l) =>
                <li key={l}>
                  <Link to={`/${l.toLowerCase()}`} className="text-slate-400 transition-colors hover:text-brand-secondary">
                    {l}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) =>
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 transition-colors hover:text-brand-secondary">

                    {s.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="mt-4 text-sm text-slate-400">Eye-health tips and updates, straight to your inbox.</p>
            <form
              className="mt-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}>

              <div className="flex overflow-hidden rounded-input bg-white/10 p-1">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  aria-label="Email address"
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none" />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid w-11 shrink-0 place-items-center rounded-btn bg-brand-primary text-white transition-colors hover:bg-brand-secondary">

                  {subscribed ? <CheckIcon className="h-4 w-4" /> : <SendIcon className="h-4 w-4" />}
                </button>
              </div>
              {subscribed && <p className="mt-2 text-xs text-brand-secondary">Thanks for subscribing!</p>}
            </form>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, url, label }, i) =>
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-slate-300 transition-colors hover:bg-brand-primary hover:text-white"
                  aria-label={label}>

                  <Icon className="h-4 w-4" />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-card border border-white/10">
          <iframe
            title="Clinic location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.3558301588923!2d94.91495117610829!3d27.48930713507337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374099947260150d%3A0x5cf9800b6bc76d5b!2sRenu%20Eye%20Care%20Centre!5e0!3m2!1sen!2sin!4v1785738972404!5m2!1sen!2sin"
            className="h-56 w-full grayscale"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {CLINIC.name}. Desgined By <a href="https://agarwaltaxcon.in/" style={{ color: "red", fontWeight: "bold" }}>Agarwal Taxcon Pvt. Ltd</a>All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-brand-secondary">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-brand-secondary">FAQ</Link>
            <Link to="/contact" className="hover:text-brand-secondary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}