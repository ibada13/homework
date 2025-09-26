import { NavLink } from "react-router-dom";
import ButtonNaving from "./ui/ButtonNaving";
import logo from './logo.png'
export default function NavBar() {
  const navLinks = [
    { name: "Home", to: "/aurel" },
    { name: "Why Us?", to: "/why-us" },
    { name: "Our Experts", to: "/experts" },
    { name: "Our Solutions", to: "/solutions" },
    { name: "Blog", to: "/blog" },
    { name: "Get In Touch", to: "/contact" },
  ];

  const linkClass = (isActive: boolean) =>
    isActive
      ? "text-sfg uppercase font-semibold"
      : "hover:text-sfg hover:border-b-2 hover:border-sfg transition-all duration-300";

  return (
    <nav
      className="fixed top-[5.5%] left-1/2 -translate-x-1/2 w-[98%] 
      bg-bg/70 backdrop-blur-xl border border-white/10
      flex justify-between items-center px-6 py-3 text-secondary 
      rounded-2xl shadow-lg shadow-black/20 z-50"
    >
      {/* Logo */}
      <NavLink to={'/aurel'}>

      <img src={logo} alt="" className="w-16 h-16" />
      </NavLink>

      {/* Center Links */}
      <ul className="flex space-x-6 lg:space-x-10">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              aria-label={`Go to ${link.name}`}
              className={({ isActive }) =>
                `${linkClass(isActive)} pb-1 text-sm lg:text-base`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Book Now Button */}
        <ButtonNaving content="BOOK NOW" subcontent="FREE Consultation"/>
    </nav>
  );
}
