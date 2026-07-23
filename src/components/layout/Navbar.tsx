




import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, MenuIcon, XIcon, PhoneIcon, ChevronDownIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAppointment } from '../../context/AppointmentContext';
import { CLINIC } from '../../data/site';
import Logo from '../assets/logo.gif'; // ya logo.svg
const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Know Your Eyes', to: '/know-your-eyes' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }];


const MORE = [
  { label: 'Technology', to: '/technology' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'FAQ', to: '/faq' }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { openModal } = useAppointment();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean; }) =>
    `relative text-sm font-medium transition-colors ${isActive ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'}`;


  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`
      }>

      <nav
        className={`mx-auto flex max-w-container items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${scrolled ? 'rounded-btn glass shadow-glass mx-4 py-2.5' : 'py-2'}`
        }>

        <Link
          to="/"
          className="flex items-center flex-shrink-0"
          aria-label={CLINIC.name}
        >
          <img
            src={Logo}
            alt="Renu Eye Care"
            className="h-12 md:h-14 w-auto object-contain bg-transparent"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) =>
            <NavLink key={n.to} to={n.to} className={linkClass}>
              {({ isActive }) =>
                <>
                  {n.label}
                  {isActive &&
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-primary" />

                  }
                </>
              }
            </NavLink>
          )}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}>

            <button className="flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-primary">
              More <ChevronDownIcon className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {moreOpen &&
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 top-full w-48 rounded-card glass p-2 shadow-glass">

                  {MORE.map((m) =>
                    <NavLink
                      key={m.to}
                      to={m.to}
                      className="block rounded-btn px-3 py-2 text-sm text-brand-dark hover:bg-brand-section hover:text-brand-primary">

                      {m.label}
                    </NavLink>
                  )}
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${CLINIC.phone}`}
            className="hidden items-center gap-2 text-sm font-semibold text-brand-primary md:flex">

            <PhoneIcon className="h-4 w-4" /> {CLINIC.phone}
          </a>
          <Button size="sm" className="hidden sm:inline-flex" onClick={() => openModal()}>
            Book Appointment
          </Button>
          <button
            className="grid h-10 w-10 place-items-center rounded-btn bg-brand-section text-brand-primary lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}>

            {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-card glass shadow-glass lg:hidden">

            <div className="flex flex-col p-4" data-native-scroll>
              {[...NAV, ...MORE].map((n) =>
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `rounded-btn px-4 py-3 text-sm font-medium ${isActive ? 'bg-brand-section text-brand-primary' : 'text-brand-dark'}`

                  }>

                  {n.label}
                </NavLink>
              )}
              <Button className="mt-3" onClick={() => openModal()}>
                Book Appointment
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

}