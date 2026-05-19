import { useEffect, useState } from "react";
import API from "../api/axios";

const Dashboard = () => {

  const [stats, setStats] = useState({});

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats = async () => {

    try {

      const response = await API.get(
        "/dashboard/stats"
      );

      setStats(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            Total Tasks
          </h2>

          <p className="text-3xl mt-4">
            {stats.totalTasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            Todo Tasks
          </h2>

          <p className="text-3xl mt-4">
            {stats.todoTasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            In Progress
          </h2>

          <p className="text-3xl mt-4">
            {stats.inProgressTasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            Completed
          </h2>

          <p className="text-3xl mt-4">
            {stats.doneTasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            Overdue Tasks
          </h2>

          <p className="text-3xl mt-4">
            {stats.overdueTasks}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;