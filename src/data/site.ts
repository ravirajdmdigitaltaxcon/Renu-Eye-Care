
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
  MicroscopeIcon
} from
  'lucide-react';
import { GiDna2 } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa6";
import { TbActivity } from "react-icons/tb";
import { TbMicroscope } from "react-icons/tb";
import { LuOrbit } from "react-icons/lu";
import { LuZap } from "react-icons/lu";

export const CLINIC = {
  name: 'Renu Eye Care Centre',
  tagline: 'Vision Beyond Sight',
  phone: '+91 6026096027',
  emergency: '+91 6026096029',
  email: 'renueyecarecenter@gmail.com',
  address: 'Graham Bazar, Dibrugarh, Assam 786001',
  hours: 'Mon–Sat: 8:00 AM – 8:00 PM · Sun: 08:00 AM – 12:00 PM',
  whatsapp: 'https://wa.me/916026096027'
};

export const STATS = [
  { value: 30, suffix: '+', label: 'Years Experience' },
  { value: 300, suffix: '+', label: 'Happy Patients' },
  { value: 20, suffix: '+', label: 'Awards Won' },
  { value: 99, suffix: '%', label: 'Success Rate' }];


export type Service = {
  slug: string;
  title: string;
  icon: any;
  short: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  image: string;
  faqs: {
    q: string;
    a: string;
  }[];
};

