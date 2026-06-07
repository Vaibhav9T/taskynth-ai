import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import Back from "../components/back";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill in all fields.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return toast.error("Please enter a valid email address.");
    }

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      login(response.data.token);
      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] flex items-center justify-center px-6 relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl dark:shadow-2xl relative z-10 transition-colors duration-300"
      >
          <Back />
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 transition-colors duration-300">
            Welcome back
          </h1>
          <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">
            Sign in to your Taskynth workspace.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1.5 transition-colors duration-300">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1.5 transition-colors duration-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>
          <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-gray-100 transition-all py-3.5 rounded-xl text-sm font-semibold mt-4 shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-slate-500 dark:text-gray-400 mt-8 transition-colors duration-300">
          Don't have an account?
          <Link to="/register" className="text-slate-900 dark:text-white font-medium hover:underline ml-1.5 transition-colors duration-300">
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;