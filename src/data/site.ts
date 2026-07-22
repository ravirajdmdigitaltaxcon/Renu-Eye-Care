
import {
  EyeIcon,
  ScanEyeIcon,
  GlassesIcon,
  StethoscopeIcon,
  ActivityIcon,
  DropletIcon,
  BabyIcon,
  BrainIcon,
  SparklesIcon,
  MicroscopeIcon } from
'lucide-react';

export const CLINIC = {
  name: 'Renu Eye Care Centre',
  tagline: 'Vision Beyond Sight',
  phone: '+91 98765 43210',
  emergency: '+91 98765 00000',
  email: 'care@renueye.com',
  address: '221 Vision Avenue, Medical District, Mumbai 400001',
  hours: 'Mon–Sat: 9:00 AM – 8:00 PM · Sun: 10:00 AM – 2:00 PM',
  whatsapp: 'https://wa.me/919876543210'
};

export const STATS = [
{ value: 25, suffix: '+', label: 'Years Experience' },
{ value: 100000, suffix: '+', label: 'Happy Patients' },
{ value: 50, suffix: '+', label: 'Awards Won' },
{ value: 98, suffix: '%', label: 'Success Rate' }];


export type Service = {
  slug: string;
  title: string;
  icon: any;
  short: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  image: string;
};

