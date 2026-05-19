import { useEffect, useState } from "react";
import API from "../api/axios";
import { motion } from "framer-motion";

const Projects = () => {

  const [projects, setProjects] = useState([]);

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

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div>

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold text-white">
            Projects
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your team projects.
          </p>

        </div>

      </div>

      <div className="grid lg:grid-cols-3 gap-10">

        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 rounded-3xl border border-slate-800 h-fit"
        >

          <h2 className="text-2xl font-bold mb-6">
            Create Project
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              name="title"
              value={formData.title}
              placeholder="Project title"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
            />

            <textarea
              name="description"
              value={formData.description}
              placeholder="Project description"
              rows="5"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
            />

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 rounded-xl font-semibold transition-all">

              Create Project

            </button>

          </div>

        </motion.form>

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-3xl"
            >

              <div className="flex justify-between items-start mb-6">

                <div>

                  <h2 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h2>

                  <p className="text-slate-400">
                    {project.description}
                  </p>

                </div>

              </div>

              <div className="flex items-center justify-between mt-6">

                <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">

                  Active Project

                </span>

                <span className="text-slate-500 text-sm">

                  #{project.id}

                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Projects;