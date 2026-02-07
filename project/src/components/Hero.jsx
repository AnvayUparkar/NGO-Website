   import { motion } from 'framer-motion';
import { Download, ArrowRight, Play, Apple } from 'lucide-react';
import { Button } from './Button';

export const Hero = () => {
  return (
    <>
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 pt-24 sm:pt-20 md:pt-12 pb-12 sm:pb-16 md:pb-20"
        onMouseMove={(e) => {
          const x = e.clientX / 100;
          const y = e.clientY / 100;
          document
            .querySelector('.hero-phone')
            ?.style.setProperty('transform', `translate(${x}px, ${y}px)`);
        }}
      >
        {/* Background glows - responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          {/* Left glow - scales on mobile */}
          <div className="absolute -left-12 sm:-left-24 top-8 sm:top-16 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/40 rounded-full blur-3xl" />
          
          {/* Right glow - hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:block absolute right-0 top-12 sm:top-24 w-64 sm:w-[420px] h-64 sm:h-[420px] bg-cyan-500/35 rounded-full blur-3xl" />
          
          {/* Center gradient - responsive positioning */}
          <div className="absolute left-1/4 sm:left-1/3 bottom-[-100px] sm:bottom-[-180px] w-80 sm:w-[520px] h-80 sm:h-[520px] bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl" />
        </motion.div>

        {/* Main container - responsive grid layout */}
        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="flex flex-col justify-center w-full"
          >
            {/* Badge - responsive text size and spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-3 sm:mb-4 w-fit"
            >
              <span className="glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-[rgb(var(--accent-color))] glow">
                Making a Difference Together
              </span>
            </motion.div>

            {/* Heading - fully responsive typography */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-[rgb(var(--text-primary))] leading-tight relative z-20 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="block">NGO Smart Attendance App</span>
            </motion.h1>

            {/* Description - responsive paragraph */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[rgb(var(--text-secondary))] mb-6 sm:mb-8 leading-relaxed w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join our mission to create positive change. Connect with volunteers, track impact, and build a better tomorrow with our innovative mobile platform.
            </motion.p>

            {/* Primary Buttons - stack vertically on mobile */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<Download className="w-4 sm:w-5 h-4 sm:h-5" />}
                onClick={() => {window.location.href = "/ngo-attendance.apk";}}
                aria-label="Download app from Google Play Store"
                className="btn-hero-primary text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 flex-1 sm:flex-none text-sm sm:text-base"
              >
                Download App
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />}
                className="btn-hero-secondary text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 flex-1 sm:flex-none text-sm sm:text-base"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Store Buttons - responsive grid layout */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {/* Google Play Store */}
              <motion.button
                onClick={() =>
                  window.open(
                    'https://play.google.com/store/apps/details?id=com.example.ngoapp',
                    '_blank'
                  )
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-store flex items-center gap-2 sm:gap-3 bg-black text-white px-3 sm:px-4 py-2 transition-shadow rounded-lg flex-1 sm:flex-none"
                aria-label="Download from Google Play Store"
              >
                <div className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 rounded-md bg-white flex-shrink-0">
                  <Play className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                </div>
                <div className="text-left leading-tight hidden xs:block">
                  <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] opacity-70">
                    Get it on
                  </div>
                  <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                </div>
              </motion.button>

              {/* App Store */}
              <motion.button
                onClick={() =>
                  window.open('https://apps.apple.com/app/id1234567890', '_blank')
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-store flex items-center gap-2 sm:gap-3 bg-black text-white px-3 sm:px-4 py-2 transition-shadow rounded-lg flex-1 sm:flex-none"
                aria-label="Download from Apple App Store"
              >
                <div className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 rounded-md bg-white flex-shrink-0">
                  <Apple className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                </div>
                <div className="text-left leading-tight hidden xs:block">
                  <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] opacity-70">
                    Download on the
                  </div>
                  <div className="text-xs sm:text-sm font-semibold">App Store</div>
                </div>
              </motion.button>
            </motion.div>

            {/* Stats Section - responsive layout */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-bold text-[rgb(var(--text-primary))]">50K+</div>
                <div className="text-xs sm:text-sm text-[rgb(var(--text-tertiary))]">Active Volunteers</div>
              </div>
              <div className="hidden sm:block w-px h-10 sm:h-12 bg-[rgb(var(--border-color))]" />
              
              {/* Stat 2 */}
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-bold text-[rgb(var(--text-primary))]">200+</div>
                <div className="text-xs sm:text-sm text-[rgb(var(--text-tertiary))]">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px h-10 sm:h-12 bg-[rgb(var(--border-color))]" />
              
              {/* Stat 3 */}
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-bold text-[rgb(var(--text-primary))]">30+</div>
                <div className="text-xs sm:text-sm text-[rgb(var(--text-tertiary))]">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Phone Mockup Section - hidden on mobile, shown on lg screens */}
          <motion.div
            className="hidden lg:flex relative justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
          >
            <motion.div
              className="hero-phone relative w-60 sm:w-72 h-[500px] sm:h-[600px] flex-shrink-0"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Phone frame */}
              <div className="absolute inset-0 bg-black rounded-3xl p-2 shadow-2xl">
                {/* Phone screen */}
                <div className="w-full h-full bg-white rounded-3xl overflow-hidden flex flex-col">
                  {/* Phone notch */}
                  <div className="h-6 bg-black rounded-b-2xl mx-auto w-32" />
                  
                  {/* Content - Full Height Image */}
                  <div className="flex-1 w-full overflow-auto bg-white p-0 m-0">
                    <img 
                      src="/ngo-image.jpg" 
                      alt="NGO Attendance App Interface" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
