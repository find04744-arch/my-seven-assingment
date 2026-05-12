import { NavLink } from "react-router-dom";
import { Home, History, BarChart3 } from "lucide-react";

const Navbar = () => {
  const linkStyle = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${isActive ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-600 hover:bg-gray-100"}`;

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-sm border-b sticky top-0 z-50 px-10">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg text-white font-black text-xl">K</div>
        <span className="text-xl font-bold tracking-tight text-gray-800">KeenKeeper</span>
      </div>
      <div className="flex gap-4">
        <NavLink to="/" className={linkStyle}><Home size={18}/> Home</NavLink>
        <NavLink to="/timeline" className={linkStyle}><History size={18}/> Timeline</NavLink>
        <NavLink to="/stats" className={linkStyle}><BarChart3 size={18}/> Stats</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;