import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Back({ to = -1 }) {
  const navigate = useNavigate();       
    return (
    <Link
    to="/"
    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-6"
    >
    <FaArrowLeft size={12} />
    Back to Home
    </Link> 
    );
}