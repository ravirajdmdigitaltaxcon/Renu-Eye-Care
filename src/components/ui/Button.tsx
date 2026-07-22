import React, { useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  magnetic?: boolean;
};

const styles: Record<Variant, string> = {
  primary: 'bg-brand-primary text-white shadow-float hover:bg-brand-secondary',
  outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
  ghost: 'text-brand-primary hover:bg-brand-section',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

// Optimized magnet: spring only created when magnetic=true.
// useCallback prevents new function refs on every render.
function useMagnet(enabled: boolean) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!enabled) return;
      const r = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
      y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
    },
    [enabled, x, y],
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { sx, sy, onMove, onLeave };
}

const base =
  'font-btn font-semibold rounded-btn inline-flex items-center justify-center gap-2 transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/30';

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  magnetic = true,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { sx, sy, onMove, onLeave } = useMagnet(magnetic);
  return (
    <motion.button
      style={magnetic ? { x: sx, y: sy } : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles[variant]} ${sizes[size]} ${className}`}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLink({
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  magnetic = true,
}: BaseProps & { to: string }) {
  const { sx, sy, onMove, onLeave } = useMagnet(magnetic);
  return (
    <motion.div
      style={magnetic ? { x: sx, y: sy } : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-flex"
    >
      <Link to={to} className={`${base} ${styles[variant]} ${sizes[size]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
