import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

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

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      login(response.data.token);

      navigate("/dashboard");

    } catch (error) {
      alert("Invalid credentials");
    }
  };

   return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl"
      >

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-cyan-400 mb-3">
            Taskynth
          </h1>

          <p className="text-slate-400">
            AI-powered workflow management.
          </p>

        </div>
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
          />

          <button className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all p-4 rounded-xl text-lg font-semibold">
            Login
          </button>

        </form>
          <p className="text-center text-slate-400 mt-8">

          Don't have an account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2"
          >
            Register
          </Link>

        </p>

      </motion.div>

    </div>
  );
};

export default Login;