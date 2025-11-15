import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import ButtonNaving from "./ui/ButtonNaving";
import logo from "./assets/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const scrollTarget = useRef<string | null>(null);
  const isScrolling = useRef(false);

  const navigate = useNavigate();
  const location = useLocation();
  const homePage = "/";
  // the navbar links
  const navLinks = [
    { name: "Who Are We", to: "#whosec" },
    { name: "Services", to: "#services" },
    { name: "Solutions", to: "#solutions" },
    { name: "Experts", to: "#experts" },
    { name: "How It Works", to: "/howitworks" },
  ];
  // we use this function to get the proprties of the slected link
  const linkClass = (to: string) => {
    if (to.startsWith("#") && selected === to) return "text-sfg uppercase font-semibold";
    if (!to.startsWith("#") && selected === to) return "text-sfg uppercase font-semibold";
    return "hover:text-sfg transition-all duration-200";
  };
  // we use this function to scroll to a section
  const scrollToSection = (id: string) => {
    // we check if the elemnt exist
    const el = document.querySelector(id);
    //if it exist we scroll to it after 500ms to make sure that it exist in the page we are at 
    if (el) {
      isScrolling.current = true;
      el.scrollIntoView({ behavior: "smooth" });
      setSelected(id);
      setTimeout(() => (isScrolling.current = false), 500);
    }
  };

  const handleClick = (to: string) => {
    setIsOpen(false);

    if (to.startsWith("#")) {
      if (location.pathname !== homePage) {
        scrollTarget.current = to;
        navigate(homePage, { state: { scrollTo: to } });
      } else {
        scrollToSection(to);
      }
      setSelected(to);
    } else {
      navigate(to);
      setSelected(to);
    }
  };

  
  useEffect(() => {
    const target = (location.state as any)?.scrollTo || scrollTarget.current;
    if (target && location.pathname === homePage) {
      // Wait a tick to ensure DOM is rendered
      requestAnimationFrame(() => scrollToSection(target));
      scrollTarget.current = null;
      window.history.replaceState({}, "", location.pathname);
    }
  }, [location]);

  // Manual scroll section highlighting
  useEffect(() => {
    if (location.pathname !== homePage) return;

    const sections = navLinks
      .filter(link => link.to.startsWith("#"))
      .map(link => document.querySelector(link.to))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      if (isScrolling.current) return;

      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPos) {
          setSelected(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, navLinks]);

  // Highlight route links on path change
  useEffect(() => {
    if (location.pathname !== homePage) setSelected(location.pathname);
    else if (!scrollTarget.current) setSelected("");
  }, [location.pathname]);

  return (
    <nav className="fixed top-[5.5%] left-1/2 -translate-x-1/2 w-5/6 md:w-19/20 bg-bg/70 backdrop-blur-xl border border-white/10 flex justify-between items-center px-6 py-3 text-secondary rounded-2xl shadow-lg shadow-black/20 z-50">
      <NavLink to={homePage} onClick={() => { setIsOpen(false); setSelected(homePage); }}>
        <img loading="lazy" src={logo} alt="Logo" className="w-16 h-16" />
      </NavLink>

      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-secondary transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-secondary transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
        <span className={`block w-6 h-0.5 bg-secondary transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      <ul className="hidden md:flex space-x-6 lg:space-x-10 items-center">
        {navLinks.map((link, i) => (
          <li key={i}>
            <button
              onClick={() => handleClick(link.to)}
              className={`${linkClass(link.to)} pb-1 text-sm lg:text-base`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      <ButtonNaving className="hidden md:block" content="Get In Touch" />

      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-bg/90 backdrop-blur-xl border-t border-white/10 flex flex-col space-y-2 py-4 z-40 rounded-lg mt-2">
          {navLinks.map((link, i) => (
            <li key={i} className="px-6">
              <button
                onClick={() => handleClick(link.to)}
                className={`${linkClass(link.to)} text-sm w-full text-left`}
              >
                {link.name}
              </button>
            </li>
          ))}
          <li className="px-6">
            <ButtonNaving onClick={()=>setIsOpen(false)} content="Get In Touch" />
          </li>
        </ul>
      )}
    </nav>
  );
}
