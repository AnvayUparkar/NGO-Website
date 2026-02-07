import { motion } from 'framer-motion';
import { Download, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './Button';

export const Footer = () => {
  return (
    <footer className="relative glass border-t border-[rgba(var(--border-color),0.2)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🌟</div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                NGO App
              </span>
            </div>
            <p className="text-[rgb(var(--text-secondary))] mb-4">
              Empowering communities through technology and compassion.
            </p>
            <Button
              variant="primary"
              size="sm"
              icon={<Download className="w-4 h-4" />}
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.example.ngoapp', '_blank')}
              aria-label="Download app from Google Play Store"
            >
              Download App
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--text-primary))]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About Us', 'Our Mission', 'Projects', 'Volunteer', 'Donate'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-color))] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--text-primary))]">
              Resources
            </h3>
            <ul className="space-y-2">
              {['Blog', 'News', 'Events', 'Gallery', 'Reports'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-color))] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--text-primary))]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[rgb(var(--text-secondary))]">
                <Mail className="w-4 h-4" />
                <span>info@ngoapp.org</span>
              </li>
              <li className="flex items-center gap-2 text-[rgb(var(--text-secondary))]">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-[rgb(var(--text-secondary))]">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Impact Street<br />Change City, CC 12345</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-[rgba(var(--border-color),0.2)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[rgb(var(--text-tertiary))] text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> for a better world
            </p>
            <p className="text-[rgb(var(--text-tertiary))] text-sm">
              © 2024 NGO App. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
