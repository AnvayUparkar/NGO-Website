import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check } from 'lucide-react';

export const Input = ({ label, error, success, className = '', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    props.onChange?.(e);
  };

  return (
    <div className="relative">
      <motion.div
        className="relative"
        initial={false}
        animate={{
          scale: isFocused ? 1.01 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <input
          {...props}
          onChange={handleChange}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            w-full px-4 py-3 rounded-xl glass
            text-[rgb(var(--text-primary))]
            border-2 transition-all duration-200
            focus-glow
            ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-transparent'}
            ${isFocused ? 'border-[rgba(var(--accent-color),0.5)]' : ''}
            ${className}
          `}
          placeholder=" "
        />

        <motion.label
          className={`
            absolute left-4 pointer-events-none transition-all duration-200
            ${isFocused || hasValue
              ? 'top-0 -translate-y-1/2 text-xs bg-[rgb(var(--bg-primary))] px-2 font-semibold'
              : 'top-1/2 -translate-y-1/2 text-base'
            }
            ${error ? 'text-red-500' : isFocused ? 'text-[rgb(var(--accent-color))]' : 'text-[rgb(var(--text-tertiary))]'}
          `}
          initial={false}
        >
          {label}
        </motion.label>

        {success && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <div className="bg-green-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        )}
      </motion.div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};
