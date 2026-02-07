import { motion } from 'framer-motion';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-2xl transition-all focus-glow relative overflow-hidden';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'glass text-[rgb(var(--text-primary))] hover:bg-[rgba(var(--glass-bg),0.9)] border-[rgba(var(--border-color),0.3)]',
    destructive: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      disabled={disabled}
      {...props}
    >
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2"
      >
        {icon && <span>{icon}</span>}
        {children}
      </motion.span>
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          initial={false}
          whileHover={{ opacity: 0.2, x: ['0%', '100%'] }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};
