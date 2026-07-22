







import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { Cursor } from './Cursor';
import { SmoothScroll } from './SmoothScroll';
import { AppointmentModal } from '../appointment/AppointmentModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <main className="min-h-screen w-full bg-brand-bg pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <AppointmentModal />
    </SmoothScroll>);

}