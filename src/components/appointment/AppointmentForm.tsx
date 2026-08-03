import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, Loader2 } from 'lucide-react';
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
  "General Eye Checkup",
  "Cataract",
  "LASIK",
  "Retina",
  "Glaucoma",
  "Cornea",
  "Pediatric Eye Care",
  "Dry Eye",
  "Diabetic Eye Care",
  "Myopia Clinic",
  "Oculoplasty",
  "Eye Emergency",
  "Other Consultation"
];

const field =
  'w-full rounded-input border border-slate-200 bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-slate-400 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors';
const labelCls = 'mb-1.5 block text-xs font-semibold text-slate-500';
const sectionCls = 'text-sm font-bold text-brand-dark mb-2 col-span-full border-b border-slate-200 pb-2 mt-4 first:mt-0';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ⚠️ Replace these with your actual EmailJS credentials
      await emailjs.send(
        "service_3kf7qsm",
        "template_nv8j5ef",
        formData,
        "fdTb13vM3ZpEcu6Bz"
      );
      
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
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="grid h-20 w-20 place-items-center rounded-full bg-brand-secondary text-white"
        >
          <CheckIcon className="h-10 w-10" strokeWidth={3} />
        </motion.div>
        <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">Appointment Requested!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          Thank you. Our care team will call you shortly to confirm your slot.
        </p>
        <Button variant="outline" size="sm" className="mt-5" onClick={() => setSubmitted(false)}>
          Book another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid gap-x-9 gap-y-3  ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}
      noValidate
    >
      {/* 📝 Basic Information */}
      {!compact && <h4 className={sectionCls}>📝 Basic Information</h4>}
      
      <div>
        <label htmlFor="appt-name" className={labelCls}>Full Name *</label>
        <input 
          id="appt-name" 
          name="patient_name"
          value={formData.patient_name}
          onChange={handleChange}
          required 
          className={field} 
          placeholder="Full name" 
          autoComplete="name" 
        />
      </div>

      <div>
        <label htmlFor="appt-phone" className={labelCls}>Mobile Number *</label>
        <input 
          id="appt-phone" 
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required 
          type="tel" 
          className={field} 
          placeholder="Mobile number" 
          autoComplete="tel" 
        />
      </div>

      <div>
        <label htmlFor="appt-email" className={labelCls}>Email Address (Optional)</label>
        <input 
          id="appt-email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email" 
          className={field} 
          placeholder="Email address" 
          autoComplete="email" 
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="appt-age" className={labelCls}>Age</label>
          <input 
            id="appt-age" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number" 
            min="0" 
            max="120" 
            className={field} 
            placeholder="Age" 
          />
        </div>
        <div>
          <label htmlFor="appt-gender" className={labelCls}>Gender</label>
          <select 
            id="appt-gender" 
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={field}
          >
            <option value="" disabled>Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* 👨‍⚕️ Appointment Details */}
      {!compact && <h4 className={sectionCls}>👨‍⚕️ Appointment Details</h4>}

      <div>
        <label htmlFor="appt-dept" className={labelCls}>Select Department</label>
        <select 
          id="appt-dept" 
          name="department"
          value={formData.department}
          onChange={handleChange}
          className={field}
        >
          <option value="" disabled>Select department</option>
          {EYE_SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="appt-doctor" className={labelCls}>Select Doctor</label>
        <select 
          id="appt-doctor" 
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className={field}
        >
          <option value="">Any available</option>
          {DOCTORS.map((d) => (
            <option key={d.slug} value={d.name}>{d.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="appt-date" className={labelCls}>Preferred Date *</label>
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
      
      <div>
        <label htmlFor="appt-time" className={labelCls}>Preferred Time Slot *</label>
        <input 
          id="appt-time" 
          name="time"
          value={formData.time}
          onChange={handleChange}
          required 
          type="time" 
          className={field} 
        />
      </div>

      {/* 👁️ Eye Problem */}
      {!compact && <h4 className={sectionCls}>👁️ Eye Problem</h4>}
      <div className="sm:col-span-2">
        <label htmlFor="appt-concern" className={labelCls}>What is your concern?</label>
        <select 
          id="appt-concern" 
          name="concern"
          value={formData.concern}
          onChange={handleChange}
          className={field}
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

      {/* 📋 Medical Information */}
      {!compact && <h4 className={sectionCls}>📋 Medical Information</h4>}
      
      <div>
        <label htmlFor="appt-new" className={labelCls}>Are you a new patient?</label>
        <select 
          id="appt-new" 
          name="new_patient"
          value={formData.new_patient}
          onChange={handleChange}
          className={field}
        >
          <option value="" disabled>Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div>
        <label htmlFor="appt-glasses" className={labelCls}>Do you wear glasses?</label>
        <select 
          id="appt-glasses" 
          name="glasses"
          value={formData.glasses}
          onChange={handleChange}
          className={field}
        >
          <option value="" disabled>Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div>
        <label htmlFor="appt-contacts" className={labelCls}>Do you wear contact lenses?</label>
        <select 
          id="appt-contacts" 
          name="contact_lenses"
          value={formData.contact_lenses}
          onChange={handleChange}
          className={field}
        >
          <option value="" disabled>Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div>
        <label htmlFor="appt-diabetes" className={labelCls}>Do you have Diabetes?</label>
        <select 
          id="appt-diabetes" 
          name="diabetes"
          value={formData.diabetes}
          onChange={handleChange}
          className={field}
        >
          <option value="" disabled>Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="appt-bp" className={labelCls}>Do you have High Blood Pressure?</label>
        <select 
          id="appt-bp" 
          name="blood_pressure"
          value={formData.blood_pressure}
          onChange={handleChange}
          className={field}
        >
          <option value="" disabled>Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* 💬 Additional Information */}
      {!compact && <h4 className={sectionCls}>💬 Additional Information</h4>}
      <div className="sm:col-span-2">
        <label htmlFor="appt-msg" className={labelCls}>Describe your symptoms</label>
        <textarea 
          id="appt-msg" 
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3} 
          className={field} 
          placeholder="Describe your symptoms (optional)" 
        />
      </div>

      {/* 📍 Location */}
      {!compact && <h4 className={sectionCls}>📍 Location</h4>}
      <div>
        <label htmlFor="appt-city" className={labelCls}>City</label>
        <input 
          id="appt-city" 
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={field} 
          placeholder="City" 
        />
      </div>
      <div>
        <label htmlFor="appt-state" className={labelCls}>State (Optional)</label>
        <input 
          id="appt-state" 
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={field} 
          placeholder="State" 
        />
      </div>

      {/* ✅ Consent */}
      {!compact && <h4 className={sectionCls}>✅ Consent</h4>}
      <div className="flex flex-col gap-3 sm:col-span-2 bg-slate-50 p-4 rounded-input">
        <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary" />
          <span>I agree to the Privacy Policy.</span>
        </label>
        <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary" />
          <span>I agree to receive appointment confirmation via Call/SMS/WhatsApp.</span>
        </label>
      </div>

      <div className="sm:col-span-2 mt-2">
        <Button 
          className="w-full flex items-center justify-center gap-2" 
          magnetic={false}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Book Appointment"
          )}
        </Button>
      </div>
    </form>
  );
});