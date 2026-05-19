import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaProjectDiagram,
  FaSignOutAlt,
} from "react-icons/fa";

const MainLayout = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">

        <div>

          <h1 className="text-3xl font-bold mb-12 text-cyan-400">
            Taskynth
          </h1>

          <nav className="space-y-4">

            <Link
              to="/dashboard"
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-cyan-500 transition-all"
            >
              <FaHome />
              Dashboard
            </Link>

            <Link
              to="/projects"
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-cyan-500 transition-all"
            >
              <FaProjectDiagram />
              Projects
            </Link>

            <Link
              to="/tasks"
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-cyan-500 transition-all"
            >
              <FaTasks />
              Tasks
            </Link>

          </nav>

        </div>

        <button
          onClick={logout}
          className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 p-4 rounded-xl transition-all"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;