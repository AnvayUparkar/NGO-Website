import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Book, HelpCircle, Zap, Users, Settings, FileText } from 'lucide-react';

export const UserManualPage = () => {
  const manualSections = [
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'NGO',
      description: 'Learn the basics of managing your NGO account',
      content: [
        { subtitle: 'Create Account', link: '#create-account' },
        { subtitle: 'Add Events', link: '#add-events' },
        { subtitle: 'Mark/View Attendance', link: '#mark-view-attendance' },
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'College',
      description: 'Learn the basics of managing your College account',
      content: [
        { subtitle: 'Register Volunteers', link: '#register-volunteers' },
        { subtitle: 'Assign Tasks', link: '#assign-tasks' },
        { subtitle: 'Track Attendance', link: '#track-attendance' },
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Admin Only',
      description: 'Master admin controls and system management',
      content: [
        { subtitle: 'Add NGO', link: '#add-ngo' },
        { subtitle: 'Add College', link: '#add-college' },
        { subtitle: 'Register New Admin', link: '#register-new-admin' },
      ],
    },
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.',
      id: 'faq-1',
    },
    {
      question: 'Can I export volunteer data?',
      answer: 'Yes, visit the Dashboard and click the "Export" button to download data in CSV or PDF format.',
      id: 'faq-2',
    },
    {
      question: 'How do I add multiple volunteers at once?',
      answer: 'Use the "Bulk Upload" feature in the Volunteers section. Download the template, fill it with your data, and upload.',
      id: 'faq-3',
    },
    {
      question: 'What is the maximum file size for uploads?',
      answer: 'Maximum file size is 10MB for images and 25MB for documents.',
      id: 'faq-4',
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4 sm:px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg">
              <Book className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[rgb(var(--text-primary))]">
            User Manual
          </h1>
          <p className="text-xl text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
            Complete guide to help you get the most out of our NGO management platform
          </p>
        </motion.div>
      </section>

      {/* MAIN SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manualSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white mb-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">
                    {section.title}
                  </h3>
                  <p className="text-sm text-[rgb(var(--text-secondary))] mb-6">
                    {section.description}
                  </p>
                  <div className="flex flex-col gap-3 w-full mt-auto">
                    {section.content.map((item, idx) => (
                      <motion.a
                        key={idx}
                        href={item.link}
                        className="text-blue-500 hover:text-blue-600 font-medium transition-colors text-sm hover:underline"
                        whileHover={{ x: 4 }}
                      >
                        → {item.subtitle}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILED SECTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-[rgb(var(--text-primary))] flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-500" />
            Detailed Guide
          </h2>

          <div className="space-y-8">
            {/* Getting Started Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl border border-[rgba(var(--border-color),0.2)]"
              id="create-account"
            >
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                Create Account
              </h3>
              <p className="text-[rgb(var(--text-secondary))] mb-4">
                Visit the homepage and click "Sign Up". Fill in your organization details, email, and password. You'll receive a verification email.
              </p>
              <p className="text-[rgb(var(--text-secondary))]">
                After verification, you can start inviting volunteers to your organization.
              </p>
            </motion.div>

            {/* Login & Security */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-6 rounded-xl border border-[rgba(var(--border-color),0.2)]"
              id="login-security"
            >
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                Login & Security
              </h3>
              <p className="text-[rgb(var(--text-secondary))] mb-4">
                Always use a strong password with a mix of uppercase, lowercase, numbers, and special characters.
              </p>
              <ul className="list-disc list-inside text-[rgb(var(--text-secondary))] space-y-2">
                <li>Enable two-factor authentication for extra security</li>
                <li>Never share your login credentials</li>
                <li>Log out from shared devices</li>
                <li>Update your password regularly</li>
              </ul>
            </motion.div>

            {/* Register Volunteers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-xl border border-[rgba(var(--border-color),0.2)]"
              id="register-volunteers"
            >
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                Register Volunteers
              </h3>
              <p className="text-[rgb(var(--text-secondary))] mb-4">
                In the Dashboard, navigate to "Volunteers" and click "Add Volunteer". Fill in their details:
              </p>
              <ul className="list-disc list-inside text-[rgb(var(--text-secondary))] space-y-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Skills & Interests</li>
                <li>Availability</li>
              </ul>
            </motion.div>

            {/* Track Attendance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-6 rounded-xl border border-[rgba(var(--border-color),0.2)]"
              id="track-attendance"
            >
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                Track Attendance
              </h3>
              <p className="text-[rgb(var(--text-secondary))] mb-4">
                The attendance feature helps you monitor volunteer participation:
              </p>
              <ul className="list-disc list-inside text-[rgb(var(--text-secondary))] space-y-2">
                <li>Check-in volunteers at events</li>
                <li>View attendance history</li>
                <li>Generate attendance reports</li>
                <li>Track hours volunteered</li>
              </ul>
            </motion.div>

            {/* View Statistics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-6 rounded-xl border border-[rgba(var(--border-color),0.2)]"
              id="view-statistics"
            >
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                View Statistics
              </h3>
              <p className="text-[rgb(var(--text-secondary))] mb-4">
                The Dashboard displays comprehensive statistics including:
              </p>
              <ul className="list-disc list-inside text-[rgb(var(--text-secondary))] space-y-2">
                <li>Total volunteers registered</li>
                <li>Active volunteers this month</li>
                <li>Total volunteer hours</li>
                <li>Event completion rate</li>
              </ul>
            </motion.div>

            {/* Theme Settings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass p-6 rounded-xl border border-[rgba(var(--border-color),0.2)]"
              id="theme-settings"
            >
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--text-primary))]">
                Theme Settings
              </h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Click the sun/moon icon in the navigation bar to toggle between light and dark modes. Your preference is saved automatically.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-[rgb(var(--text-primary))] text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl border border-[rgba(var(--border-color),0.2)] hover:border-[rgba(var(--border-color),0.4)] transition-colors"
              >
                <h3 className="text-lg font-bold mb-3 text-[rgb(var(--accent-color))] flex items-center gap-2">
                  <span className="inline-block w-6 h-6 rounded-full bg-blue-500 text-white text-center text-sm">
                    ?
                  </span>
                  {faq.question}
                </h3>
                <p className="text-[rgb(var(--text-secondary))]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-xl border border-[rgba(var(--border-color),0.2)] text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-[rgb(var(--text-primary))]">
            Need More Help?
          </h2>
          <p className="text-[rgb(var(--text-secondary))] mb-6 max-w-2xl mx-auto">
            If you can't find the answer you're looking for, please contact our support team at{' '}
            <a href="mailto:support@ngoapp.com" className="text-blue-500 hover:text-blue-600 font-medium">
              support@ngoapp.com
            </a>{' '}
            or visit our{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
              Help Center
            </a>
            .
          </p>
        </motion.div>
      </section>
    </div>
  );
};