export const SERVICES: Service[] = [
  {
    slug: 'cataract',
    title: 'Cataract Surgery',
    icon: EyeIcon,
    short: 'Bladeless, premium-lens cataract removal for crystal-clear vision.',
    description:
      'A cataract is a common eye condition in which the natural lens of the eye becomes cloudy, causing blurred vision, glare, and difficulty seeing clearly, especially at night. If left untreated, it can gradually interfere with daily activities such as reading, driving, and recognizing faces. Cataract surgery is a safe and highly effective procedure that removes the cloudy lens and replaces it with a clear artificial intraocular lens (IOL). At Renu Eye Care Centre, we use advanced micro-incision techniques and premium lens options to restore clear vision with faster recovery and long-lasting results.',
    symptoms: [
      'Blurred or cloudy vision that gradually worsens over time',
      'Difficulty seeing at night or in dim lighting',
      'Increased sensitivity to bright lights and glare, especially while driving',
      'Halos around lights, particularly at night',
      'Faded or yellowish colors that appear less vibrant',
      'Frequent changes in eyeglass or contact lens prescription',
      'Double vision in one eye (in some cases)',
      'Difficulty reading, recognizing faces, or performing daily activities due to reduced vision'
    ],
    treatment: [
      'Comprehensive eye examination and advanced diagnostic testing to assess the severity of the cataract.',
      'Micro-incision Phacoemulsification surgery to safely remove the cloudy natural lens with minimal discomfort.',
      'Femtosecond Laser-Assisted Cataract Surgery (FLACS) for enhanced precision and improved surgical outcomes.',
      'Implantation of premium Intraocular Lenses (IOLs), including Monofocal, Multifocal, Toric, and Extended Depth of Focus (EDOF) lenses based on the patient’s visual needs.',
      'Day-care procedure performed under local anesthesia, allowing patients to return home the same day.',
      'Personalized post-operative care with regular follow-up visits to ensure smooth healing and optimal visual recovery.'
    ],
    image: '/Services/Cataract-Surgery.jpg',
    faqs: [
      {
        q: 'What is a cataract?',
        a: 'A cataract is the clouding of the eye’s natural lens, leading to blurred vision, glare, and difficulty seeing clearly.'
      },
      {
        q: 'When should cataract surgery be done?',
        a: 'Surgery is recommended when cataracts begin to interfere with your daily activities such as reading, driving, or recognizing faces.'
      },
      {
        q: 'Is cataract surgery painful?',
        a: 'No. Cataract surgery is performed under local anesthesia and is generally painless. Most patients experience little to no discomfort.'
      },
      {
        q: 'How long does the surgery take?',
        a: 'The procedure usually takes about 15–20 minutes, and patients can return home the same day.'
      },
      {
        q: 'How soon will my vision improve?',
        a: 'Most patients notice improved vision within a few days, while complete healing may take a few weeks.'
      },
      {
        q: 'Can cataracts come back after surgery?',
        a: 'No. Cataracts do not return once removed, although some patients may develop a posterior capsule opacity that can be easily treated with a quick laser procedure.'
      }
    ]
  },
  {
    slug: 'lasik',
    title: 'LASIK & Refractive',
    icon: ScanEyeIcon,
    short: 'Advanced laser vision correction for freedom from glasses and contact lenses.',

    description:
      'LASIK is a safe and advanced laser vision correction procedure designed to reduce or eliminate the need for glasses or contact lenses. It effectively treats nearsightedness (myopia), farsightedness (hyperopia), and astigmatism by reshaping the cornea with precision laser technology. At Renu Eye Care Centre, we offer personalized refractive solutions using the latest Contoura Vision, SMILE, and PRK technologies to provide clear vision, faster recovery, and long-lasting results.',

    symptoms: [
      'Difficulty seeing distant objects clearly (Myopia)',
      'Difficulty seeing nearby objects clearly (Hyperopia)',
      'Blurred or distorted vision caused by Astigmatism',
      'Dependence on glasses or contact lenses',
      'Frequent changes in spectacle prescription',
      'Eye strain and headaches after prolonged reading or screen use',
      'Difficulty driving at night due to blurred vision',
      'Dry or irritated eyes caused by prolonged contact lens wear'
    ],

    treatment: [
      'Comprehensive eye examination and corneal mapping to determine LASIK eligibility.',
      'Blade-free Contoura Vision LASIK for highly customized laser vision correction.',
      'SMILE (Small Incision Lenticule Extraction) for minimally invasive treatment with faster healing.',
      'PRK (Photorefractive Keratectomy) for patients with thin corneas or unsuitable for LASIK.',
      'Advanced Wavefront-guided technology for precise and personalized treatment.',
      'Post-operative follow-up care to ensure optimal healing and excellent visual outcomes.'
    ],

    faqs: [
      {
        q: 'What is LASIK surgery?',
        a: 'LASIK is a laser vision correction procedure that reshapes the cornea to reduce or eliminate the need for glasses or contact lenses.'
      },
      {
        q: 'Who is a suitable candidate for LASIK?',
        a: 'Adults over 18 years with a stable spectacle power, healthy eyes, and sufficient corneal thickness are generally good candidates.'
      },
      {
        q: 'Is LASIK surgery painful?',
        a: 'No. The procedure is virtually painless as numbing eye drops are used. Most patients experience only mild discomfort for a few hours.'
      },
      {
        q: 'How long does the procedure take?',
        a: 'The laser treatment usually takes only a few minutes for each eye, while the entire procedure is completed within 20–30 minutes.'
      },
      {
        q: 'How soon can I return to normal activities?',
        a: 'Most patients can resume normal daily activities within 24–48 hours, although complete healing may take a few weeks.'
      },
      {
        q: 'Are the results of LASIK permanent?',
        a: 'Yes. The correction is permanent, although natural age-related changes such as presbyopia may still occur later in life.'
      }
    ],

    image: '/Services/LASIK & Refractive.webp'
  },
  {
    slug: 'retina',
    title: 'Retina Care',
    icon: ActivityIcon,
    short: 'Comprehensive diagnosis and advanced treatment for retinal diseases to protect and preserve your vision.',

    description:
      'The retina is the light-sensitive layer at the back of the eye that plays a vital role in vision. Diseases affecting the retina, such as diabetic retinopathy, retinal detachment, macular degeneration, and retinal vein occlusion, can lead to permanent vision loss if left untreated. At Renu Eye Care Centre, our retina specialists use advanced diagnostic technology including OCT, Fundus Fluorescein Angiography (FFA), and state-of-the-art surgical techniques to diagnose, monitor, and treat retinal disorders with precision, helping preserve and restore your vision.',

    symptoms: [
      'Sudden appearance of floaters or black spots in your vision',
      'Flashes of light in one or both eyes',
      'Blurred or distorted central vision',
      'Sudden or gradual loss of vision',
      'A dark curtain or shadow moving across your vision',
      'Difficulty reading or recognizing faces',
      'Diabetic patients experiencing changes in vision',
      'Wavy or distorted straight lines'
    ],

    treatment: [
      'Comprehensive retinal examination using advanced imaging technologies.',
      'Optical Coherence Tomography (OCT) for detailed retinal assessment.',
      'Fundus Fluorescein Angiography (FFA) for accurate diagnosis of retinal diseases.',
      'Intravitreal Anti-VEGF injections for diabetic retinopathy, retinal vein occlusion, and macular degeneration.',
      'Laser photocoagulation therapy to treat retinal tears and diabetic retinal diseases.',
      'Advanced Vitreo-Retinal surgery for retinal detachment, vitreous hemorrhage, and macular disorders.',
      'Regular retinal monitoring and personalized follow-up care to preserve long-term vision.'
    ],

    faqs: [
      {
        q: 'What is the retina?',
        a: 'The retina is the light-sensitive tissue at the back of the eye that captures images and sends visual signals to the brain, allowing us to see clearly.'
      },
      {
        q: 'Who is at risk of retinal diseases?',
        a: 'People with diabetes, high blood pressure, high myopia, aging-related eye conditions, or a family history of retinal disorders are at higher risk.'
      },
      {
        q: 'What are the warning signs of retinal problems?',
        a: 'Flashes of light, sudden floaters, blurred vision, distorted vision, or a curtain-like shadow over your vision require immediate medical attention.'
      },
      {
        q: 'Can retinal diseases cause permanent blindness?',
        a: 'Yes. If left untreated, many retinal conditions can lead to permanent vision loss. Early diagnosis and timely treatment are essential.'
      },
      {
        q: 'Is retinal surgery safe?',
        a: 'Modern retinal surgery is highly advanced and safe when performed by experienced retina specialists using the latest technology.'
      },
      {
        q: 'How often should diabetic patients get their retina examined?',
        a: 'People with diabetes should have a comprehensive dilated retinal examination at least once every year or more frequently if advised by their eye specialist.'
      }
    ],

    image: '/Services/Retina-Care.jpg'
  },
  {
    slug: 'cornea',
    title: 'Cornea Services',
    icon: MicroscopeIcon,

    short: 'Advanced diagnosis and treatment for corneal diseases, injuries, and vision restoration.',

    description:
      'The cornea is the transparent front surface of the eye that plays a vital role in focusing light for clear vision. Diseases, infections, injuries, or conditions such as keratoconus can affect the cornea and lead to blurred vision or even vision loss. At Renu Eye Care Centre, we provide comprehensive corneal care using advanced diagnostic technology and modern surgical techniques, including corneal transplantation, collagen cross-linking, and specialty contact lenses to restore vision and improve eye health.',

    symptoms: [
      'Blurred or distorted vision',
      'Eye pain or persistent discomfort',
      'Redness and irritation of the eye',
      'Excessive tearing or watery eyes',
      'Sensitivity to light (Photophobia)',
      'White spots or scarring on the cornea',
      'Progressive vision loss due to Keratoconus',
      'Difficulty wearing contact lenses',
      'Foreign body sensation in the eye',
      'Reduced vision following an eye injury or infection'
    ],

    treatment: [
      'Comprehensive corneal evaluation using advanced imaging and diagnostic technology.',
      'Medical treatment for corneal infections, ulcers, allergies, and inflammatory conditions.',
      'Collagen Cross-Linking (CXL) to strengthen the cornea and slow the progression of Keratoconus.',
      'Specialty contact lenses, including RGP and Scleral lenses, for improved vision in irregular corneas.',
      'Corneal Transplantation (PK, DALK, DSEK, and DMEK) for advanced corneal diseases and scarring.',
      'Management of corneal injuries and ocular surface disorders with personalized treatment plans.',
      'Regular follow-up care to monitor healing and ensure the best possible visual outcomes.'
    ],

    faqs: [
      {
        q: 'What is the cornea?',
        a: 'The cornea is the clear, dome-shaped front surface of the eye that focuses light and plays a crucial role in providing clear vision.'
      },
      {
        q: 'What causes corneal diseases?',
        a: 'Corneal diseases may result from infections, injuries, allergies, inherited conditions like Keratoconus, dry eye disease, or age-related degeneration.'
      },
      {
        q: 'What is Keratoconus?',
        a: 'Keratoconus is a condition in which the cornea gradually becomes thin and cone-shaped, causing distorted and blurred vision.'
      },
      {
        q: 'When is a corneal transplant required?',
        a: 'A corneal transplant is recommended when the cornea becomes severely damaged, scarred, or diseased and vision cannot be restored with glasses or contact lenses.'
      },
      {
        q: 'Is corneal transplant surgery safe?',
        a: 'Yes. Corneal transplantation is a well-established and highly successful procedure when performed by experienced corneal specialists.'
      },
      {
        q: 'Can Keratoconus be cured?',
        a: 'While Keratoconus cannot be completely cured, treatments such as Collagen Cross-Linking (CXL) can stop its progression, and specialty lenses or surgery can significantly improve vision.'
      }
    ],

    image: '/Services/Cornea-Services.jpg'
  },
  {
    slug: 'glaucoma',
    title: 'Glaucoma Care',
    icon: StethoscopeIcon,

    short: 'Advanced diagnosis and treatment to protect your vision from glaucoma.',

    description:
      'Glaucoma is a group of eye diseases that damage the optic nerve, most commonly due to increased intraocular pressure. Often called the "Silent Thief of Sight," glaucoma develops gradually without noticeable symptoms in its early stages and can lead to irreversible vision loss if left untreated. At Renu Eye Care Centre, we provide comprehensive glaucoma screening, advanced diagnostic testing, laser treatments, and minimally invasive surgical procedures to preserve vision and effectively manage the condition.',

    symptoms: [
      'Gradual loss of peripheral (side) vision',
      'Blurred vision',
      'Eye pain or pressure',
      'Halos around lights',
      'Redness of the eye',
      'Severe headache associated with eye pain',
      'Sudden vision loss in advanced cases',
      'Nausea and vomiting during acute glaucoma attacks'
    ],

    treatment: [
      'Comprehensive glaucoma evaluation including eye pressure measurement and optic nerve assessment.',
      'Visual field testing to detect and monitor vision loss.',
      'Optical Coherence Tomography (OCT) for detailed optic nerve analysis.',
      'Prescription eye drops to reduce intraocular pressure.',
      'Selective Laser Trabeculoplasty (SLT) for effective pressure control.',
      'Minimally Invasive Glaucoma Surgery (MIGS) for suitable patients.',
      'Conventional glaucoma surgery (Trabeculectomy and Glaucoma Drainage Devices) for advanced cases.',
      'Regular follow-up examinations to monitor disease progression and preserve vision.'
    ],

    faqs: [
      {
        q: 'What is glaucoma?',
        a: 'Glaucoma is an eye disease that damages the optic nerve, usually due to increased eye pressure, and can lead to permanent vision loss if left untreated.'
      },
      {
        q: 'Why is glaucoma called the Silent Thief of Sight?',
        a: 'Most people experience no symptoms during the early stages, allowing vision loss to occur gradually without notice.'
      },
      {
        q: 'Can glaucoma be cured?',
        a: 'Glaucoma cannot be cured, but early diagnosis and appropriate treatment can effectively slow or stop its progression and protect remaining vision.'
      },
      {
        q: 'Who is at higher risk of developing glaucoma?',
        a: 'People over 40 years of age, those with a family history of glaucoma, diabetes, high eye pressure, or long-term steroid use have a higher risk.'
      },
      {
        q: 'Is glaucoma surgery safe?',
        a: 'Yes. Modern laser procedures and glaucoma surgeries are safe and highly effective when performed by experienced ophthalmologists.'
      },
      {
        q: 'How often should glaucoma patients have an eye examination?',
        a: 'The frequency depends on the severity of the disease, but regular follow-up visits are essential to monitor eye pressure and prevent further vision loss.'
      }
    ],

    image: '../../public/Services/Glaucoma-Care.jpg'
  },
  {
    slug: 'dry-eye',
    title: 'Dry Eye Clinic',
    icon: DropletIcon,

    short: 'Comprehensive diagnosis and advanced treatment for dry, irritated, and watery eyes.',

    description:
      'Dry Eye Disease is a common condition that occurs when your eyes do not produce enough quality tears or when tears evaporate too quickly. It can cause irritation, burning, redness, fluctuating vision, and discomfort during daily activities, especially while using digital screens. At Renu Eye Care Centre, our dedicated Dry Eye Clinic offers advanced tear film evaluation, personalized treatment plans, and the latest technologies to restore eye comfort, improve tear quality, and protect the ocular surface for long-term relief.',

    symptoms: [
      'Burning, stinging, or gritty sensation in the eyes',
      'Persistent dryness and irritation',
      'Red or inflamed eyes',
      'Watery eyes due to reflex tearing',
      'Blurred or fluctuating vision',
      'Sensitivity to light (Photophobia)',
      'Eye fatigue during prolonged screen use',
      'Difficulty wearing contact lenses comfortably',
      'Stringy mucus around the eyes',
      'Feeling like something is stuck inside the eye'
    ],

    treatment: [
      'Comprehensive dry eye evaluation with advanced tear film analysis.',
      'Personalized lubricating eye drops and prescription medications.',
      'Meibomian Gland Dysfunction (MGD) treatment to improve tear quality.',
      'Intense Pulsed Light (IPL) therapy for evaporative dry eye.',
      'LipiFlow thermal pulsation treatment to unblock meibomian glands.',
      'Punctal Plug insertion to retain natural tears and improve lubrication.',
      'Lifestyle, nutrition, and digital eye strain management for long-term relief.',
      'Regular follow-up care to monitor treatment response and maintain healthy eyes.'
    ],

    faqs: [
      {
        q: 'What is Dry Eye Disease?',
        a: 'Dry Eye Disease occurs when your eyes do not produce enough tears or when the tears evaporate too quickly, resulting in irritation and discomfort.'
      },
      {
        q: 'What causes dry eyes?',
        a: 'Dry eyes may be caused by aging, excessive screen time, air conditioning, certain medications, contact lens use, hormonal changes, or medical conditions such as diabetes and autoimmune diseases.'
      },
      {
        q: 'Can excessive screen time cause dry eyes?',
        a: 'Yes. Looking at digital screens reduces your blinking rate, causing tears to evaporate faster and increasing the risk of dry eye symptoms.'
      },
      {
        q: 'Is Dry Eye Disease permanent?',
        a: 'Dry eye is often a chronic condition, but with proper diagnosis and treatment, symptoms can be effectively managed and long-term comfort can be achieved.'
      },
      {
        q: 'Are dry eyes harmful if left untreated?',
        a: 'Yes. Untreated dry eye can damage the surface of the eye, increase the risk of infection, and negatively affect vision and quality of life.'
      },
      {
        q: 'What treatments are available for dry eyes?',
        a: 'Treatment may include artificial tears, prescription eye drops, IPL therapy, LipiFlow, punctal plugs, eyelid hygiene, and lifestyle modifications based on the underlying cause.'
      }
    ],

    image: '/Services/Dry-Eye-Clinic.webp'
  },
  {
    slug: 'squint',
    title: 'Squint Correction',
    icon: GlassesIcon,

    short: 'Advanced diagnosis and treatment for squint (strabismus) in children and adults.',

    description:
      'Squint, also known as Strabismus, is a condition in which the eyes are not properly aligned and may point in different directions. One eye may look straight while the other turns inward, outward, upward, or downward. If left untreated, squint can lead to double vision, poor depth perception, lazy eye (amblyopia), and reduced confidence. At Renu Eye Care Centre, we offer comprehensive evaluation and personalized treatment plans, including vision therapy, prism correction, Botox injections, and advanced squint surgery to restore proper eye alignment and improve binocular vision.',

    symptoms: [
      'Misaligned or crossed eyes',
      'One eye turning inward, outward, upward, or downward',
      'Double vision (Diplopia)',
      'Frequent head tilt or face turn',
      'Difficulty focusing on objects',
      'Poor depth perception',
      'Eye strain or headaches',
      'Closing one eye in bright sunlight',
      'Reduced vision in one eye (Lazy Eye/Amblyopia)',
      'Difficulty reading or concentrating'
    ],

    treatment: [
      'Comprehensive eye examination and binocular vision assessment.',
      'Prescription glasses to correct refractive errors contributing to squint.',
      'Vision therapy and eye exercises to improve eye coordination.',
      'Prism glasses to reduce double vision and improve eye alignment.',
      'Botulinum (Botox) injections for selected squint conditions.',
      'Advanced squint (strabismus) surgery to realign the eye muscles.',
      'Amblyopia (Lazy Eye) treatment with patching or atropine therapy when required.',
      'Regular follow-up care to monitor eye alignment and visual development.'
    ],

    faqs: [
      {
        q: 'What is a squint (strabismus)?',
        a: 'A squint is a condition where both eyes do not look in the same direction at the same time due to imbalance of the eye muscles.'
      },
      {
        q: 'Can squint occur in adults?',
        a: 'Yes. Squint can develop in both children and adults due to nerve problems, trauma, muscle imbalance, or underlying eye conditions.'
      },
      {
        q: 'Can squint be corrected without surgery?',
        a: 'Yes. Depending on the cause, squint may be treated with glasses, vision therapy, prism lenses, or Botox injections. Surgery is recommended when necessary.'
      },
      {
        q: 'Is squint surgery safe?',
        a: 'Yes. Squint surgery is a safe and commonly performed procedure that improves eye alignment, appearance, and binocular vision.'
      },
      {
        q: 'Will squint surgery improve vision?',
        a: 'The primary goal of surgery is to align the eyes. Vision improvement depends on the underlying condition and whether amblyopia or other eye problems are present.'
      },
      {
        q: 'What happens if squint is left untreated?',
        a: 'Untreated squint can lead to lazy eye (amblyopia), poor depth perception, double vision, and permanent vision problems, especially in children.'
      }
    ],

    image: '/Services/Squint-Correction.jpg'
  },
  {
    slug: 'pediatric',
    title: 'Pediatric Eye Care',
    icon: BabyIcon,

    short: 'Comprehensive eye care for infants, children, and teenagers in a child-friendly environment.',

    description:
      'Healthy vision is essential for a child’s learning, growth, and overall development. Many childhood eye conditions, such as lazy eye (amblyopia), squint (strabismus), refractive errors, and congenital eye disorders, can be effectively treated if detected early. At Renu Eye Care Centre, our Pediatric Eye Care services provide comprehensive eye examinations, advanced diagnostic evaluations, and personalized treatments in a comfortable and child-friendly environment to ensure the best possible visual development for every child.',

    symptoms: [
      'Frequent squinting or closing one eye',
      'Sitting too close to the television or holding books very close',
      'Crossed or misaligned eyes (Squint)',
      'Frequent eye rubbing without allergies',
      'Excessive tearing or watery eyes',
      'Sensitivity to bright light',
      'Difficulty concentrating while reading',
      'Poor performance in school due to vision problems',
      'White reflex or unusual appearance of the pupil',
      'Complaints of headaches or blurred vision'
    ],

    treatment: [
      'Comprehensive pediatric eye examination using child-friendly diagnostic techniques.',
      'Prescription of pediatric glasses for refractive errors such as myopia, hyperopia, and astigmatism.',
      'Amblyopia (Lazy Eye) treatment with patching therapy or atropine eye drops.',
      'Myopia control using specialized lenses, eye drops, and lifestyle recommendations.',
      'Diagnosis and management of squint (strabismus) with non-surgical or surgical treatment.',
      'Screening and treatment of congenital eye disorders and developmental eye diseases.',
      'Regular vision screening to monitor healthy eye growth and visual development.',
      'Parental guidance on eye health, screen time, nutrition, and preventive eye care.'
    ],

    faqs: [
      {
        q: 'At what age should my child have their first eye examination?',
        a: 'A child should have their first comprehensive eye examination within the first year of life, followed by regular check-ups as recommended by the eye specialist.'
      },
      {
        q: 'How do I know if my child has a vision problem?',
        a: 'Signs include squinting, sitting too close to the TV, frequent eye rubbing, headaches, poor school performance, or difficulty reading.'
      },
      {
        q: 'What is Lazy Eye (Amblyopia)?',
        a: 'Lazy Eye is a condition where one eye develops weaker vision because the brain favors the stronger eye. Early treatment can significantly improve vision.'
      },
      {
        q: 'Can childhood myopia be controlled?',
        a: 'Yes. Modern myopia control treatments, including specialized lenses, low-dose atropine eye drops, and lifestyle modifications, can help slow its progression.'
      },
      {
        q: 'Are eye examinations safe for infants and young children?',
        a: 'Yes. Pediatric eye examinations are completely safe, painless, and specially designed to evaluate childrens vision and eye health.'
      },
      {
        q: 'Why are regular eye check-ups important for children?',
        a: 'Many childhood eye conditions show no obvious symptoms. Regular eye examinations help detect problems early and support healthy visual development and learning.'
      }
    ],

    image: '/Services/Pediatric-Eye-Care.webp'
  },
  {
    slug: 'oculoplasty',
    title: 'Oculoplasty',
    icon: SparklesIcon,

    short: 'Expert cosmetic, reconstructive, and functional surgery for the eyelids, tear ducts, and orbit.',

    description:
      'Oculoplasty is a specialized branch of ophthalmology that focuses on the diagnosis and treatment of conditions affecting the eyelids, tear drainage system, eye socket (orbit), and surrounding facial structures. Whether caused by aging, injury, birth defects, tumors, or disease, these conditions can impact both vision and appearance. At Renu Eye Care Centre, we provide advanced reconstructive and cosmetic oculoplastic procedures to restore normal function, enhance facial aesthetics, and improve patients’ quality of life using the latest surgical techniques.',

    symptoms: [
      'Drooping upper eyelids (Ptosis)',
      'Excess loose skin around the eyes',
      'Persistent watery eyes due to blocked tear ducts',
      'Eyelid swelling or inflammation',
      'Eyelid lumps, cysts, or tumors',
      'Difficulty opening or closing the eyes completely',
      'Sunken or bulging eyes',
      'Eye injuries affecting the eyelids or surrounding structures',
      'Cosmetic concerns related to the eyelids',
      'Facial asymmetry around the eyes'
    ],

    treatment: [
      'Comprehensive evaluation of eyelid, tear duct, and orbital disorders.',
      'Ptosis (drooping eyelid) correction surgery to improve vision and appearance.',
      'Blepharoplasty (eyelid surgery) for excess skin, puffiness, and rejuvenation.',
      'Dacryocystorhinostomy (DCR) surgery for blocked tear ducts and excessive watering.',
      'Removal and reconstruction of eyelid tumors and cysts.',
      'Orbital surgery for trauma, fractures, tumors, and thyroid eye disease.',
      'Reconstructive eyelid surgery following injury, burns, or cancer treatment.',
      'Personalized post-operative care for optimal healing, comfort, and cosmetic outcomes.'
    ],

    faqs: [
      {
        q: 'What is Oculoplasty?',
        a: 'Oculoplasty is a specialized field of ophthalmology that treats conditions affecting the eyelids, tear ducts, eye socket (orbit), and surrounding facial tissues through medical and surgical procedures.'
      },
      {
        q: 'When should I consult an oculoplasty specialist?',
        a: 'You should consult an oculoplasty specialist if you have drooping eyelids, watery eyes, eyelid lumps, blocked tear ducts, eye injuries, orbital problems, or wish to improve eyelid appearance.'
      },
      {
        q: 'Is eyelid surgery only for cosmetic purposes?',
        a: 'No. Many eyelid surgeries are performed to improve vision, treat medical conditions, repair injuries, or restore proper eyelid function in addition to cosmetic enhancement.'
      },
      {
        q: 'What is Blepharoplasty?',
        a: 'Blepharoplasty is a surgical procedure that removes excess skin and fat from the eyelids to improve both appearance and vision when drooping skin obstructs sight.'
      },
      {
        q: 'Can blocked tear ducts be treated permanently?',
        a: 'Yes. Most blocked tear ducts can be successfully treated with DCR (Dacryocystorhinostomy) surgery, which restores normal tear drainage.'
      },
      {
        q: 'How long is the recovery after oculoplasty surgery?',
        a: 'Recovery depends on the procedure performed, but most patients can resume normal daily activities within one to two weeks with proper post-operative care.'
      }
    ],

    image: '/Services/Oculoplasty.webp'
  },
  {
    slug: 'neuro-ophthalmology',
    title: 'Neuro-Ophthalmology',
    icon: BrainIcon,

    short: 'Specialized care for vision disorders related to the optic nerve and brain.',

    description:
      'Neuro-Ophthalmology is a specialized field that focuses on vision problems caused by disorders affecting the optic nerve, brain, and nervous system. These conditions may lead to sudden vision loss, double vision, abnormal eye movements, or visual field defects. Early diagnosis is essential, as many neuro-ophthalmic conditions may be associated with neurological diseases such as stroke, multiple sclerosis, brain tumors, or optic nerve disorders. At Renu Eye Care Centre, we provide comprehensive neuro-ophthalmic evaluation using advanced diagnostic technology and collaborate with neurologists and other specialists to ensure accurate diagnosis and effective treatment.',

    symptoms: [
      'Sudden or gradual vision loss',
      'Double vision (Diplopia)',
      'Blurred or distorted vision',
      'Loss of peripheral (side) vision',
      'Unequal pupil size (Anisocoria)',
      'Abnormal eye movements',
      'Difficulty moving one or both eyes',
      'Optic nerve swelling (Papilledema)',
      'Headaches associated with vision changes',
      'Temporary episodes of vision loss'
    ],

    treatment: [
      'Comprehensive neuro-ophthalmic examination and visual function assessment.',
      'Optical Coherence Tomography (OCT) to evaluate the optic nerve and retinal nerve fiber layer.',
      'Visual field testing to detect and monitor neurological vision loss.',
      'Neuro-imaging (MRI/CT scan) when required for accurate diagnosis.',
      'Medical management of optic nerve diseases and neurological eye disorders.',
      'Treatment of double vision using prism glasses, medications, or other appropriate therapies.',
      'Collaborative care with neurologists, neurosurgeons, and other specialists for complex neurological conditions.',
      'Regular follow-up evaluations to monitor disease progression and preserve vision.'
    ],

    faqs: [
      {
        q: 'What is Neuro-Ophthalmology?',
        a: 'Neuro-Ophthalmology is a specialized branch of eye care that diagnoses and treats vision problems caused by diseases affecting the optic nerve, brain, and nervous system.'
      },
      {
        q: 'When should I see a Neuro-Ophthalmologist?',
        a: 'You should seek evaluation if you experience sudden vision loss, double vision, unexplained visual disturbances, abnormal eye movements, or vision changes associated with headaches or neurological symptoms.'
      },
      {
        q: 'What conditions are treated in Neuro-Ophthalmology?',
        a: 'Common conditions include optic neuritis, papilledema, optic neuropathy, cranial nerve palsies, visual field defects, double vision, and neurological disorders affecting vision.'
      },
      {
        q: 'What tests are performed during a Neuro-Ophthalmology evaluation?',
        a: 'The evaluation may include a detailed eye examination, visual field testing, OCT imaging, pupil assessment, eye movement analysis, and MRI or CT scans when necessary.'
      },
      {
        q: 'Can neurological diseases affect vision?',
        a: 'Yes. Conditions such as stroke, multiple sclerosis, brain tumors, diabetes, and other neurological disorders can significantly affect vision and eye movements.'
      },
      {
        q: 'Can Neuro-Ophthalmic conditions be treated?',
        a: 'Many neuro-ophthalmic conditions can be effectively managed with early diagnosis, appropriate medications, surgery when required, and coordinated care with neurological specialists.'
      }
    ],

    image: '/Services/Neuro-Ophthalmology.jpg'
  }
];


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
    name: 'Dr. Arundhati Tamuli Handique',
    role: 'Founder & Cataract Surgeon',
    experience: '25+ Years',
    qualification: 'MBBS, MS (Ophthalmology), FICO',
    languages: ['English', 'Hindi', 'Marathi'],
    bio: 'Dr. Arundhati  founded Renu Eye Care Centre with a vision to bring world-class ophthalmology within reach. She has personally performed over 40,000 cataract and refractive procedures.',
    image: 'IMG_DOC_RENU',
    awards: ['Padma Shri nominee 2022', 'Best Eye Surgeon, West India 2020', 'Lifetime Achievement, IOA 2023'],
    treatments: ['Cataract Surgery', 'Premium IOLs', 'Refractive Lens Exchange']
  },
  {
    slug: 'arjun-verma',
    name: 'Dr. Abhijit Kumar Handique',
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
    name: 'Dr. Rajendra Nath Gogoi',
    role: 'LASIK & Cornea Surgeon',
    experience: '12+ Years',
    qualification: 'MBBS, DNB, Fellowship Cornea',
    languages: ['English', 'Hindi', 'Malayalam'],
    bio: 'Dr. Nair is a pioneer of bladeless Contoura and SMILE laser vision correction, having given thousands of patients freedom from glasses.',
    image: 'IMG_DOC_PRIYA',
    awards: ['Excellence in Refractive Surgery 2021'],
    treatments: ['Contoura LASIK', 'SMILE', 'Keratoconus (C3R)']
  },
];


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
  {
    name: 'Heidelberg Anterion',
    desc: 'An advanced imaging platform that combines OCT, Anterior Segment OCT, and Optical Biometry for highly accurate cataract planning, corneal evaluation, and comprehensive anterior eye diagnostics. It enables precise measurements for safer surgeries and better visual outcomes.',
    icon: GiDna2
  },
  {
    name: 'ZEISS CIRRUS HD-OCT',
    desc: 'High-definition Optical Coherence Tomography (OCT) system that captures detailed cross-sectional images of the retina and optic nerve. It allows early detection and continuous monitoring of glaucoma, diabetic retinopathy, macular degeneration, and other retinal disorders.',
    icon: FaRegEye
  },
  {
    name: 'Alcon Centurion Vision System',
    desc: 'A next-generation cataract surgery platform designed for safe, efficient, and minimally invasive phacoemulsification. Its intelligent fluidics technology provides greater surgical precision, enhanced patient safety, and faster visual recovery.',
    icon: TbActivity
  },
  {
    name: 'Alcon Constellation Vision System',
    desc: 'A world-class vitreo-retinal surgical platform developed for the treatment of complex retinal diseases, including retinal detachment, diabetic retinopathy, vitreous hemorrhage, and macular disorders.',
    icon: TbMicroscope
  },
  {
    name: 'Humphrey Field Analyzer 3',
    desc: 'The global gold standard for visual field testing, used to detect and monitor glaucoma and neurological vision disorders. It provides highly reliable measurements for early diagnosis and long-term disease management.',
    icon: LuOrbit
  },
  {
    name: 'ZEISS VISULAS YAG III Laser',
    desc: 'A precision Nd:YAG laser system used for posterior capsulotomy after cataract surgery, laser iridotomy for glaucoma, and various advanced laser eye procedures. It offers quick, painless treatment with excellent clinical accuracy.',
    icon: LuZap
  }
];

