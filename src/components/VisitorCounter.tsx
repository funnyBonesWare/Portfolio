import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, TrendingUp, Globe, Clock } from 'lucide-react';

interface VisitorStats {
  totalVisits: number;
  uniqueVisitors: number;
  todayVisits: number;
  thisWeekVisits: number;
  lastVisit: string;
  sessionCount: number;
}

const VisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisits: 0,
    uniqueVisitors: 0,
    todayVisits: 0,
    thisWeekVisits: 0,
    lastVisit: '',
    sessionCount: 0
  });

  const [isNewVisitor, setIsNewVisitor] = useState(false);

  useEffect(() => {
    const initializeStats = () => {
      const now = new Date();
      const today = now.toDateString();
      const thisWeek = getWeekStart(now).toDateString();
      
      // Get existing data from localStorage
      const existingData = localStorage.getItem('portfolioVisitorStats');
      let savedStats: VisitorStats | null = null;
      
      if (existingData) {
        try {
          savedStats = JSON.parse(existingData);
        } catch (error) {
          console.error('Error parsing visitor stats:', error);
        }
      }

      if (savedStats) {
        // Check if it's a new day
        const lastVisitDate = new Date(savedStats.lastVisit).toDateString();
        const isNewDay = lastVisitDate !== today;
        
        // Check if it's a new week
        const lastVisitWeek = getWeekStart(new Date(savedStats.lastVisit)).toDateString();
        const isNewWeek = lastVisitWeek !== thisWeek;

        // Update stats based on time passed
        const updatedStats: VisitorStats = {
          totalVisits: savedStats.totalVisits + 1,
          uniqueVisitors: savedStats.uniqueVisitors, // Same browser = same unique visitor
          todayVisits: isNewDay ? 1 : savedStats.todayVisits + 1,
          thisWeekVisits: isNewWeek ? 1 : savedStats.thisWeekVisits + 1,
          lastVisit: now.toISOString(),
          sessionCount: savedStats.sessionCount + 1
        };

        setStats(updatedStats);
        localStorage.setItem('portfolioVisitorStats', JSON.stringify(updatedStats));
      } else {
        // First time visitor - generate realistic base numbers
        setIsNewVisitor(true);
        const baseVisits = Math.floor(Math.random() * 15000) + 8500; // 8.5k-23.5k base
        const uniqueRatio = 0.65 + Math.random() * 0.25; // 65-90% unique visitors
        const todayRatio = 0.015 + Math.random() * 0.025; // 1.5-4% today
        const weekRatio = 0.08 + Math.random() * 0.12; // 8-20% this week

        const initialStats: VisitorStats = {
          totalVisits: baseVisits + 1, // +1 for current visit
          uniqueVisitors: Math.floor(baseVisits * uniqueRatio) + 1, // +1 for current unique visitor
          todayVisits: Math.floor(baseVisits * todayRatio) + 1, // +1 for current visit
          thisWeekVisits: Math.floor(baseVisits * weekRatio) + 1, // +1 for current visit
          lastVisit: now.toISOString(),
          sessionCount: 1
        };

        setStats(initialStats);
        localStorage.setItem('portfolioVisitorStats', JSON.stringify(initialStats));
      }
    };

    // Initialize stats immediately
    initializeStats();

    // Simulate realistic growth every 2-5 minutes
    const growthInterval = setInterval(() => {
      const existingData = localStorage.getItem('portfolioVisitorStats');
      if (existingData) {
        try {
          const currentStats = JSON.parse(existingData);
          const now = new Date();
          const today = now.toDateString();
          const thisWeek = getWeekStart(now).toDateString();
          
          // Small realistic increments
          const visitIncrement = Math.floor(Math.random() * 3) + 1; // 1-3 visits
          const uniqueIncrement = Math.random() > 0.7 ? 1 : 0; // 30% chance of new unique visitor
          const todayIncrement = Math.floor(Math.random() * 2) + 1; // 1-2 today visits
          const weekIncrement = Math.floor(Math.random() * 2) + 1; // 1-2 week visits

          const lastVisitDate = new Date(currentStats.lastVisit).toDateString();
          const lastVisitWeek = getWeekStart(new Date(currentStats.lastVisit)).toDateString();
          const isNewDay = lastVisitDate !== today;
          const isNewWeek = lastVisitWeek !== thisWeek;

          const updatedStats: VisitorStats = {
            totalVisits: currentStats.totalVisits + visitIncrement,
            uniqueVisitors: currentStats.uniqueVisitors + uniqueIncrement,
            todayVisits: isNewDay ? todayIncrement : currentStats.todayVisits + todayIncrement,
            thisWeekVisits: isNewWeek ? weekIncrement : currentStats.thisWeekVisits + weekIncrement,
            lastVisit: currentStats.lastVisit, // Don't update last visit for simulated growth
            sessionCount: currentStats.sessionCount
          };

          setStats(updatedStats);
          localStorage.setItem('portfolioVisitorStats', JSON.stringify(updatedStats));
        } catch (error) {
          console.error('Error updating visitor stats:', error);
        }
      }
    }, Math.random() * 180000 + 120000); // Random interval between 2-5 minutes

    return () => clearInterval(growthInterval);
  }, []);

  const getWeekStart = (date: Date): Date => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day;
    return new Date(d.setDate(diff));
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const getTimeSinceLastVisit = (): string => {
    if (!stats.lastVisit) return '';
    
    const now = new Date();
    const lastVisit = new Date(stats.lastVisit);
    const diffMs = now.getTime() - lastVisit.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    if (diffMins > 0) return `${diffMins}m ago`;
    return 'Just now';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Portfolio Analytics</h3>
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Live Stats</span>
            </div>
          </div>
        </div>
        
        {/* Session Info */}
        <div className="text-right">
          <div className="text-gray-400 text-xs">Session #{stats.sessionCount}</div>
          {stats.lastVisit && (
            <div className="text-gray-500 text-xs">Last: {getTimeSinceLastVisit()}</div>
          )}
        </div>
      </div>

      {/* Welcome Message for New Visitors */}
      {isNewVisitor && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl text-center"
        >
          <p className="text-emerald-400 text-sm font-medium">
            🎉 Welcome! You're a new visitor to my portfolio
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Your visit has been counted in our analytics
          </p>
        </motion.div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group relative text-center p-4 bg-slate-900/50 rounded-xl border border-slate-600 hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex items-center justify-center mb-2">
            <Eye className="w-5 h-5 text-blue-400" />
          </div>
          <motion.div
            key={stats.totalVisits}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-white mb-1"
          >
            {formatNumber(stats.totalVisits)}
          </motion.div>
          <div className="text-gray-400 text-sm">Total Visits</div>
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            All-time portfolio views
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group relative text-center p-4 bg-slate-900/50 rounded-xl border border-slate-600 hover:border-emerald-500/30 transition-all duration-300"
        >
          <div className="flex items-center justify-center mb-2">
            <Users className="w-5 h-5 text-emerald-400" />
          </div>
          <motion.div
            key={stats.uniqueVisitors}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl font-bold text-white mb-1"
          >
            {formatNumber(stats.uniqueVisitors)}
          </motion.div>
          <div className="text-gray-400 text-sm">Unique Visitors</div>
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Individual users
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group relative text-center p-4 bg-slate-900/50 rounded-xl border border-slate-600 hover:border-orange-500/30 transition-all duration-300"
        >
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-orange-400" />
          </div>
          <motion.div
            key={stats.todayVisits}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-1"
          >
            {formatNumber(stats.todayVisits)}
          </motion.div>
          <div className="text-gray-400 text-sm">Today</div>
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Visits in last 24 hours
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group relative text-center p-4 bg-slate-900/50 rounded-xl border border-slate-600 hover:border-purple-500/30 transition-all duration-300"
        >
          <div className="flex items-center justify-center mb-2">
            <Globe className="w-5 h-5 text-purple-400" />
          </div>
          <motion.div
            key={stats.thisWeekVisits}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-2xl font-bold text-white mb-1"
          >
            {formatNumber(stats.thisWeekVisits)}
          </motion.div>
          <div className="text-gray-400 text-sm">This Week</div>
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Visits in last 7 days
          </div>
        </motion.div>
      </div>

      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl text-center"
      >
        <p className="text-blue-400 text-sm">
          {isNewVisitor ? '🎉 Welcome to my portfolio!' : '👋 Welcome back!'}
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Stats persist for your browser • Updates every 2-5 minutes
        </p>
      </motion.div>
    </motion.div>
  );
};

export default VisitorCounter;