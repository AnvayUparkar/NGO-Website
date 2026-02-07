import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

export const Card = ({ children, className = '', actions, enableTilt = true, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e) => {
    if (!enableTilt) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={enableTilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : {}}
      className={`glass rounded-2xl p-6 relative group cursor-pointer ${className}`}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 0 30px rgba(var(--accent-color), 0.3), 0 20px 40px rgba(0, 0, 0, 0.15)',
        transition: { type: 'spring', stiffness: 400, damping: 25 },
      }}
    >
      <div className="relative z-10">
        {children}
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
        animate={{
          borderColor: isHovered ? 'rgb(var(--dark-blue))' : 'rgba(var(--dark-blue), 0)',
        }}
        transition={{ duration: 0.3 }}
      />

      {actions && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 right-4 flex gap-2 z-20"
        >
          {actions}
        </motion.div>
      )}
    </motion.div>
  );
};
