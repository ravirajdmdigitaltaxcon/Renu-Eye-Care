import { TargetIcon, HeartHandshakeIcon, QuoteIcon, SparklesIcon, CheckCircleIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Counter } from '../components/ui/Counter';
import { Reveal } from '../components/ui/Reveal';
import { STATS } from '../data/site';
import { IMAGES } from '../data/images';

const FOUNDERS = [
  {
    name: 'Late Mrs. Renu Gogoi',
    role: 'Our Inspiration',
    bio: 'The name "Renu" is a heartfelt tribute to Late Mrs. Renu Gogoi, whose love, compassion, and unwavering values continue to inspire our journey. Her selfless nature and caring spirit remind us every day that true healthcare begins with kindness. Through Renu Eye Care Centre, we honor her legacy by serving every patient with empathy, dignity, and excellence.',
    img: IMAGES.FOUNDER_1
  },
  {
    name: 'Late Mrs. Renu Handique',
    role: 'Our Inspiration',
    bio: 'Late Mrs. Renu Handique symbolized strength, humility, and unconditional care. Her dedication to family and her compassionate outlook on life laid the foundation for the values we uphold today. Her memory encourages us to provide ethical, affordable, and patient-centered eye care for every individual who walks through our doors.',
    img: IMAGES.FOUNDER_2
  },
  {
    name: 'Late Mrs. Renu Tamuli',
    role: 'Our Inspiration',
    bio: 'Late Mrs. Renu Tamuli represents the spirit of hope, resilience, and service. Though she is no longer with us, her blessings continue to guide our mission every single day. Her legacy inspires us to combine advanced medical technology with genuine compassion, ensuring that every patient receives not only the best treatment but also the care and respect they truly deserve.',
    img: IMAGES.FOUNDER_3
  }
];


