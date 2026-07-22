
import React, { createContext, useContext, useState, ReactNode } from 'react';

type AppointmentContextValue = {
  open: boolean;
  presetDoctor?: string;
  presetDepartment?: string;
  openModal: (opts?: {doctor?: string;department?: string;}) => void;
  closeModal: () => void;
};

const AppointmentContext = createContext<AppointmentContextValue | undefined>(undefined);

export function AppointmentProvider({ children }: {children: ReactNode;}) {
  const [open, setOpen] = useState(false);
  const [presetDoctor, setPresetDoctor] = useState<string | undefined>();
  const [presetDepartment, setPresetDepartment] = useState<string | undefined>();

  const openModal = (opts?: {doctor?: string;department?: string;}) => {
    setPresetDoctor(opts?.doctor);
    setPresetDepartment(opts?.department);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <AppointmentContext.Provider value={{ open, presetDoctor, presetDepartment, openModal, closeModal }}>
      {children}
    </AppointmentContext.Provider>);

}

export function useAppointment() {
  const ctx = useContext(AppointmentContext);
  if (!ctx) throw new Error('useAppointment must be used within AppointmentProvider');
  return ctx;
}