
import { useEffect, useRef, type JSX } from "react";

import { FaHandshake, FaCode, FaRocket, FaThumbsUp } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Step {
  number: number;
  icon: JSX.Element;
  title: string;
  desc: string;
}




const steps: Step[] = [
  {
    number: 1,
    icon: <FaHandshake size={75} className="icon" />,
    title: "Initial Consultation",
    desc: "We understand your business, goals and requirements to tailor the perfect tech solution.",
  },
  {
    number: 2,
    icon: <MdOutlineDesignServices size={75} className="icon" />,
    title: "Planning and Design",
    desc: "Our experts design wireframes, prototypes and project plans for a clear roadmap.",
  },
  {
    number: 3,
    icon: <FaCode size={75} className="icon" />,
    title: "Development and Testing",
    desc: "We develop your product using best practices and rigorously test for quality and performance.",
  },
  {
    number: 4,
    icon: <FaRocket size={75} className="icon" />,
    title: "Deployment and Launch",
    desc: "We deploy your solution, ensuring smooth launch and integration with your systems.",
  },
  {
    number: 5,
    icon: <FaThumbsUp size={75} className="icon" />,
    title: "Support and Optimization",
    desc: "After launch, we provide support, monitor performance and optimize for continued success.",
  },
];


const Content = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const roadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".step");

    
    sections.forEach((section) => {
      const icon = section.querySelector(".icon");
      const number = section.querySelector(".number-circle");
      const title = section.querySelector(".title-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          toggleActions: "play none play reverse",
          // markers:true , 
        },
      });

      tl.fromTo(
        number,
        { backgroundColor: "#D1D5DB", scale: 0.9 },
        { backgroundColor: "#fdd017", scale: 1.05, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        title,
        { color: "#D1D5DB", scale: 0.9 },
        { color: "#fdd017", scale: 1.1, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          icon,
          { color: "#D1D5DB", y: 10 },
          { color: "#fdd017", y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    });

   
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { height:0, transformOrigin: "top center" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: roadRef.current,
            start: "top center",
            end: "bottom center",
              // markers:true , 
            
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-fg via-bg to-fg flex flex-col items-center py-20 px-6"
    >
      <div className="relative w-full max-w-5xl">
        
        <div
          ref={ roadRef}
          className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gray-200 origin-top" />
        
        <div
          ref={lineRef}
          className="absolute left-0  sm:left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-[#fdd017] origin-top"
        />

        {steps.map((step, i) => (
          <div
            key={i}
            className={`step mb-16 flex  flex-row items-center ${
              i % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end px-6">
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "" : "sm:items-end items-start"
                } space-y-4`}
              >
                <h3 className="number-circle w-12 h-12 flex justify-center items-center font-bold text-white rounded-full shadow-md transition-all duration-300">
                  {step.number}
                </h3>
                <h3 className="title-text text-xl font-bold mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className={`text-secondary text-sm font-semibold leading-relaxed max-w-sm ${i%2===0?'text-left':'text-left sm:text-right'}`}>
                  {step.desc}
                </p>
              </div>
            </div>

            
            <div
              className={`sm:w-1/2 flex justify-center px-6`}>
              <div className={`flex items-center ${i%2===0?'justify-end':'justify-end sm:justify-start'} w-full  transition-all duration-500`}>
                {step.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