export function About() {
  return (
    <>
      <PageHero
        title="Two decades of protecting your sight"
        subtitle="The story, the people and the values behind Renu Eye Care Centre."
        crumb="About" />

      {/* Our Story - Intro Section */}
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal scale>
            <img src={IMAGES.IMG_ABOUT} alt="Our hospital" loading="lazy" decoding="async" className="w-full rounded-img object-cover shadow-glass" />
          </Reveal>
          <div>
            <SectionTitle
              align="left"
              eyebrow="Our Story"
              title="Founded on care, driven by excellence"
              subtitle="What began as a single consulting room is today one of the region's most trusted eye hospitals — but our promise has never changed: treat every patient like family." />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-card bg-brand-section p-5">
                <TargetIcon className="h-6 w-6 text-brand-primary" />
                <h4 className="mt-3 font-display font-bold text-brand-dark">Mission</h4>
                <p className="mt-1 text-sm text-slate-500">Accessible, anxiety-free, world-class eye care for all.</p>
              </div>
              <div className="rounded-card bg-brand-section p-5">
                <HeartHandshakeIcon className="h-6 w-6 text-brand-primary" />
                <h4 className="mt-3 font-display font-bold text-brand-dark">Vision</h4>
                <p className="mt-1 text-sm text-slate-500">A world free of preventable and treatable blindness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-primary py-16">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
          {STATS.map((s) =>
            <div key={s.label} className="text-center text-white">
              <p className="text-4xl font-bold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-white/80">{s.label}</p>
            </div>
          )}
        </div>
      </section>

      {/* Our journey - Main Content & Founders */}
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Our Journey" title="Where Compassion Meets Excellence" />

        {/* Intro Text */}
        <div className="mx-auto mt-10 max-w-4xl space-y-4 text-center">
          <p className="text-slate-600 leading-relaxed">
            At Renu Eye Care Centre, our journey was never driven by the dream of becoming eye specialists. Instead, life itself guided us toward a purpose far greater than we had imagined — restoring vision and transforming lives.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Over the years, ophthalmology became much more than a profession. It became our passion. Every successful surgery, every patient who regained sight, and every grateful smile strengthened our commitment to delivering exceptional eye care with compassion, precision, and integrity.
          </p>
        </div>

        {/* The Story Behind "Renu" - 60/40 Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-2xl font-bold text-brand-dark">The Story Behind "Renu"</h3>
            <p className="text-slate-600 leading-relaxed">
              The name "Renu" holds a deeply personal place in our hearts. It was the first name of each of our mothers—an extraordinary coincidence that inspired the identity of Renu Eye Care Centre. Though they are no longer with us, we believe their blessings continue to guide every step of our journey.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This name is not merely our identity; it represents love, compassion, sacrifice, and service—the very values upon which our institution stands.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-card bg-brand-primary p-8 text-white shadow-glass relative overflow-hidden">
              <QuoteIcon className="absolute top-4 right-4 h-16 w-16 text-white/10" />
              <p className="relative z-10 italic text-lg font-medium leading-relaxed">
                "It was the first name of each of our mothers—an extraordinary coincidence that inspired the identity of Renu Eye Care Centre."
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Vision & Mission */}
        <div className="mt-24 space-y-24">

          {/* Vision */}
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Vision Image */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="../../public/Home-section-Image.jpg"
                alt="Our Vision"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Vision Content */}
            <div>
              <h3 className="flex items-center gap-3 font-display text-3xl font-bold text-brand-dark">
                <HeartHandshakeIcon className="h-8 w-8 text-brand-primary" />
                Our Vision
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                At <strong>Renu Eye Care Centre</strong>, our vision is to become the most
                trusted destination for comprehensive eye care across Northeast India by
                combining internationally recognized medical excellence with genuine
                compassion. We strive to provide every patient with world-class treatment
                through advanced technology, experienced specialists, and personalized
                care.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We envision a future where preventable blindness is significantly reduced
                through early diagnosis, innovative treatment, continuous research, and
                community outreach. Our commitment is to make quality eye care
                accessible, affordable, and life-changing for every generation.
              </p>
            </div>

          </div>

          {/* Mission */}
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Mission Content */}
            <div>

              <h3 className="flex items-center gap-3 font-display text-3xl font-bold text-brand-dark">
                <TargetIcon className="h-8 w-8 text-brand-primary" />
                Our Mission
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Every patient deserves the highest standard of eye care delivered with
                empathy, integrity, and clinical excellence. Our mission is to protect,
                restore, and enhance vision through innovation, ethical medical
                practices, and patient-centered care.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  "Deliver comprehensive eye care using advanced diagnostic and surgical technology.",
                  "Provide accurate diagnosis and personalized treatment plans for every patient.",
                  "Maintain the highest standards of patient safety, ethics, and medical excellence.",
                  "Promote preventive eye care through awareness programs and regular eye screening camps.",
                  "Make world-class eye care affordable and accessible to every section of society.",
                  "Continuously adopt the latest innovations and global best practices in ophthalmology.",
                  "Treat every patient with compassion, dignity, respect, and transparency."
                ].map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <CheckCircleIcon className="mt-1 h-6 w-6 shrink-0 text-brand-primary" />
                    <span className="leading-7 text-slate-600">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Mission Image */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="../../public/f95f15aa-8bf2-4df4-8f7d-e58a6764fb92.jpg"
                alt="Our Mission"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </div>

        </div>

        {/* Maeyes Foundation */}
        <div className="mt-20 overflow-hidden rounded-card bg-brand-dark p-8 text-white shadow-glass sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200">
                <img
                  src="https://maeyesfoundation.org/images/icon.webp"
                  alt="MA Eyes Foundation Logo"
                  className="h-10 w-10 object-contain"
                />
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">Maeyes Foundation</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                Recognizing that quality eye care should reach everyone, especially underserved communities, the founders established Maeyes Foundation, the charitable arm dedicated to expanding access to eye health services.
              </p>
            </div>
            <div className="lg:border-l lg:border-white/10 lg:pl-8">
              <p className="text-white/80 leading-relaxed">
                Through eye screening camps, awareness programs, school initiatives, community outreach, and charitable projects, the Foundation has successfully impacted thousands of lives across the region.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership - Founder Cards (Premium Layout) */}
        <div className="mt-20">
          <SectionTitle align="center" eyebrow="Leadership" title="Meet Our Founders" />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 0.1}>
                <div className="group h-full overflow-hidden rounded-card bg-white shadow-glass transition-all duration-300 hover:-translate-y-2 hover:shadow-float">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={founder.img}
                      alt={founder.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-brand-dark">{founder.name}</h3>
                    <p className="text-sm font-medium text-brand-primary">{founder.role}</p>
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed">{founder.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}