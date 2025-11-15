import { useRef } from "react";
import { PiSparkleFill } from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import bg from './assets/WHOAREWE.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function WhoAreWe() {
  const headingRef = useRef<HTMLDivElement>(null);
  const pointRefs = useRef<HTMLDivElement[]>([]);

  const points = [
    "Tailored Prestige Strategy – Crafted with purpose & results.",
    "Signature Events – Luxury experiences that impress.",
    "High-End Digital Services – Websites & campaigns built with class.",
  ];

  useGSAP(() => {
    gsap.fromTo(headingRef.current, {
      x: -500,
      opacity: 0.2,
      duration: 1,
    }, {
      x: 0,
      opacity: 1,
  
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#whosec",
        start: "top center",
        end: "center 50%",
        scrub:1.5 ,
        // toggleActions: "play reverse play reverse",
        // markers: true,
      }
    });

    pointRefs.current.forEach((el: HTMLHeadingElement, i: number) => {
      gsap.fromTo(el, {
        y: 50,
        rotation: i % 2 === 0 ? -3 : 3,
        opacity: 0,
        // duration: 2,
        // delay: i * 0.1,
      }, {
        rotation: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "-30% 30%",
          // toggleActions: "play reverse play reverse",
          // markers: true,
          scrub: true,
        },
      })
    })

    gsap.fromTo("#sparkle", {
      opacity: 0.5,
      scale: 1,
    }, {
      opacity: 2,
      duration: 1.5,
      yoyo: true,
      scale: 1.2,
      repeat: -1,
      ease: "power3.inOut"
    })
  });

  return (
    <section
      
      className="relative flex flex-col md:flex-row justify-between items-center min-h-screen w-full py-22 px-12 md:px-24 gap-12 bg-cover bg-center"
      id="whosec"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-bg/80 via-black/55 to-bg/80" />

      <div ref={headingRef} className="relative flex flex-col gap-6 max-w-lg flex-1">
        <p className="text-gray-400 text-lg md:text-xl opacity-80 text-center md:text-left">
          We Don’t Just Create We Elevate.
        </p>
        <h2 className="text-6xl md:text-7xl font-extrabold text-sfg tracking-tight text-center md:text-left">
          Who Are We?
        </h2>
        <p className="text-white text-lg md:text-xl opacity-80 text-left">
          AUREL is a luxury marketing and event agency, crafting prestige brands, elite events, and impactful digital strategies for premium clients.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 w-full max-w-lg flex-1">
        {points.map((point, i) => (
          <div
            key={i}
            ref={(el) => { if (el) pointRefs.current[i] = el; }}
            className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition-transform duration-500 will-change-transform"
          >
            <PiSparkleFill id="sparkle" size={42} className="text-sfg" />
            <p className="text-white font-semibold text-lg">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