export const SERVICES: Service[] = [
{
  slug: 'cataract',
  title: 'Cataract Surgery',
  icon: EyeIcon,
  short: 'Bladeless, premium-lens cataract removal for crystal-clear vision.',
  description:
  'Our bladeless micro-incision cataract surgery uses premium intraocular lenses to restore sharp, youthful vision with minimal downtime.',
  symptoms: ['Cloudy or blurred vision', 'Glare and halos around lights', 'Faded colours', 'Frequent prescription changes'],
  treatment: ['Phacoemulsification', 'Femtosecond laser assist', 'Premium multifocal IOLs', 'Day-care discharge'],
  image: 'IMG_CATARACT'
},
{
  slug: 'lasik',
  title: 'LASIK & Refractive',
  icon: ScanEyeIcon,
  short: 'Freedom from glasses with blade-free, bladeless LASIK.',
  description:
  'Achieve spectacle independence with our blade-free Contoura and SMILE laser vision correction, personalised to your corneal map.',
  symptoms: ['Dependence on glasses / contacts', 'Myopia, hyperopia, astigmatism', 'Dry, tired eyes from lenses'],
  treatment: ['Contoura Vision', 'SMILE laser', 'PRK for thin corneas', 'Same-day recovery'],
  image: 'IMG_LASIK'
},
{
  slug: 'retina',
  title: 'Retina Care',
  icon: ActivityIcon,
  short: 'Advanced diagnosis and treatment for retinal disorders.',
  description:
  'From diabetic retinopathy to macular degeneration, our retina specialists use OCT imaging and micro-surgery to protect your sight.',
  symptoms: ['Floaters and flashes', 'Distorted central vision', 'Sudden vision loss', 'Diabetic vision changes'],
  treatment: ['Anti-VEGF injections', 'Laser photocoagulation', 'Vitreo-retinal surgery', 'OCT monitoring'],
  image: 'IMG_RETINA'
},
{
  slug: 'cornea',
  title: 'Cornea Services',
  icon: MicroscopeIcon,
  short: 'Transplants and keratoconus care from expert corneal surgeons.',
  description:
  'Comprehensive corneal care including transplants, cross-linking for keratoconus, and treatment of infections and injuries.',
  symptoms: ['Progressive blurring', 'Sensitivity to light', 'Corneal scarring', 'Keratoconus'],
  treatment: ['Corneal transplant (DMEK/DSEK)', 'Collagen cross-linking', 'Specialty contact lenses'],
  image: 'IMG_CORNEA'
},
{
  slug: 'glaucoma',
  title: 'Glaucoma Care',
  icon: StethoscopeIcon,
  short: 'Early detection and lifelong management of glaucoma.',
  description:
  'The silent thief of sight is managed with precise pressure monitoring, laser therapy and micro-invasive glaucoma surgery.',
  symptoms: ['Gradual peripheral vision loss', 'Eye pain or pressure', 'Halos around lights'],
  treatment: ['Medication management', 'SLT laser therapy', 'MIGS surgery', 'Visual field testing'],
  image: 'IMG_GLAUCOMA'
},
{
  slug: 'dry-eye',
  title: 'Dry Eye Clinic',
  icon: DropletIcon,
  short: 'Lasting relief from chronic dry and irritated eyes.',
  description:
  'A dedicated dry eye clinic offering tear-film analysis and advanced therapies for lasting comfort in the screen age.',
  symptoms: ['Burning and grittiness', 'Watery reflex tearing', 'Fluctuating vision', 'Screen fatigue'],
  treatment: ['IPL therapy', 'LipiFlow', 'Punctal plugs', 'Personalised eye drops'],
  image: 'IMG_DRYEYE'
},
{
  slug: 'squint',
  title: 'Squint Correction',
  icon: GlassesIcon,
  short: 'Alignment surgery and therapy for children and adults.',
  description:
  'Correcting misaligned eyes for better vision and confidence, with both surgical and non-surgical options.',
  symptoms: ['Misaligned eyes', 'Double vision', 'Head tilt', 'Eye strain'],
  treatment: ['Squint surgery', 'Vision therapy', 'Prism glasses', 'Botox for squint'],
  image: 'IMG_SQUINT'
},
{
  slug: 'pediatric',
  title: 'Pediatric Eye Care',
  icon: BabyIcon,
  short: 'Gentle, child-friendly eye care from infancy onward.',
  description:
  'Specialised care for developing eyes — screening, lazy-eye treatment and myopia control in a friendly environment.',
  symptoms: ['Squinting or head tilt', 'Sitting too close to screens', 'Lazy eye', 'Frequent eye rubbing'],
  treatment: ['Amblyopia therapy', 'Myopia control', 'Paediatric glasses', 'Early screening'],
  image: 'IMG_PEDIATRIC'
},
{
  slug: 'oculoplasty',
  title: 'Oculoplasty',
  icon: SparklesIcon,
  short: 'Cosmetic and reconstructive surgery around the eyes.',
  description:
  'Reconstructive and aesthetic procedures for the eyelids, tear ducts and orbit — restoring both function and appearance.',
  symptoms: ['Drooping eyelids', 'Watery eyes', 'Eyelid tumours', 'Cosmetic concerns'],
  treatment: ['Ptosis correction', 'Blepharoplasty', 'Tear-duct surgery', 'Orbital reconstruction'],
  image: 'IMG_OCULO'
},
{
  slug: 'neuro-ophthalmology',
  title: 'Neuro-Ophthalmology',
  icon: BrainIcon,
  short: 'Care for vision problems linked to the nervous system.',
  description:
  'Diagnosis and management of complex vision issues arising from the optic nerve and brain, in a multidisciplinary setting.',
  symptoms: ['Sudden vision loss', 'Double vision', 'Unequal pupils', 'Optic nerve swelling'],
  treatment: ['Neuro-imaging', 'Visual field analysis', 'Medical management', 'Coordinated care'],
  image: 'IMG_NEURO'
}];


export type Doctor = {
  slug: string;
  name: string;
  role: string;
  experience: string;
  qualification: string;
  languages: string[];
  bio: string;
  image: string;
  awards: string[];
  treatments: string[];
};

