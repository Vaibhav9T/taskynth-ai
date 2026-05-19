import { useEffect, useState } from "react";
import API from "../api/axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaPlus, FaTasks, FaArrowRight, FaEdit, FaTimes, FaTrash } from "react-icons/fa";

const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

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
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        priority: "HIGH",
        status: "TODO",
        assignedUserId: 1,
        projectId: 1,
      });
      toast.success("Task created successfully!");
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  const handleEditChange = (e) => {
    setEditingTask({
      ...editingTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(
        `/tasks/${editingTask.id}`,
        editingTask
      );

      fetchTasks();
      setEditingTask(null);
      toast.success("Task updated successfully!");
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await API.delete(`/tasks/${id}`);
        fetchTasks();
        toast.success("Task deleted!");
      } catch (error) {
        toast.error("Failed to delete task");
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Tasks
          </h1>
          <p className="text-gray-400 text-sm">
            Track and manage workflow tasks.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="lg:col-span-4 bg-[#18181b] p-6 rounded-2xl border border-white/10 h-fit"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
              <FaPlus size={16} />
            </div>
            <h2 className="text-lg font-semibold">New Task</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Task Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="e.g., Update Landing Page"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Description</label>
              <textarea
                name="description"
                value={formData.description}
                placeholder="Task details..."
                rows="4"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm [color-scheme:dark]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
              >
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
              </select>
            </div>

            <button className="w-full bg-white text-black hover:bg-gray-100 transition-all py-3 rounded-xl text-sm font-semibold mt-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
              Create Task
              <FaArrowRight size={12} />
            </button>
          </div>
        </motion.form>

        <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#18181b] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-colors group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                  <FaTasks size={18} />
                </div>
                <h2 className="text-xl font-bold mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                  {task.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  {task.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.priority === 'HIGH' ? 'bg-rose-500/10 text-rose-400' : task.priority === 'MEDIUM' ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'}`}>
                    {task.priority}
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium">
                    {task.status}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEditingTask(task)}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Edit Task"
                  >
                    <FaEdit size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="p-1.5 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                    title="Delete Task"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edit Task Modal */}
      {editingTask && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#18181b] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl relative"
          >
            <button
              onClick={() => setEditingTask(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
                <FaEdit size={16} />
              </div>
              <h2 className="text-lg font-semibold">Edit Task</h2>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Task Title</label>
                <input
                  type="text"
                  name="title"
                  value={editingTask.title}
                  onChange={handleEditChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Description</label>
                <textarea
                  name="description"
                  value={editingTask.description}
                  rows="3"
                  onChange={handleEditChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Priority</label>
                  <select
                    name="priority"
                    value={editingTask.priority}
                    onChange={handleEditChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                  >
                    <option value="HIGH">HIGH</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="LOW">LOW</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Status</label>
                  <select
                    name="status"
                    value={editingTask.status}
                    onChange={handleEditChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                  >
                    <option value="TODO">TODO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-white text-black hover:bg-gray-100 transition-all py-3 rounded-xl text-sm font-semibold mt-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Save Changes
              </button>
            </form>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Tasks;