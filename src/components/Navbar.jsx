import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart3 } from "lucide-react";

const Navbar = () => {
  // Figma ডিজাইন অনুযায়ী কালার কোড এবং স্টাইল
  const activeStyle = "bg-[#2D4A3E] text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium transition-all";
  const normalStyle = "text-[#4B5563] hover:text-[#2D4A3E] px-4 py-2 flex items-center gap-2 font-medium transition-all";

  return (
    <nav className="flex justify-between items-center py-4 px-12 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* বাম পাশে লোগো (KeenKeeper) */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-[#111827]">Keen</span>
          <span className="text-[#2D4A3E]">Keeper</span>
        </h1>
      </div>

      {/* ডান পাশে নেভিগেশন লিঙ্কসমূহ */}
      <div className="flex items-center gap-6">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink 
          to="/timeline" 
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <Clock size={20} />
          <span>Timeline</span>
        </NavLink>

        <NavLink 
          to="/stats" 
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <BarChart3 size={20} />
          <span>Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;