export const DOCTORS: Doctor[] = [
{
  slug: 'renu-mehta',
  name: 'Dr. Renu Mehta',
  role: 'Founder & Cataract Surgeon',
  experience: '25+ Years',
  qualification: 'MBBS, MS (Ophthalmology), FICO',
  languages: ['English', 'Hindi', 'Marathi'],
  bio: 'Dr. Renu Mehta founded Renu Eye Care Centre with a vision to bring world-class ophthalmology within reach. She has personally performed over 40,000 cataract and refractive procedures.',
  image: 'IMG_DOC_RENU',
  awards: ['Padma Shri nominee 2022', 'Best Eye Surgeon, West India 2020', 'Lifetime Achievement, IOA 2023'],
  treatments: ['Cataract Surgery', 'Premium IOLs', 'Refractive Lens Exchange']
},
{
  slug: 'arjun-verma',
  name: 'Dr. Arjun Verma',
  role: 'Retina Specialist',
  experience: '15+ Years',
  qualification: 'MBBS, MS, FVRS (Retina)',
  languages: ['English', 'Hindi'],
  bio: 'A leading vitreo-retinal surgeon, Dr. Verma specialises in diabetic eye disease and complex retinal detachments using the latest micro-incision techniques.',
  image: 'IMG_DOC_ARJUN',
  awards: ['Young Retina Surgeon Award 2019', 'Research Fellowship, USA'],
  treatments: ['Retinal Detachment', 'Diabetic Retinopathy', 'Macular Surgery']
},
{
  slug: 'priya-nair',
  name: 'Dr. Priya Nair',
  role: 'LASIK & Cornea Surgeon',
  experience: '12+ Years',
  qualification: 'MBBS, DNB, Fellowship Cornea',
  languages: ['English', 'Hindi', 'Malayalam'],
  bio: 'Dr. Nair is a pioneer of bladeless Contoura and SMILE laser vision correction, having given thousands of patients freedom from glasses.',
  image: 'IMG_DOC_PRIYA',
  awards: ['Excellence in Refractive Surgery 2021'],
  treatments: ['Contoura LASIK', 'SMILE', 'Keratoconus (C3R)']
},
{
  slug: 'sanjay-rao',
  name: 'Dr. Sanjay Rao',
  role: 'Glaucoma & Paediatrics',
  experience: '18+ Years',
  qualification: 'MBBS, MS, Glaucoma Fellowship',
  languages: ['English', 'Hindi', 'Kannada'],
  bio: 'With a gentle approach beloved by children and a sharp clinical eye for glaucoma, Dr. Rao leads our paediatric and glaucoma services.',
  image: 'IMG_DOC_SANJAY',
  awards: ['Community Service Award 2018'],
  treatments: ['Glaucoma Management', 'Paediatric Eye Care', 'Squint Correction']
}];


export const EYE_PARTS = [
{
  id: 'cornea',
  name: 'Cornea',
  blurb: 'The clear, dome-shaped front surface that focuses most of the light entering the eye.',
  detail:
  'The cornea is the transparent front layer of the eye. It refracts light and protects the inner structures. Conditions like keratoconus and infections affect it directly.'
},
{
  id: 'iris',
  name: 'Iris',
  blurb: 'The coloured ring that controls how much light reaches the retina.',
  detail:
  'The iris is the pigmented muscle that gives your eyes their colour and adjusts the pupil size to regulate incoming light.'
},
{
  id: 'pupil',
  name: 'Pupil',
  blurb: 'The adjustable opening at the centre of the iris.',
  detail:
  'The pupil widens in dim light and narrows in bright light, working with the iris to control light entering the eye.'
},
{
  id: 'lens',
  name: 'Lens',
  blurb: 'The flexible structure that fine-tunes focus onto the retina.',
  detail:
  'The crystalline lens changes shape to focus on near and far objects. When it clouds with age, it becomes a cataract.'
},
{
  id: 'retina',
  name: 'Retina',
  blurb: 'The light-sensitive layer that converts light into neural signals.',
  detail:
  'The retina lines the back of the eye and contains photoreceptors. Disorders include retinal detachment and diabetic retinopathy.'
},
{
  id: 'macula',
  name: 'Macula',
  blurb: 'The central retina responsible for sharp, detailed vision.',
  detail:
  'The macula gives you the fine central vision needed for reading and recognising faces. Age-related degeneration affects it.'
},
{
  id: 'optic-nerve',
  name: 'Optic Nerve',
  blurb: 'The cable that carries visual signals to the brain.',
  detail:
  'The optic nerve transmits electrical impulses from the retina to the brain. Glaucoma damages this nerve over time.'
},
{
  id: 'uvea',
  name: 'Uvea',
  blurb: 'The pigmented middle layer supplying blood to the eye.',
  detail:
  'The uvea includes the iris, ciliary body and choroid. Inflammation of the uvea is called uveitis.'
}];


