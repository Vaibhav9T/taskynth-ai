import { useEffect, useState } from "react";
import API from "../api/axios";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaPlus, FaFolderOpen, FaArrowRight, FaEdit, FaTimes, FaTrash } from "react-icons/fa";

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    createdById: 1,
    memberIds: [1],
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {

    try {

      const response = await API.get("/projects");

      setProjects(response.data);

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
        "/projects",
        formData
      );

      fetchProjects();

      setFormData({
        title: "",
        description: "",
        createdById: 1,
        memberIds: [1],
      });
      toast.success("Project created successfully!");
    } catch (error) {
      toast.error("Failed to create project");
    }
  };

  const handleEditChange = (e) => {
    setEditingProject({
      ...editingProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(
        `/projects/${editingProject.id}`,
        editingProject
      );

      fetchProjects();
      setEditingProject(null);
      toast.success("Project updated successfully!");
    } catch (error) {
      toast.error("Failed to update project");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await API.delete(`/projects/${id}`);
        fetchProjects();
        toast.success("Project deleted!");
      } catch (error) {
        toast.error("Failed to delete project");
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Projects
          </h1>
          <p className="text-gray-400 text-sm">
            Manage and organize your team's initiatives.
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
            <h2 className="text-lg font-semibold">New Project</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Project Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="e.g., Q3 Marketing"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Description</label>
              <textarea
                name="description"
                value={formData.description}
                placeholder="Brief details about the project..."
                rows="4"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-none"
              />
            </div>

            <button className="w-full bg-white text-black hover:bg-gray-100 transition-all py-3 rounded-xl text-sm font-semibold mt-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
              Create Project
              <FaArrowRight size={12} />
            </button>
          </div>
        </motion.form>

        <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#18181b] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-colors group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                  <FaFolderOpen size={18} />
                </div>
                <h2 className="text-xl font-bold mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium">
                    Active
                  </span>
                  <span className="text-gray-500 text-xs font-mono">
                    #{project.id}
                  </span>
                </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setEditingProject(project)}
                  className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Edit Project"
                >
                  <FaEdit size={14} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-1.5 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                  title="Delete Project"
                >
                  <FaTrash size={14} />
                </button>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edit Project Modal */}
      {editingProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#18181b] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl relative"
          >
            <button
              onClick={() => setEditingProject(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
                <FaEdit size={16} />
              </div>
              <h2 className="text-lg font-semibold">Edit Project</h2>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Project Title</label>
                <input
                  type="text"
                  name="title"
                  value={editingProject.title}
                  onChange={handleEditChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Description</label>
                <textarea
                  name="description"
                  value={editingProject.description}
                  rows="3"
                  onChange={handleEditChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm resize-none"
                />
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

export default Projects;