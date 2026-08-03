import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionTitle } from '../components/ui/SectionTitle';

import { CheckCircleIcon } from 'lucide-react';
import { TECHNOLOGIES } from '../data/site';

import Equipment1 from '../../public/Equimennts/Equipment1.png';
import Equipment2 from '../../public/Equimennts/Equipment2.png';
import Equipment3 from '../../public/Equimennts/Equipment3.png';
import Equipment4 from '../../public/Equimennts/Equipment4.png';
import Equipment5 from '../../public/Equimennts/Equipment5.png';
import Equipment6 from '../../public/Equimennts/Equipment6.png';
import Equipment7 from '../../public/Equimennts/Equipment7.png';
import Equipment8 from '../../public/Equimennts/Equipment8.png';



export function Technology() {
  // Array for advanced equipments
  const ADVANCED_EQUIPMENTS = [
  {
  name: "Heidelberg Anterion",
  type: "OCT / AS-OCT / Optical Biometry",
  image: Equipment1,
  features: [
    "Combines OCT, Anterior Segment OCT, and Optical Biometry in a single platform.",
    "Provides highly accurate measurements for cataract surgery planning and IOL calculation.",
    "High-resolution imaging of the cornea, anterior chamber, and crystalline lens.",
    "Fast, non-contact examination with exceptional precision and patient comfort."
  ]
},
{
      name: "Zeiss Cirrus HD-OCT",
      type: "High-resolution retinal imaging",
      image: Equipment2,
      features: [
        "High-definition cross-sectional imaging of the retina for early detection of glaucoma and macular diseases.",
        "Advanced macular thickness analysis and ganglion cell mapping for precise disease progression tracking.",
        "Enhanced Deep Imaging (EDI) protocol to clearly visualize the choroid and outer retinal layers.",
        "Fast, non-invasive scans ensuring high patient comfort and highly accurate, repeatable results."
      ]
    },
{
  name: "Humphrey Field Analyzer 3",
  type: "Visual Field Analyzer",
  image: Equipment3,
  features: [
    "Gold-standard visual field testing system for glaucoma diagnosis and monitoring.",
    "Detects early vision loss before noticeable symptoms appear.",
    "Advanced progression analysis for long-term glaucoma management.",
    "Quick, accurate, and reliable automated perimetry testing."
  ]
},
{
  name: "Alcon Centurion Vision System",
  type: "Phacoemulsification System",
  image: Equipment4,
  features: [
    "Premium cataract surgery platform with Active Fluidics technology.",
    "Ensures stable intraocular pressure throughout the surgical procedure.",
    "Efficient lens removal with minimal incision and faster patient recovery.",
    "Provides enhanced safety, precision, and surgical control."
  ]
},
{
  name: "Alcon Constellation Vision System",
  type: "Vitreo-Retinal Surgical Platform",
  image: Equipment5,
  features: [
    "Advanced vitreo-retinal surgery system for complex retinal procedures.",
    "High-speed vitrectomy with exceptional cutting efficiency.",
    "Integrated illumination and fluidics for improved surgical safety.",
    "Designed for retinal detachment, macular hole, and diabetic retina surgeries."
  ]
},
{
  name: "Zeiss Visulas YAG-III",
  type: "Nd:YAG Laser System",
  image: Equipment6,
  features: [
    "Precision Nd:YAG laser for posterior capsulotomy and peripheral iridotomy.",
    "High-energy laser delivery with exceptional targeting accuracy.",
    "Non-invasive outpatient laser treatment with minimal discomfort.",
    "Improves vision quickly after cataract surgery-related capsule opacification."
  ]
},
{
  name: "Heidelberg HR Spectralis",
  type: "OCT + Fluorescein & ICG Angiography",
  image: Equipment7,
  features: [
    "Multimodal retinal imaging with OCT, Fluorescein Angiography, and ICG Angiography.",
    "Provides detailed visualization of retinal and choroidal blood vessels.",
    "Essential for diagnosing diabetic retinopathy, AMD, and retinal vascular diseases.",
    "High-resolution imaging enables accurate diagnosis and treatment planning."
  ]
},
{
  name: "CL-UVR RAPID Corneal Cross Linking",
  type: "Corneal Cross Linking System",
  image: Equipment8,
  features: [
    "Advanced UV-A corneal cross-linking technology for keratoconus treatment.",
    "Strengthens corneal collagen fibers to halt disease progression.",
    "Rapid treatment protocol with enhanced patient comfort.",
    "Improves long-term corneal stability and visual outcomes."
  ]
}
  ];

  return (
    <>
      <PageHero
        title="Our Technology"
        subtitle="Precision instruments and intelligent diagnostics that make safer, sharper outcomes possible."
        crumb="Technology" />
      
      <section className="mx-auto max-w-container px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.name} delay={i % 3 * 0.06}>
                <div className="group h-full overflow-hidden rounded-card border border-slate-100 bg-white p-6 shadow-glass transition-all hover:-translate-y-1 hover:shadow-float">
                  <span className="grid h-14 w-14 place-items-center rounded-btn bg-brand-primary text-white shadow-float transition-colors group-hover:bg-brand-secondary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">{tech.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{tech.desc}</p>
                </div>
              </Reveal>);

          })}
        </div>

      </section>

      {/* Advanced Equipments Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionTitle 
            align="center" 
            eyebrow="Advanced Tools" 
            title="Our Advanced Equipments" 
            subtitle="Investing in world-class diagnostic technology to provide you with the most accurate and safe eye care." 
          />

          <div className="mt-12 space-y-10">
            {ADVANCED_EQUIPMENTS.map((equip, i) => {
              // Alternating logic: reverse layout for odd indexes (2nd, 4th, etc.)
              const isReversed = i % 2 !== 0;

              return (
                <Reveal key={equip.name} delay={i * 0.1}>
                  <div className="grid gap-8 rounded-card border border-slate-100 bg-white p-6 shadow-glass lg:grid-cols-2 lg:p-8 lg:items-center">
                    
                    {/* Image & Name Block */}
                    <div className={`flex flex-col items-center text-center lg:text-left lg:items-start ${isReversed ? 'lg:order-last' : ''}`}>
                      <div className="w-full overflow-hidden rounded-img bg-brand-section p-6 flex items-center justify-center shadow-glass">
                        <img 
                          src={equip.image} 
                          alt={equip.name} 
                          loading="lazy" 
                          decoding="async" 
                          className="max-h-80 w-full object-contain"
                        />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-bold text-brand-dark">{equip.name}</h3>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-primary">
                        {equip.type}
                      </p>
                    </div>

                    {/* Content / Features Block */}
                    <div className={isReversed ? 'lg:order-first' : ''}>
                      <h4 className="font-display text-xl font-bold text-brand-dark">Key Capabilities & Features</h4>
                      <ul className="mt-5 space-y-4">
                        {equip.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-slate-600 sm:text-base">
                            <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>);
}