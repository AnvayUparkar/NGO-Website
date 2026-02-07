import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export const Tooltip = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const offset = 8;

      let x = 0;
      let y = 0;

      switch (position) {
        case 'top':
          x = rect.left + rect.width / 2;
          y = rect.top - offset;
          break;
        case 'bottom':
          x = rect.left + rect.width / 2;
          y = rect.bottom + offset;
          break;
        case 'left':
          x = rect.left - offset;
          y = rect.top + rect.height / 2;
          break;
        case 'right':
          x = rect.right + offset;
          y = rect.top + rect.height / 2;
          break;
      }

      setCoords({ x, y });
    }
  }, [isVisible, position]);

  const getTransformOrigin = () => {
    switch (position) {
      case 'top':
        return 'bottom center';
      case 'bottom':
        return 'top center';
      case 'left':
        return 'right center';
      case 'right':
        return 'left center';
      default:
        return 'bottom center';
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="inline-block"
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{
              position: 'fixed',
              left: position === 'left' || position === 'right' ? coords.x : undefined,
              top: position === 'top' || position === 'bottom' ? coords.y : undefined,
              transform: position === 'top' ? 'translate(-50%, -100%)' :
                         position === 'bottom' ? 'translate(-50%, 0)' :
                         position === 'left' ? 'translate(-100%, -50%)' :
                         'translate(0, -50%)',
              transformOrigin: getTransformOrigin(),
              zIndex: 9999,
              pointerEvents: 'none',
            }}
            className="glass px-3 py-2 rounded-lg text-sm font-medium text-[rgb(var(--text-primary))] shadow-xl glow"
            role="tooltip"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
