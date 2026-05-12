import { NavLink } from "react-router-dom";
import { Home, History, BarChart3 } from "lucide-react";
// আপনার কাছে থাকা লোগোর সঠিক নাম দিন, যেমন logo-xl.png
import logo from "../assets/logo-xl.png"; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md px-10 w-full">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="flex gap-8 items-center">
        <NavLink to="/" className={({ isActive }) => `flex items-center gap-1 ${isActive ? "text-blue-600 font-bold" : "text-gray-600"}`}>
          <Home size={18} /> Home
        </NavLink>
        <NavLink to="/timeline" className={({ isActive }) => `flex items-center gap-1 ${isActive ? "text-blue-600 font-bold" : "text-gray-600"}`}>
          <History size={18} /> Timeline
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => `flex items-center gap-1 ${isActive ? "text-blue-600 font-bold" : "text-gray-600"}`}>
          <BarChart3 size={18} /> Stats
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;