import { useEffect, useState } from "react";
import API from "../api/axios";
import {
  FaTasks,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Dashboard = () => {

  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {

    try {

      const response = await API.get("/dashboard/stats");

      setStats(response.data);

    } catch (error) {
      console.log(error);
    }
  };
const cards = [
    {
      title: "Total Tasks",
      value: stats.totalTasks,
      icon: <FaTasks size={20} />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "In Progress",
      value: stats.todoTasks,
      icon: <FaSpinner size={20} />,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Completed",
      value: stats.doneTasks,
      icon: <FaCheckCircle size={20} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Overdue",
      value: stats.overdueTasks,
      icon: <FaExclamationTriangle size={20} />,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto text-white">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Dashboard
        </h1>
        <p className="text-gray-400 text-sm">
          Overview of your workspace and team progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`p-6 rounded-2xl bg-[#18181b] border ${card.border} flex flex-col justify-between relative overflow-hidden`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${card.bg} ${card.color}`}>
                {card.icon}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">{card.title}</p>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                {card.value || 0}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;