import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Users, Target, Heart, Globe } from 'lucide-react';

export const HomePage = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Connect Volunteers',
      description: 'Build a community of passionate individuals ready to make a difference.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Track Impact',
      description: 'Measure and showcase the real-world impact of your initiatives.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Spread Kindness',
      description: 'Facilitate acts of kindness and create positive ripple effects.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Connect with organizations and volunteers worldwide.',
    },
  ];

  return (
    <div>
      <Hero />

      {/* WHY CHOOSE US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(var(--text-primary))]">
            Why Choose Us
          </h2>
          <p className="text-xl text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
            Our platform brings together technology and compassion to create meaningful change
          </p>
        </motion.div>

        {/* FEATURES GRID (no phone mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--text-primary))]">
                    {feature.title}
                  </h3>
                  <p className="text-[rgb(var(--text-secondary))]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-12 text-center text-white shadow-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Make a Difference?
          </h2>

          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of volunteers and organizations making the world a better place.
          </p>

          <motion.button
            className="bg-blue-800 px-8 py-4 rounded-2xl font-semibold text-lg text-white hover:bg-blue-900 transition-all focus-glow shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