export const TESTIMONIALS = [
  {
    name: 'Anupam Bezboruah',
    role: 'Verified Patient',
    quote:
      'I had an excellent experience at Renu Eye Care Centre. The staff were welcoming, and the doctors explained everything clearly, making me feel comfortable and confident throughout my treatment.',
    image: 'IMG_T1'
  },
  {
    name: 'Ajay Kaman',
    role: 'Eye Care Patient',
    quote:
      'The team is supportive, professional, and completely honest. They never suggest unnecessary treatments and always guide patients in the right direction.',
    image: 'IMG_T2'
  },
  {
    name: 'Shyam Chetry',
    role: 'Eye Surgery Patient',
    quote:
      'One of the best eye hospitals with professional doctors, advanced technology, and outstanding patient care. Everything is well managed and comfortable.',
    image: 'IMG_T3'
  },
  {
    name: 'Diya Darshita Bailong',
    role: 'Verified Patient',
    quote:
      'One of the best eye care hospitals in Dibrugarh. Friendly staff, experienced doctors, a clean environment, and excellent patient care.',
    image: 'IMG_T4'
  },
  {
    name: 'Astaque Nafeez',
    role: 'Cataract Patient Attendant',
    quote:
      'My mother’s cataract surgery was a complete success. The doctors are highly skilled, and the support staff were warm, caring, and extremely helpful.',
    image: 'IMG_T5'
  },
  {
    name: 'Padmashree Das',
    role: 'Verified Patient',
    quote:
      'Great service with friendly staff, experienced doctors, and a clean, well-maintained hospital. Highly recommended.',
    image: 'IMG_T6'
  },
  {
    name: 'Himadri Konwar',
    role: 'Eye Care Patient',
    quote:
      'A wonderful experience with caring doctors, cooperative staff, and a hygienic, well-managed hospital.',
    image: 'IMG_T7'
  },
  {
    name: 'Akash Sahu',
    role: 'Cataract Patient Family',
    quote:
      'My father’s cataract surgery went smoothly. The doctors and staff were humble, attentive, and made the entire experience worth it.',
    image: 'IMG_T8'
  },
  {
    name: 'Tongku Moyong',
    role: 'Verified Patient',
    quote:
      'Dr. Handique explained everything clearly. The staff were helpful, the hospital was clean and organized, and I highly recommend Renu Eye Care Centre.',
    image: 'IMG_T9'
  },
  {
    name: 'Manuranjan Dehingia',
    role: 'Eye Treatment Patient',
    quote:
      'The doctor explained every step clearly, the hospital was well-equipped, and my vision problem was successfully resolved. Highly recommended.',
    image: 'IMG_T10'
  }
];


