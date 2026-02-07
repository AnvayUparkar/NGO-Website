   import { motion } from 'framer-motion';
import { Download, ArrowRight, Play, Apple } from 'lucide-react';
import { Button } from './Button';


    export const Hero = () => {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
        onMouseMove={(e) => {
          const x = e.clientX / 100;
          const y = e.clientY / 100;
          document
            .querySelector('.hero-phone')
            ?.style.setProperty('transform', `translate(${x}px, ${y}px)`);
        }}
      >
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="pointer-events-none absolute inset-0 -z-10"
>
  {/* Left glow behind heading */}
  <div className="absolute -left-24 top-16 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl" />
  
  {/* Right glow behind phone */}
  <div className="absolute right-0 top-24 w-[420px] h-[420px] bg-cyan-500/35 rounded-full blur-3xl" />
  
  {/* Soft center gradient to tie them together */}
  <div className="absolute left-1/3 bottom-[-180px] w-[520px] h-[520px] bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl" />
</motion.div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block mb-4"
            >
                <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-[rgb(var(--accent-color))] glow">
                Making a Difference Together
                </span>
            </motion.div>

            <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 text-[rgb(var(--text-primary))] leading-tight relative z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <span className="block">NGO Smart Attendance App</span>
                
            </motion.h1>

            <motion.p
                className="text-xl text-[rgb(var(--text-secondary))] mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                Join our mission to create positive change. Connect with volunteers,
                track impact, and build a better tomorrow with our innovative mobile platform.
            </motion.p>

            <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <Button
                variant="primary"
                size="lg"
                icon={<Download className="w-5 h-5" />}
                onClick={() => {window.location.href = "/ngo-attendance.apk";}}
                aria-label="Download app from Google Play Store"
                className="btn-hero-primary text-white font-semibold px-8 py-4"

            >
                Download App
                </Button>

                <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="btn-hero-secondary text-white font-semibold px-8 py-4"
                >
                Learn More
                </Button>
            </motion.div>

                       {/* Store Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mt-3"
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
                className="btn-store flex items-center gap-3 bg-black text-white px-4 py-2 transition-shadow"
                aria-label="Download from Google Play Store"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white">
                  <Play className="w-4 h-4 text-green-500" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">
                    Get it on
                  </div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.button>

              {/* App Store */}
              <motion.button
                onClick={() =>
                  window.open('https://apps.apple.com/app/id1234567890', '_blank')
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-store flex items-center gap-3 bg-black text-white px-4 py-2 transition-shadow"
                aria-label="Download from Apple App Store"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white">
                  <Apple className="w-4 h-4 text-black" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">
                    Download on the
                  </div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.button>
            </motion.div>


            <motion.div
                className="mt-12 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <div>
                <div className="text-3xl font-bold text-[rgb(var(--text-primary))]">50K+</div>
                <div className="text-sm text-[rgb(var(--text-tertiary))]">Active Volunteers</div>
                </div>
                <div className="w-px h-12 bg-[rgb(var(--border-color))]" />
                <div>
                <div className="text-3xl font-bold text-[rgb(var(--text-primary))]">200+</div>
                <div className="text-sm text-[rgb(var(--text-tertiary))]">Projects Completed</div>
                </div>
                <div className="w-px h-12 bg-[rgb(var(--border-color))]" />
                <div>
                <div className="text-3xl font-bold text-[rgb(var(--text-primary))]">30+</div>
                <div className="text-sm text-[rgb(var(--text-tertiary))]">Countries</div>
                </div>
            </motion.div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
            >
              <motion.div
                className="hero-phone relative w-72 h-[600px] flex-shrink-0"
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
                  <div className="w-full h-full bg-blue-50 rounded-3xl overflow-hidden flex flex-col">
                    {/* Phone notch */}
                    <div className="h-6 bg-black rounded-b-2xl mx-auto w-32" />
                    
                    {/* Header */}
                    <div className="px-4 pt-4 pb-3 border-b border-gray-300">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs">👥</div>
                        <h1 className="text-lg font-bold text-blue-900">NGO Attendance</h1>
                        <div className="ml-auto w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs">⚙️</div>
                      </div>
                      <p className="text-xs text-gray-500">Seamlessly Manage • Track • Verify</p>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 overflow-y-auto px-4 py-4">
                      <h2 className="text-xl font-bold text-blue-900 mb-4">Select Your Role</h2>
                      
                      {/* Login Cards */}
                      <div className="space-y-3">
                        {/* NGO Login */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-orange-400 flex items-center justify-center text-lg flex-shrink-0">❤️</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900">NGO Login</h3>
                            <p className="text-xs text-gray-600">Manage events and mark attendance</p>
                          </div>
                          <span className="text-gray-400 text-lg">&gt;</span>
                        </div>
                        
                        {/* College Login */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-lg flex-shrink-0">🏫</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900">College Login</h3>
                            <p className="text-xs text-gray-600">View student attendance records</p>
                          </div>
                          <span className="text-gray-400 text-lg">&gt;</span>
                        </div>
                        
                        {/* Admin Login */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-lg flex-shrink-0">🔐</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900">Admin Login</h3>
                            <p className="text-xs text-gray-600">Manage colleges and NGOs</p>
                          </div>
                          <span className="text-gray-400 text-lg">&gt;</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="px-4 py-4 text-center border-t border-gray-300">
                      <p className="text-xs text-gray-600">Simple • Modern • Friendly UI</p>
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
