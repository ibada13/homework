import { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonNaving from "./ui/ButtonNaving";
import logo from "./assets/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/aurel" },
    { name: "Why Us?", to: "/why-us" },
    { name: "Our Experts", to: "/experts" },
    { name: "Our Solutions", to: "/solutions" },
    { name: "Blog", to: "/blog" },
    // { name: "Get In Touch", to: "/contact" },
  ];

  const linkClass = (isActive: boolean) =>
    isActive
      ? "text-sfg uppercase font-semibold"
      : "hover:text-sfg transition-all duration-200";

  return (
    <nav className="fixed top-[5.5%] left-1/2 -translate-x-1/2 w-5/6 md:w-19/20 bg-bg/70 backdrop-blur-xl border border-white/10 flex justify-between items-center px-6 py-3 text-secondary rounded-2xl shadow-lg shadow-black/20 z-50">
      {/* Logo */}
      <NavLink to="/">
        <img loading="lazy" src={logo} alt="Logo" className="w-16 h-16" />
      </NavLink>

      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-secondary transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-secondary transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-secondary transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      
      <ul className="hidden md:flex space-x-6 lg:space-x-10 items-center">
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
        
      <ButtonNaving className="hidden md:block" content="Get In Touch" />
      

      {/* Hamburger menu links for small screens */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-bg/90 backdrop-blur-xl border-t border-white/10 flex flex-col space-y-2 py-4 z-40 rounded-lg mt-2">
          {navLinks.map((link, index) => (
            <li key={index} className="px-6">
              <NavLink
                to={link.to}
                aria-label={`Go to ${link.name}`}
                className={({ isActive }) =>
                  `${linkClass(isActive)} text-sm`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="px-6">
            <ButtonNaving content="Get In Touch" />
          </li>
        </ul>
      )}
    </nav>
  );
}
