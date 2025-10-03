import {  useRef } from "react";
import { gsap } from "gsap";
import pfp from "./assets/pfp.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
interface People {
  name: string;
  job: string;
  imageUrl: string;
}

export default function OurExperts() {
const people: People[] = [
  { name: "Rodion Raskolnikov", job: "Teacher", imageUrl: pfp },                
  { name: "Jay Gatsby", job: "Entrepreneur", imageUrl: pfp },               
  { name: "Captain Ahab", job: "Leader", imageUrl: pfp },    
  { name: "Sherlock Holmes", job: "Detective", imageUrl: pfp },     
];


  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger:cardsRef.current , 
            // markers: true, 
            scrub:true , 
            start: "top bottom",
            end:"bottom 80%"
      }
    });
  }, []);

  return (
    <section className="min-h-screen w-full bg-gradient-to-bl from-bg via-black to-bg flex flex-col items-center py-32 space-y-15 px-6">
      <p className="text-8xl text-sfg font-semibold uppercase  ">Our Experts</p>
        <p className="text-secondary text-xl font-semibold text-left md:text-center w-full ">The elite team redefining what’s possible</p>
      <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full ">
        {people.map((ppl, idx) => (
          <div
            key={`p-${idx}`}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
className="flex flex-col items-center justify-end relative h-80 rounded-lg  bg-black shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"

          >
            <div
              className="absolute inset-0 z-0 rounded-lg"
              style={{
                backgroundImage: `url(${ppl.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/20 z-10 hover:bg-black/50  transition-all duration-300" />
            <div className="relative z-10 text-center md:text-left  w-full text-bg p-4 comic ">
              <p className="text-xl font-extrabold">{ppl.name}</p>
              <p className="text-lg font-light text-black">{ppl.job}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
