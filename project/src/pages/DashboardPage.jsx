import { motion } from 'framer-motion';
import { DashboardTile } from '../components/DashboardTile';
import { Card } from '../components/Card';
import { Users, TrendingUp, Award, Calendar } from 'lucide-react';

export const DashboardPage = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '52,483',
      icon: <Users />,
      color: 'blue',
      trend: { value: 12.5, isPositive: true },
    },
    {
      title: 'College\'s Projects',
      value: '187',
      icon: <TrendingUp />,
      color: 'purple',
      trend: { value: 8.3, isPositive: true },
    },
    {
      title: 'NGOs Registered',
      value: '145',
      icon: <Award />,
      color: 'green',
      trend: { value: 23.1, isPositive: true },
    },
    {
      title: 'Total Events',
      value: '42',
      icon: <Calendar />,
      color: 'orange',
      trend: { value: 3.2, isPositive: false },
    },
  ];

  const recentActivities = [
    {
      title: 'Beach Cleanup Initiative',
      location: 'Santa Monica, CA',
      volunteers: 45,
      date: '2 hours ago',
    },
    {
      title: 'Food Drive Campaign',
      location: 'Downtown LA',
      volunteers: 32,
      date: '5 hours ago',
    },
    {
      title: 'Tree Planting Event',
      location: 'Griffith Park',
      volunteers: 67,
      date: '1 day ago',
    },
    {
      title: 'Community Mentorship',
      location: 'Virtual',
      volunteers: 28,
      date: '2 days ago',
    },
  ];

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(var(--text-primary))]">
          Dashboard Preview
        </h1>
        <p className="text-xl text-[rgb(var(--text-secondary))]">
          Track your impact and monitor volunteer activities in real-time
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <DashboardTile
            key={index}
            {...stat}
            delay={index * 0.1}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--text-primary))]">
              Impact Over Time
            </h2>
            <div className="h-64 flex items-end justify-around gap-2">
              {[40, 65, 45, 80, 55, 75, 90, 70, 85, 60, 95, 75].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.6 + i * 0.05, type: 'spring', stiffness: 100 }}
                  className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-lg min-w-[20px]"
                  whileHover={{ opacity: 0.8 }}
                />
              ))}
            </div>
            <div className="flex justify-around mt-4 text-sm text-[rgb(var(--text-tertiary))]">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--text-primary))]">
            Top Categories
          </h2>
          <div className="space-y-4">
            {[
              { name: 'Environment', percentage: 35 },
              { name: 'Education', percentage: 28 },
              { name: 'Healthcare', percentage: 22 },
              { name: 'Community', percentage: 15 },
            ].map((category, i) => (
              <div key={category.name}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-[rgb(var(--text-secondary))]">{category.name}</span>
                  <span className="text-[rgb(var(--text-primary))] font-semibold">{category.percentage}%</span>
                </div>
                <div className="h-2 bg-[rgb(var(--bg-tertiary))] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${category.percentage}%` }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--text-primary))]">
          Recent Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentActivities.map((activity, index) => (
            <Card key={index} delay={0.8 + index * 0.1} enableTilt={false}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))]">
                  {activity.title}
                </h3>
                <span className="text-xs text-[rgb(var(--text-tertiary))]">{activity.date}</span>
              </div>
              <p className="text-[rgb(var(--text-secondary))] mb-2">{activity.location}</p>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[rgb(var(--accent-color))]" />
                <span className="text-sm text-[rgb(var(--text-secondary))]">
                  {activity.volunteers} volunteers
                </span>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
