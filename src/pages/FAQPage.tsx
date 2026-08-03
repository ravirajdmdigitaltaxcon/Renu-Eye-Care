import { PageHero } from '../components/layout/PageHero';
import { FAQ } from '../components/ui/FAQ';
import { Button } from '../components/ui/Button';
import { useAppointment } from '../context/AppointmentContext';
import { FAQS, CLINIC } from '../data/site';
import {
  MessageCircleIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  CalendarCheckIcon,
  ChevronRightIcon
} from 'lucide-react';

const MORE_FAQS = [
  { q: 'How long does recovery take after LASIK?', a: 'Most patients notice clearer vision within 24 hours and return to routine activities the next day.' },
  { q: 'Can children undergo eye surgery?', a: 'Yes, our paediatric specialists perform age-appropriate procedures in a child-friendly, safe environment.' },
  { q: 'Do you offer follow-up care?', a: 'Absolutely. Every procedure includes a structured follow-up schedule to ensure the best outcome.' }
];

export function FAQPage() {
  const { openModal } = useAppointment();

  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know before your visit." crumb="FAQ" />

      <section className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Main FAQ Content Area */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Support Center</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-dark">How can we help you?</h2>
              <p className="mt-3 text-lg text-slate-500">
                Browse our most frequently asked questions to find the information you need.
              </p>
            </div>

            {/* Premium FAQ Wrapper */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <FAQ items={[...FAQS, ...MORE_FAQS]} />
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Book Consultation CTA */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary to-[#0a2a29] p-8 text-white shadow-lg">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-white/15 backdrop-blur-sm">
                    <CalendarCheckIcon className="h-7 w-7 text-white" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">Still have a question?</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Our care team is happy to help you personally. Book a consultation with our experts today.
                  </p>
                  <Button
                    className="mt-6 w-full bg-[#048584] text-brand-primary hover:bg-#08C6C4-100"
                    onClick={() => openModal()}
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>

              {/* Direct Contact Info */}
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-secondary/10">
                    <MessageCircleIcon className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-dark">Get in Touch</h3>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Phone */}
                  <a href={`tel:${CLINIC.phone}`} className="group flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-brand-primary/10">
                      <PhoneIcon className="h-4 w-4 text-slate-500 group-hover:text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Call us directly</p>
                      <p className="text-sm font-semibold text-brand-dark">{CLINIC.phone}</p>
                    </div>
                  </a>

                  {/* Email (Assuming CLINIC has an email property, if not, remove this block) */}
                  <a href={`mailto:${CLINIC.email || 'info@clinic.com'}`} className="group flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-brand-primary/10">
                      <MailIcon className="h-4 w-4 text-slate-500 group-hover:text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Email support</p>
                      <p className="text-sm font-semibold text-brand-dark">{CLINIC.email || 'care@clinic.com'}</p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                      <ClockIcon className="h-4 w-4 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Working hours</p>
                      <p className="text-sm font-semibold text-brand-dark">{CLINIC.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Link / Policy */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <a href="/services" className="group flex items-center justify-between text-sm font-medium text-slate-600 hover:text-brand-primary">
                  <span>Explore our services</span>
                  <ChevronRightIcon className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" />
                </a>
              </div>

            </div>
          </aside>
        </div>
      </section>
    </>
  );
}