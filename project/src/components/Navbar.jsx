import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

export const Navbar = ({ currentPage, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Features', value: 'features' },
    { label: 'Gallery', value: 'gallery' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-4 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="pointer-events-auto glass border border-[rgba(var(--border-color),0.2)] rounded-full shadow-lg w-fit mx-auto">
          <div className="flex items-center justify-between h-16 px-6 whitespace-nowrap">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('home')}
          >
            
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              NGO App
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 ml-4">
            {navItems.map((item) => (
              <motion.button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors focus-glow rounded-lg ${
                  currentPage === item.value
                    ? 'text-[rgb(var(--accent-color))]'
                    : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentPage === item.value && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[rgba(var(--accent-color),0.1)] rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass hover:bg-[rgba(var(--bg-tertiary),0.5)] transition-colors focus-glow"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl glass hover:bg-[rgba(var(--bg-tertiary),0.5)] transition-colors focus-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-[rgba(var(--border-color),0.2)]"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-colors ${
                  currentPage === item.value
                    ? 'bg-[rgba(var(--accent-color),0.1)] text-[rgb(var(--accent-color))]'
                    : 'text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--bg-tertiary),0.5)]'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
