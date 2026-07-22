
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppointmentProvider } from './context/AppointmentContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { Doctors } from './pages/Doctors';
import { DoctorDetails } from './pages/DoctorDetails';
import { KnowYourEyes } from './pages/KnowYourEyes';
import { Technology } from './pages/Technology';
import { Blog } from './pages/Blog';
import { BlogDetails } from './pages/BlogDetails';
import { TestimonialsPage } from './pages/Testimonials';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { FAQPage } from './pages/FAQPage';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <AppointmentProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:slug" element={<DoctorDetails />} />
            <Route path="/know-your-eyes" element={<KnowYourEyes />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppointmentProvider>);

}