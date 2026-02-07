import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import {
  Bell,
  Calendar,
  MessageSquare,
  Share2,
  TrendingUp,
  Users,
  Award,
  MapPin,
  Clock,
  Heart,
  Target,
  Zap,
} from 'lucide-react';

export const FeaturesPage = () => {
  const features = [
    {
      icon: <Bell />,
      title: 'Attendance Monitoring',
      description: 'College and NGOs get instant updates about event attendance of students.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Calendar />,
      title: 'Attendance Marking',
      description: 'NGO can mark attendance for events quickly and accurately.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <MessageSquare />,
      title: 'Excel Compatibility',
      description: 'Easily export and import attendance data with Excel.',
      color: 'from-green-500 to-green-600',
    },
    // {
    //   icon: <Share2 />,
    //   title: 'Social Sharing',
    //   description: 'Share your impact and inspire others to join the cause.',
    //   color: 'from-pink-500 to-pink-600',
    // },
    {
      icon: <TrendingUp />,
      title: 'Impact Coordination',
      description: 'Improves coordination between NGOs and colleges for greater impact.',
      color: 'from-orange-500 to-orange-600',
    },
    // {
    //   icon: <Users />,
    //   title: 'Team Collaboration',
    //   description: 'Work together with teams to amplify your impact.',
    //   color: 'from-cyan-500 to-cyan-600',
    // },
    // {
    //   icon: <Award />,
    //   title: 'Achievements',
    //   description: 'Earn badges and recognition for your volunteer work.',
    //   color: 'from-yellow-500 to-yellow-600',
    // },
    // {
    //   icon: <MapPin />,
    //   title: 'Location-based',
    //   description: 'Discover volunteer opportunities near you.',
    //   color: 'from-red-500 to-red-600',
    // },
    // {
    //   icon: <Clock />,
    //   title: 'Time Tracking',
    //   description: 'Log and track your volunteer hours automatically.',
    //   color: 'from-indigo-500 to-indigo-600',
    // },
    // {
    //   icon: <Heart />,
    //   title: 'Causes You Care',
    //   description: 'Follow and support the causes that matter most to you.',
    //   color: 'from-rose-500 to-rose-600',
    // },
    // {
    //   icon: <Target />,
    //   title: 'Goal Setting',
    //   description: 'Set personal volunteering goals and track your progress.',
    //   color: 'from-teal-500 to-teal-600',
    // },
    // {
    //   icon: <Zap />,
    //   title: 'Quick Actions',
    //   description: 'Take immediate action with one-tap volunteer opportunities.',
    //   color: 'from-amber-500 to-amber-600',
    // },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[rgb(var(--text-primary))]">
          Powerful Features
        </h1>
        <p className="text-xl text-[rgb(var(--text-secondary))] max-w-3xl mx-auto">
          Everything you need to make volunteering easy, impactful, and rewarding
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
        {features.map((feature, index) => (
          <Card key={index} delay={index * 0.05}>
            <motion.div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg mb-4`}
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--text-primary))]">
              {feature.title}
            </h3>
            <p className="text-[rgb(var(--text-secondary))]">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 glass rounded-3xl p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--text-primary))]">
          And Much More...
        </h2>
        <p className="text-xl text-[rgb(var(--text-secondary))] mb-8 max-w-2xl mx-auto">
          We're constantly adding new features to make your volunteering experience better.
          Download the app today and explore everything we have to offer!
        </p>
        <motion.button
          className="glass px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[rgba(var(--glass-bg),0.9)] transition-all focus-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.example.ngoapp', '_blank')}
        >
          Download Now
        </motion.button>
      </motion.div>
    </div>
  );
};
