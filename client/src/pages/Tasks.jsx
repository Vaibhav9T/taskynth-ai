import { useEffect, useState } from "react";
import API from "../api/axios";
import { motion } from "framer-motion";

const Tasks = () => {

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "HIGH",
    status: "TODO",
    assignedUserId: 1,
    projectId: 1,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const response = await API.get("/tasks");

      setTasks(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/tasks",
        formData
      );

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Tasks
        </h1>

        <p className="text-slate-400 mt-2">
          Track and manage workflow tasks.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-10">

        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 rounded-3xl border border-slate-800 h-fit"
        >

          <h2 className="text-2xl font-bold mb-6">
            Create Task
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              name="title"
              placeholder="Task title"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            />

            <textarea
              name="description"
              placeholder="Task description"
              rows="4"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            />

            <input
              type="date"
              name="dueDate"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            />

            <select
              name="priority"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700"
            >
              <option>HIGH</option>
              <option>MEDIUM</option>
              <option>LOW</option>
            </select>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 rounded-xl font-semibold transition-all">

              Create Task

            </button>

          </div>

        </motion.form>

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

          {tasks.map((task, index) => (

            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-3xl"
            >

              <div className="flex justify-between items-start mb-6">

                <div>

                  <h2 className="text-2xl font-bold mb-2">
                    {task.title}
                  </h2>

                  <p className="text-slate-400">
                    {task.description}
                  </p>

                </div>

              </div>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Priority
                  </span>

                  <span className="text-cyan-400">
                    {task.priority}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Status
                  </span>

                  <span className="text-green-400">
                    {task.status}
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Tasks;