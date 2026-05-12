import { NavLink } from "react-router-dom";
import { Home, History, BarChart3 } from "lucide-react"; // আইকন ব্যবহারের জন্য
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Timeline", path: "/timeline", icon: <History size={20} /> },
    { name: "Stats", path: "/stats", icon: <BarChart3 size={20} /> },
  ];

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md px-10">
      <div className="logo">
        <img src={logo} alt="KeenKeeper Logo" className="h-10" />
      </div>
      <div className="flex gap-8">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium ${
                isActive ? "text-blue-600 underline" : "text-gray-600"
              }`
            }
          >
            {link.icon} {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;