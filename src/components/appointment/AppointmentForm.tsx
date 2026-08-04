import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckIcon, 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  Stethoscope, 
  Eye, 
  Activity, 
  ClipboardList, 
  MapPin, 
  ShieldCheck,
  Droplet,
  HeartPulse,
  Glasses
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '../ui/Button';
import { DOCTORS } from '../../data/site';

type Props = {
  presetDoctor?: string;
  presetDepartment?: string;
  onSuccess?: () => void;
  compact?: boolean;
};

const EYE_SERVICES = [
  "General Eye Checkup", "Cataract", "LASIK", "Retina", "Glaucoma", "Cornea",
  "Pediatric Eye Care", "Dry Eye", "Diabetic Eye Care", "Myopia Clinic",
  "Oculoplasty", "Eye Emergency", "Other Consultation"
];

const TIME_SLOTS = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM"
];

const field = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pl-12 text-sm text-brand-dark placeholder:text-slate-400 transition-all focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/10';
const labelCls = 'mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500';
const sectionCls = 'flex items-center gap-2 text-base font-bold text-brand-dark mb-5 col-span-full mt-10 first:mt-0';

const InputIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
);

export const AppointmentForm = memo(function AppointmentForm({
  presetDoctor,
  presetDepartment,
  onSuccess,
  compact,
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    patient_name: "",
    mobile: "",
    email: "",
    age: "",
    gender: "",
    department: presetDepartment || "",
    doctor: presetDoctor || "",
    date: "",
    time: "",
    concern: "",
    new_patient: "",
    glasses: "",
    contact_lenses: "",
    diabetes: "",
    blood_pressure: "",
    message: "",
    city: "",
    state: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;
    
    if (e.target.name === 'mobile') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    
    if (e.target.name === 'age') {
      value = value.replace(/\D/g, '').slice(0, 2);
      if (Number(value) === 0) value = '';
    }
    
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email.endsWith('@gmail.com')) {
      alert("Please use a valid @gmail.com email address.");
      return;
    }
    if (formData.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const payload = { 
        ...formData, 
        mobile: `+91 ${formData.mobile}`,
        reply_to: formData.email 
      };

      // =================================================================
      // EMAILJS SETUP: Yahan apni IDs dalna hai
      // =================================================================

      // 1. ADMIN KE LIYE (Jisme puri details aati hai)
      // "To Email" mein clinic ki email honi chahiye.
      await emailjs.send(
        "service_n6d7f5h",           // <-- Yeh Service ID hai (dono ke liye same)
        "template_iz9cvab",          // <-- ADMIN KA TEMPLATE ID YAHAN DAALEIN
        payload,
        "fdTb13vM3ZpEcu6Bz"          // <-- Yeh Public Key hai
      );

      // 2. PATIENT KE LIYE (Jisme Thank You message aata hai)
      // "To Email" mein {{email}} hona chahiye.
      await emailjs.send(
        "service_n6d7f5h",           // <-- Yeh Service ID hai (dono ke liye same)
        "template_9cjc4yh",       // <-- PATIENT KA TEMPLATE ID YAHAN DAALEIN
        payload,
        "fdTb13vM3ZpEcu6Bz"          // <-- Yeh Public Key hai
      );
      // =================================================================

      setSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Unable to send appointment request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="grid h-24 w-24 place-items-center rounded-full bg-brand-secondary text-white shadow-lg shadow-brand-secondary/30"
        >
          <CheckIcon className="h-12 w-12" strokeWidth={3} />
        </motion.div>
        <h3 className="mt-8 font-display text-2xl font-bold text-brand-dark">Appointment Requested!</h3>
        <p className="mt-3 max-w-sm text-sm text-slate-500">
          Thank you. Our care team will call you shortly to confirm your slot.
        </p>
        <Button variant="outline" size="sm" className="mt-8" onClick={() => setSubmitted(false)}>
          Book another
        </Button>
      </div>
    );
  }

  return (
    <div className={compact ? 'w-full' : 'mx-auto w-full max-w-5xl'}>
      <form
        onSubmit={handleSubmit}
        className={`grid gap-x-10 gap-y-6 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}
        noValidate
      >
        {/* 📝 Basic Information */}
        {!compact && (
          <h4 className={sectionCls}>
            <User className="h-5 w-5 text-brand-primary" /> Basic Information
          </h4>
        )}
        
        <div>
          <label htmlFor="appt-name" className={labelCls}>Full Name *</label>
          <div className="relative">
            <InputIcon icon={User} />
            <input 
              id="appt-name" 
              name="patient_name"
              value={formData.patient_name}
              onChange={handleChange}
              required 
              maxLength={35} 
              className={field} 
              placeholder="Enter full name (Max 35)" 
              autoComplete="name" 
            />
          </div>
        </div>

        <div>
          <label htmlFor="appt-phone" className={labelCls}>Mobile Number *</label>
          <div className="relative">
            <InputIcon icon={Phone} />
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-600 border-r border-slate-200 pr-2">+91</span>
            <input 
              id="appt-phone" 
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required 
              type="tel" 
              maxLength={10} 
              className={`${field} pl-[90px]`} 
              placeholder="10-digit number" 
              autoComplete="tel" 
            />
          </div>
        </div>

        <div>
          <label htmlFor="appt-email" className={labelCls}>Gmail Address *</label>
          <div className="relative">
            <InputIcon icon={Mail} />
            <input 
              id="appt-email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              type="email"
              pattern="[a-zA-Z0-9._%+-]+@gmail\.com$" 
              title="Only valid @gmail.com addresses are accepted."
              className={field} 
              placeholder="your.email@gmail.com" 
              autoComplete="email" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="appt-age" className={labelCls}>Age</label>
            <div className="relative">
              <InputIcon icon={Activity} />
              <input 
                id="appt-age" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                type="text" 
                inputMode="numeric"
                maxLength={2}
                min="1" 
                max="99"
                className={field} 
                placeholder="Age" 
              />
            </div>
          </div>
          <div>
            <label htmlFor="appt-gender" className={labelCls}>Gender</label>
            <div className="relative">
              <InputIcon icon={User} />
              <select 
                id="appt-gender" 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`${field} appearance-none`}
              >
                <option value="" disabled>Select</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* 👨‍⚕️ Appointment Details */}
        {!compact && (
          <h4 className={sectionCls}>
            <Stethoscope className="h-5 w-5 text-brand-primary" /> Appointment Details
          </h4>
        )}

        <div>
          <label htmlFor="appt-dept" className={labelCls}>Select Department</label>
          <div className="relative">
            <InputIcon icon={Eye} />
            <select 
              id="appt-dept" 
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`${field} appearance-none`}
            >
              <option value="" disabled>Select department</option>
              {EYE_SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="appt-doctor" className={labelCls}>Select Doctor</label>
          <div className="relative">
            <InputIcon icon={Stethoscope} />
            <select 
              id="appt-doctor" 
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className={`${field} appearance-none`}
            >
              <option value="">Any available</option>
              {DOCTORS.map((d) => (
                <option key={d.slug} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="appt-date" className={labelCls}>Preferred Date *</label>
          <div className="relative">
            <InputIcon icon={Calendar} />
            <input 
              id="appt-date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              required 
              type="date" 
              className={field} 
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="appt-time" className={labelCls}>Preferred Time Slot *</label>
          <div className="relative">
            <InputIcon icon={Clock} />
            <select 
              id="appt-time" 
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className={`${field} appearance-none`}
            >
              <option value="" disabled>Select time slot</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 👁️ Eye Problem */}
        {!compact && (
          <h4 className={sectionCls}>
            <Eye className="h-5 w-5 text-brand-primary" /> Eye Problem
          </h4>
        )}
        <div className="sm:col-span-2">
          <label htmlFor="appt-concern" className={labelCls}>What is your concern?</label>
          <div className="relative">
            <InputIcon icon={Eye} />
            <select 
              id="appt-concern" 
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className={`${field} appearance-none`}
            >
              <option value="" disabled>Select concern</option>
              <option>Blurred Vision</option>
              <option>Eye Pain</option>
              <option>Red Eyes</option>
              <option>Watering Eyes</option>
              <option>Itching</option>
              <option>Headache due to Eyes</option>
              <option>Cataract Consultation</option>
              <option>LASIK Consultation</option>
              <option>Diabetic Eye Checkup</option>
              <option>Routine Eye Checkup</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* 📋 Medical Information */}
        {!compact && (
          <h4 className={sectionCls}>
            <HeartPulse className="h-5 w-5 text-brand-primary" /> Medical Information
          </h4>
        )}
        
        <div>
          <label htmlFor="appt-new" className={labelCls}>Are you a new patient?</label>
          <div className="relative">
            <InputIcon icon={User} />
            <select 
              id="appt-new" 
              name="new_patient"
              value={formData.new_patient}
              onChange={handleChange}
              className={`${field} appearance-none`}
            >
              <option value="" disabled>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="appt-glasses" className={labelCls}>Do you wear glasses?</label>
          <div className="relative">
            <InputIcon icon={Glasses} />
            <select 
              id="appt-glasses" 
              name="glasses"
              value={formData.glasses}
              onChange={handleChange}
              className={`${field} appearance-none`}
            >
              <option value="" disabled>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="appt-contacts" className={labelCls}>Do you wear contact lenses?</label>
          <div className="relative">
            <InputIcon icon={Eye} />
            <select 
              id="appt-contacts" 
              name="contact_lenses"
              value={formData.contact_lenses}
              onChange={handleChange}
              className={`${field} appearance-none`}
            >
              <option value="" disabled>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="appt-diabetes" className={labelCls}>Do you have Diabetes?</label>
          <div className="relative">
            <InputIcon icon={Droplet} />
            <select 
              id="appt-diabetes" 
              name="diabetes"
              value={formData.diabetes}
              onChange={handleChange}
              className={`${field} appearance-none`}
            >
              <option value="" disabled>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="appt-bp" className={labelCls}>Do you have High Blood Pressure?</label>
          <div className="relative">
            <InputIcon icon={HeartPulse} />
            <select 
              id="appt-bp" 
              name="blood_pressure"
              value={formData.blood_pressure}
              onChange={handleChange}
              className={`${field} appearance-none`}
            >
              <option value="" disabled>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* 💬 Additional Information */}
        {!compact && (
          <h4 className={sectionCls}>
            <ClipboardList className="h-5 w-5 text-brand-primary" /> Additional Information
          </h4>
        )}
        <div className="sm:col-span-2">
          <label htmlFor="appt-msg" className={labelCls}>Describe your symptoms</label>
          <textarea 
            id="appt-msg" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-brand-dark placeholder:text-slate-400 transition-all focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/10" 
            placeholder="Describe your symptoms (optional)" 
          />
        </div>

        {/* 📍 Location */}
        {!compact && (
          <h4 className={sectionCls}>
            <MapPin className="h-5 w-5 text-brand-primary" /> Location
          </h4>
        )}
        <div>
          <label htmlFor="appt-city" className={labelCls}>City</label>
          <div className="relative">
            <InputIcon icon={MapPin} />
            <input 
              id="appt-city" 
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={field} 
              placeholder="City" 
            />
          </div>
        </div>
        <div>
          <label htmlFor="appt-state" className={labelCls}>State (Optional)</label>
          <div className="relative">
            <InputIcon icon={MapPin} />
            <input 
              id="appt-state" 
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={field} 
              placeholder="State" 
            />
          </div>
        </div>

        {/* ✅ Consent */}
        {!compact && (
          <h4 className={sectionCls}>
            <ShieldCheck className="h-5 w-5 text-brand-primary" /> Consent
          </h4>
        )}
        <div className="flex flex-col gap-4 sm:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-100">
          <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary" />
            <span>I agree to the Privacy Policy and Terms of Service.</span>
          </label>
          <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary" />
            <span>I agree to receive appointment confirmation via Call/SMS/WhatsApp.</span>
          </label>
        </div>

        <div className="sm:col-span-2 mt-3">
          <Button 
            className="w-full flex items-center justify-center gap-2 py-6 text-base" 
            magnetic={false}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending Request...
              </>
            ) : (
              "Confirm Appointment"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
});