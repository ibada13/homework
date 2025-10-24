import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PiSparkleFill } from "react-icons/pi";

const SparkleEffect: React.FC = () => {
  const sparkleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sparkleRef.current) return;

    const positions = [
      { top: "0%", left: "50%" },   
      { top: "100%", left: "50%" }, 
      { top: "50%", left: "0%" },   
      { top: "0%", left: "50%" },   
    ];

    const tl = gsap.timeline({ repeat: -1 });

    positions.forEach((pos) => {
      tl.set(sparkleRef.current, { ...pos })
        .fromTo(
          sparkleRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1.5,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        )
        .to(sparkleRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          delay: 0.3,
        });
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Main sparkle container */}
      <div className="relative flex items-center justify-center">
        {/* Main sparkle */}
        <PiSparkleFill className="text-yellow-300 text-9xl" />

        {/* Animated sparkle */}
        <div
          ref={sparkleRef}
          className="absolute text-white text-3xl"
          style={{
            transform: "translate(-50%, -50%)", // center alignment
          }}
        >
          <PiSparkleFill className="text-yellow-100" />
        </div>
      </div>
    </div>
  );
};

export default SparkleEffect;
