import { useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import LandningPage from "./pages/LandingPage";
import Footer from "./pages/components/Footer";
import { FaPhone } from "react-icons/fa";
import Cta from "./pages/components/Cta";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Aurel() { 
  const location = useLocation();

  useEffect(() => { 
    document.title = "AUREL";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return (
    <ReactLenis root options={{ lerp: 0.2 }}>
      <div className="scroll-smooth min-h-screen w-screen flex flex-col justify-center bg-white px-1">
        <NavBar />
        <NavLink to={'/cta'} className="fixed right-10 bottom-10 bg-sfg shadow-2xl rounded-full p-3 z-50 hover:bg-bg hover:text-secondary hover:scale-105 transition-all duration-300">
          <FaPhone size={35}/>
        </NavLink>
        <main className="flex-grow scroll-smooth">
          <Routes>
            <Route path="/" element={<LandningPage />} />
            <Route path="/cta" element={<Cta />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
