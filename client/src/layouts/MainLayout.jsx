import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaProjectDiagram,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import toast from "react-hot-toast";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#09090b] text-white selection:bg-blue-500/30">

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-[#18181b]/80 backdrop-blur-xl sticky top-0 z-30">
        <h1 className="text-xl font-extrabold tracking-tight text-white">
          Taskynth
        </h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <aside className={`fixed md:relative inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-[#18181b]/95 md:bg-[#18181b]/50 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between z-50`}>

        <div>

          <h1 className="text-2xl font-extrabold tracking-tight mb-8 text-white hidden md:block">
            Taskynth
          </h1>

          <nav className="space-y-2">

            <Link
              to="/dashboard"
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <FaHome size={18} />
              Dashboard
            </Link>

            <Link
              to="/projects"
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <FaProjectDiagram size={18} />
              Projects
            </Link>

            <Link
              to="/tasks"
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <FaTasks size={18} />
              Tasks
            </Link>

            <Link
              to="/profile"
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <FaUser size={18} />
              Profile
            </Link>

          </nav>

        </div>

        <button
          onClick={logout}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
        >
          <FaSignOutAlt size={18} />
          Logout
        </button>

      </aside>

      <main className="flex-1 overflow-y-auto relative">
        {/* Subtle Background Glow for the entire app */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;