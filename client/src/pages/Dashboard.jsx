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
      icon: <FaTasks size={28} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Todo Tasks",
      value: stats.todoTasks,
      icon: <FaSpinner size={28} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Completed",
      value: stats.doneTasks,
      icon: <FaCheckCircle size={28} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Overdue",
      value: stats.overdueTasks,
      icon: <FaExclamationTriangle size={28} />,
      color: "from-red-500 to-orange-500",
    },
  ];

  return (

    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-white mb-3">
          Dashboard
        </h1>

        <p className="text-slate-400 text-lg">
          AI-powered project collaboration workspace.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {cards.map((card, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-r ${card.color} p-8 rounded-3xl shadow-xl`}
          ><div className="flex items-center justify-between mb-8">
              {card.icon}
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Live
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-2">
              {card.title}
            </h2>

            <p className="text-5xl font-bold">
              {card.value || 0}
            </p>

          </motion.div>

        ))}

      </div>

    </div>
  );
};

export default Dashboard;