export const FAQS = [
  {
    q: 'How can I book an appointment at Renu Eye Care Centre?',
    a: 'Booking an appointment at Renu Eye Care Centre is quick and convenient. You can schedule your visit online through our website by clicking the "Book Appointment" button, call our reception team directly, or contact us via WhatsApp. Our team will assist you in selecting the most suitable specialist and appointment time based on your eye care needs.'
  },
  {
    q: 'What eye care services are available at Renu Eye Care Centre?',
    a: 'Renu Eye Care Centre offers comprehensive eye care services, including Cataract Surgery, LASIK & Refractive Surgery, Retina Care, Cornea Services, Glaucoma Management, Dry Eye Clinic, Pediatric Eye Care, Squint Correction, Oculoplasty, Neuro-Ophthalmology, routine eye examinations, diabetic eye screening, and advanced diagnostic imaging. Our goal is to provide complete eye care for patients of all age groups under one roof.'
  },
  {
    q: 'Why should I choose Renu Eye Care Centre?',
    a: 'Renu Eye Care Centre combines experienced ophthalmologists, advanced diagnostic technology, modern surgical techniques, and compassionate patient care to deliver world-class eye treatment. We focus on accurate diagnosis, personalized treatment plans, patient safety, and excellent visual outcomes while maintaining the highest standards of ethical medical practice.'
  },
  {
    q: 'Do I need an eye examination even if my vision seems normal?',
    a: 'Yes. Many eye diseases such as glaucoma, diabetic retinopathy, and retinal disorders may not show noticeable symptoms in their early stages. Regular comprehensive eye examinations help detect problems early, protect your vision, and prevent avoidable vision loss. Adults should undergo routine eye check-ups, especially after the age of 40 or if they have diabetes or a family history of eye disease.'
  },
  {
    q: 'Do you provide advanced diagnostic and surgical technology?',
    a: 'Yes. Renu Eye Care Centre is equipped with modern ophthalmic diagnostic and surgical technology to ensure accurate diagnosis and safe, effective treatment. Our facility offers advanced imaging, laser procedures, premium cataract surgery, refractive surgery, glaucoma evaluation, retinal diagnostics, and specialized eye care solutions following international standards.'
  },
  {
    q: 'Do you treat children as well as adults?',
    a: 'Absolutely. We provide specialized Pediatric Eye Care services for infants, children, teenagers, adults, and senior citizens. Our child-friendly approach ensures early detection and treatment of childhood vision problems such as lazy eye (amblyopia), squint, refractive errors, and myopia progression.'
  },
  {
    q: 'What should I bring for my first eye consultation?',
    a: 'For your first visit, please carry your previous eye reports, current spectacles or contact lenses, prescription medications, any previous surgical records, and a valid photo ID. Bringing these documents helps our specialists understand your eye health history and recommend the most appropriate treatment.'
  },
  {
    q: 'How often should I have my eyes examined?',
    a: 'Most adults should have a comprehensive eye examination every one to two years. Patients with diabetes, glaucoma, cataracts, high eye pressure, retinal disorders, or other eye conditions may require more frequent examinations as advised by their ophthalmologist. Regular eye check-ups play a vital role in preserving healthy vision throughout life.'
  }
];


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
    excerpt: 'Is it too early? Will it come back? We bust the most common cataract myths with clear, expert as.',
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