export const TECHNOLOGIES = [
{ name: 'LASIK Suite', desc: 'Contoura & SMILE laser platforms', icon: ScanEyeIcon },
{ name: 'OCT Imaging', desc: 'Cross-sectional retinal scans', icon: ActivityIcon },
{ name: 'Retina Lab', desc: 'Wide-field fundus imaging', icon: EyeIcon },
{ name: 'Phaco System', desc: 'Micro-incision cataract removal', icon: MicroscopeIcon },
{ name: 'Cornea Analyser', desc: 'Topography & tomography', icon: StethoscopeIcon },
{ name: 'AI Diagnosis', desc: 'Deep-learning screening support', icon: BrainIcon }];


export const TESTIMONIALS = [
{
  name: 'Ananya Sharma',
  role: 'LASIK Patient',
  quote:
  'I woke up the next morning and could read the clock across the room. Renu Eye Care gave me back my freedom from glasses.',
  image: 'IMG_T1'
},
{
  name: 'Rajesh Iyer',
  role: 'Cataract Patient',
  quote:
  'The whole day-care procedure was painless and the staff treated my father like family. Colours look vivid again!',
  image: 'IMG_T2'
},
{
  name: 'Meera Kapoor',
  role: 'Retina Patient',
  quote:
  'Dr. Verma caught my diabetic retinopathy early and saved my sight. I cannot thank this team enough.',
  image: 'IMG_T3'
}];


export const FAQS = [
{
  q: 'How do I book an appointment?',
  a: 'Use the “Book Appointment” button anywhere on the site, call us, or message us on WhatsApp. We confirm within a few hours.'
},
{
  q: 'Is cataract surgery painful?',
  a: 'No. It is a quick, day-care procedure performed under local anaesthetic drops. Most patients resume normal activities within a day.'
},
{
  q: 'Am I a candidate for LASIK?',
  a: 'A free suitability screening evaluates your corneal thickness, prescription stability and eye health to confirm candidacy.'
},
{
  q: 'Do you accept insurance?',
  a: 'Yes, we are empanelled with all major insurers and offer cashless facilities for approved procedures.'
},
{
  q: 'What should I bring to my first visit?',
  a: 'Please bring your current glasses/prescription, any past eye records, a list of medications and a valid photo ID.'
}];


export const BLOG = [
{
  slug: 'protect-eyes-screen-age',
  title: 'How to Protect Your Eyes in the Screen Age',
  category: 'Wellness',
  date: '12 Jun 2026',
  excerpt: 'Digital eye strain is real. Learn the 20-20-20 rule and simple habits that keep your vision comfortable all day.',
  image: 'IMG_BLOG1',
  author: 'Dr. Priya Nair'
},
{
  slug: 'cataract-myths-facts',
  title: 'Cataract Surgery: Myths vs. Facts',
  category: 'Treatment',
  date: '02 Jun 2026',
  excerpt: 'Is it too early? Will it come back? We bust the most common cataract myths with clear, expert answers.',
  image: 'IMG_BLOG2',
  author: 'Dr. Renu Mehta'
},
{
  slug: 'diabetes-and-your-eyes',
  title: 'Diabetes and Your Eyes: What You Must Know',
  category: 'Awareness',
  date: '24 May 2026',
  excerpt: 'Diabetes silently affects your retina. Here is why an annual dilated exam is the best gift you can give your eyes.',
  image: 'IMG_BLOG3',
  author: 'Dr. Arjun Verma'
}];


export const PRICING = [
{
  name: 'Standard Cataract',
  price: '₹25,000',
  per: 'per eye',
  features: ['Phacoemulsification', 'Monofocal IOL', 'Day-care procedure', 'Post-op follow-ups'],
  highlight: false
},
{
  name: 'Premium LASIK',
  price: '₹65,000',
  per: 'both eyes',
  features: ['Contoura Vision', 'Blade-free', 'Free screening', '1-year care package'],
  highlight: true
},
{
  name: 'Retina Care Plan',
  price: '₹8,000',
  per: 'per session',
  features: ['OCT imaging', 'Anti-VEGF injection', 'Specialist review', 'Monitoring plan'],
  highlight: false
}];