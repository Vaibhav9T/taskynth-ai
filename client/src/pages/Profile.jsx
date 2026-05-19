import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaSave } from "react-icons/fa";
import toast from "react-hot-toast";
import API from "../api/axios";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Adjust the endpoint if your backend uses a different route (e.g., /auth/me)
        const response = await API.get("/users/me");
        setFormData({
          name: response.data.name || "",
          email: response.data.email || "",
          role: response.data.role || "User",
          bio: response.data.bio || "",
        });
      } catch (error) {
        toast.error("Failed to load profile data.");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put("/users/me", formData);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto text-white">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Profile Settings
        </h1>
        <p className="text-gray-400 text-sm">
          Manage your personal information and preferences.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#18181b] border border-white/10 p-8 rounded-2xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold">
            <FaUser />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{formData.name}</h2>
            <p className="text-gray-400 text-sm">{formData.role}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-none"
            />
          </div>

          <div className="flex justify-end pt-4 border-t border-white/5">
            <button className="bg-white text-black hover:bg-gray-100 transition-all px-6 py-3 rounded-xl text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2">
              <FaSave size={14} />
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;