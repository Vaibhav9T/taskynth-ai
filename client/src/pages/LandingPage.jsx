// src/pages/LandingPage.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTasks,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

export default function LandingPage() {
  const features = [
    {
      icon: <FaTasks />,
      title: "Task Management",
      desc: "Create, assign and track tasks with priorities and deadlines.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Manage members, projects and responsibilities efficiently.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      desc: "Monitor progress, completed work and overdue tasks.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Role-Based Access",
      desc: "Admin and Member permissions secured with JWT.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Taskynth <span className="text-blue-500">AI</span>
          </h1>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/5"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            AI-Powered Team Collaboration Platform
          </span>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Plan Projects.
            <br />
            Assign Tasks.
            <br />
            Track Progress.
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-400">
            Taskynth AI helps modern teams organize projects,
            collaborate efficiently and deliver work faster through
            a centralized task management workspace.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <Link
              to="/register"
              className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 font-semibold"
            >
              Start Free
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-2xl border border-white/20"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-slate-900 rounded-2xl p-6">
                <p className="text-slate-400">Total Tasks</p>
                <h3 className="text-4xl font-bold mt-2">128</h3>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6">
                <p className="text-slate-400">Completed</p>
                <h3 className="text-4xl font-bold text-green-400 mt-2">
                  92
                </h3>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6">
                <p className="text-slate-400">In Progress</p>
                <h3 className="text-4xl font-bold text-yellow-400 mt-2">
                  24
                </h3>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6">
                <p className="text-slate-400">Overdue</p>
                <h3 className="text-4xl font-bold text-red-400 mt-2">
                  4
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Everything Your Team Needs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition"
            >
              <div className="text-blue-500 text-3xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-16">
          How Taskynth Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Create Project",
            "Invite Team",
            "Assign Tasks",
            "Track Progress",
          ].map((step, index) => (
            <div key={step}>
              <div className="h-16 w-16 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-4 font-semibold text-lg">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center">
          <h2 className="text-5xl font-bold">
            Ready to Organize Your Team?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Start managing projects, assigning tasks and tracking
            progress from a single workspace.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500">
        © 2026 Taskynth AI • Built with React, Spring Boot & PostgreSQL
      </footer>
    </div>
  );
}