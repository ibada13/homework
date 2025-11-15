"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import bg from "./assets/bg.webp";

export default function Main() {
  useEffect(() => {
    gsap.fromTo(
      ".step-char",
      { opacity: 0, scale: 0.5, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <div className="relative flex w-screen min-h-[80vh] md:min-h-[120vh] overflow-hidden py-24">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-bl from-fg/40 via-bg/20 to-fg/40" />

      <div className="mt-16 self-end md:self-center  relative z-10 flex flex-col items-start  justify-center h-full text-left text-white px-6 w-full gap-y-12">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-4 text-center w-full">
          <span className="text-secondary">How It Works</span>
        </h1>

        <p className="text-3xl md:text-5xl text-gray-200 text-center w-full orbi">
          it is simple as{" "}
          <span className="step-char text-sfg font-semibold inline-block mx-2">1</span>,
          <span className="step-char text-sfg font-semibold inline-block mx-2">2</span>,
          <span className="step-char text-sfg font-semibold inline-block mx-2">3</span>
          <span className="step-char text-sfg font-semibold inline-block mx-1">.</span>
          <span className="step-char text-sfg font-semibold inline-block mx-1">.</span>
          <span className="step-char text-sfg font-semibold inline-block mx-1">.</span>
        </p>
      </div>
    </div>
  );
}
