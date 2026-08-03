import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, AmbulanceIcon, MessageCircleIcon, CheckCircleIcon, SendIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Reveal } from '../components/ui/Reveal';
import { SERVICES, CLINIC } from '../data/site';

const CONTACTS = [
  { icon: MapPinIcon, label: 'Visit Us', value: CLINIC.address },
  { icon: PhoneIcon, label: 'Call Us', value: CLINIC.phone },
  { icon: MailIcon, label: 'Email Us', value: CLINIC.email },
  { icon: ClockIcon, label: 'Working Hours', value: CLINIC.hours }
];

export function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap API call ya email logic add kar sakte hain
    console.log('Form Data:', formData);
    setSubmitted(true);

    // 3 seconds baad form reset ho jayega
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  // Reusable input classes
  const inputClass = "w-full rounded-btn border border-slate-200 bg-white px-4 py-2.5 text-sm text-brand-dark outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 placeholder:text-slate-400";
  const labelClass = "block text-sm font-medium text-brand-dark mb-1.5";

  return (
    <>
      <PageHero title="Contact Us" subtitle="We're here to help. Reach out, drop by, or book online — whatever suits you." crumb="Contact" />

      <section className="mx-auto max-w-container px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="h-full rounded-card border border-slate-100 bg-white p-6 shadow-glass">
                  <span className="grid h-12 w-12 place-items-center rounded-btn bg-brand-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-brand-dark">{c.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">{c.value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Get in Touch" title="Send us a message" />

            <div className="mt-6 rounded-card bg-white p-6 shadow-glass sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                    <CheckCircleIcon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-dark">Message Sent!</h3>
                  <p className="mt-2 text-sm text-slate-500">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="appointment">Appointment Related</option>
                        <option value="feedback">Feedback / Suggestion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-btn bg-brand-primary py-3.5 font-btn font-semibold text-white transition hover:bg-brand-primary/90 active:scale-[0.98] shadow-sm"
                  >
                    <SendIcon className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-card shadow-glass">

              <iframe
                title="Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.3558301588923!2d94.91495117610829!3d27.48930713507337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374099947260150d%3A0x5cf9800b6bc76d5b!2sRenu%20Eye%20Care%20Centre!5e0!3m2!1sen!2sin!4v1785738972404!5m2!1sen!2sin"
                className="h-60 w-full"
                loading='lazy'
              />
            </div>

            <div className="rounded-card bg-brand-dark p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-btn bg-red-500">
                  <AmbulanceIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display font-bold">24/7 Eye Emergency</h3>
                  <a href={`tel:${CLINIC.emergency}`} className="text-brand-secondary">{CLINIC.emergency}</a>
                </div>
              </div>
            </div>

            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-card bg-brand-secondary py-4 font-btn font-semibold text-white shadow-float transition hover:opacity-90">

              <MessageCircleIcon className="h-5 w-5" /> Chat with us on WhatsApp
            </a>

            <div className="rounded-card bg-brand-section p-6">
              <h3 className="font-display font-bold text-brand-dark">Departments</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <span key={s.slug} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-brand-primary">
                    {s.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}