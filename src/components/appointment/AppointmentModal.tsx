





import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, CalendarHeartIcon } from 'lucide-react';
import { useAppointment } from '../../context/AppointmentContext';
import { AppointmentForm } from './AppointmentForm';

export function AppointmentModal() {
  const { open, closeModal, presetDoctor, presetDepartment } = useAppointment();

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Book an appointment">
        
          <div className="absolute inset-0 bg-brand-dark/50 backdrop-blur-sm" onClick={closeModal} />
          <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 240, damping: 24 }}
          className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-card bg-white p-6 shadow-glass sm:p-8"
          data-native-scroll>
          
            <button
            onClick={closeModal}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-brand-section text-brand-primary hover:bg-brand-primary hover:text-white">
            
              <XIcon className="h-5 w-5" />
            </button>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-btn bg-brand-primary text-white">
                <CalendarHeartIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-brand-dark">Book an Appointment</h2>
                <p className="text-sm text-slate-500">We’ll confirm your slot within a few hours.</p>
              </div>
            </div>
            <AppointmentForm presetDoctor={presetDoctor} presetDepartment={presetDepartment} />
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}