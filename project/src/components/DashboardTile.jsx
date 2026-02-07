import { motion } from 'framer-motion';

export const DashboardTile = ({
  title,
  value,
  icon,
  color = 'blue',
  trend,
  delay = 0,
}) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay,
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="glass rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
    >
      <motion.div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorMap[color]} opacity-10 rounded-full blur-2xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`p-3 rounded-xl bg-gradient-to-br ${colorMap[color]} shadow-lg`}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white text-2xl">{icon}</div>
          </motion.div>

          {trend && (
            <div className={`text-sm font-semibold ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </div>
          )}
        </div>

        <h3 className="text-sm font-medium text-[rgb(var(--text-secondary))] mb-1">
          {title}
        </h3>
        <p className="text-3xl font-bold text-[rgb(var(--text-primary))]">
          {value}
        </p>
      </div>

      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
        initial={false}
        whileHover={{
          borderColor: `rgba(var(--accent-color), 0.5)`,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};
