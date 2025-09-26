import {  useRef } from "react";
// import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import logo from './word.png'
gsap.registerPlugin(ScrollTrigger);


// const FirstSection = () => {
//   return (
//     <div className="flex items-center gap-4 px-10 py-8 rounded-2xl bg-white/10 backdrop-blur-3xl shadow-sm">
//       <span className="text-4xl animate-bounce text-sfg drop-shadow-lg">✨</span>
//       <TypeAnimation
//         sequence={[
//           "Welcome to our website!",
//           1500,
//           "We create with passion 🚀",
//           1500,
//           "Turning ideas into reality ✨",
//           2000,
//         ]}
//         wrapper="span"
//         cursor={true}
//         repeat={Infinity}
//         speed={60}
//       className="whitespace-nowrap text-lg md:text-2xl font-bold tracking-wide drop-shadow-md text-fg"
//       />
//     </div>
//   );
// };


const FirstSection = () => { 
  return (
    <div className="flex flex-col items-center justify-around z-10">
      <img src={logo} alt="" className="w-80 md:w-130"/>
      
      <p className="text-xl"></p>
    </div>
  )
}

interface Stat {
  number: number;
  label: string;
}

const SecondSection = () => {
  const stats: Stat[] = [
    { number: 10, label: "Years Experience" },
    { number: 500, label: "Projects Delivered" },
    { number: 200, label: "Happy Clients" },
  ];

 
  const statRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useGSAP(() => {
    statRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stats[i].number,
          duration: 5,
          snap: { innerText: 1 },
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    
  //   gsap.fromTo('#title', {
  //   color: '#FAFA33',
  // }, {
  //     color: '#fdd017',
  //     repeat: -1,
  //     duration: 0.5, 
  //     yoyo: true,
  //   ease:'power2.inOut'
  // })
  
  }

  );

  return (
    <div className="mt-20 w-[80%] text-center ">
      
      
<p
  className="text-2xl md:text-7xl font-extrabold bg-clip-text text-transparent 
    bg-[linear-gradient(to_right,#b8860b,#f4a300,#fdd017,#FAFA33,#ffd966,#ffb347,#b8860b)] 
    bg-[length:200%_auto]"
  style={{ animation: "gradientMove 8s linear infinite" }}
>
  Prestiege In Every Detail
</p>



      <p className="text-secondary mt-4 max-w-xl mx-auto  z-10 font-bold">
        We combine strategy, design, and technology to create experiences that
        move people and grow brands.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12  z-10">
        {stats.map((stat, i ) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-secondary/50 border border-sfg shadow-xl flex flex-col items-center justify-center"
          >
            <h3
              ref={(el) => void (statRefs.current[i] = el) }
              className="text-4xl tracking-wider font-bold text-sfg"
            >
              0
            <span>+</span>
            </h3>
            <p className="text-fg/80 font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const Main = () => {
  return (
    <div className="w-full min-h-screen pb-10 pt-34  flex flex-col items-center justify-center bg-gradient-to-tr from-black via-bg to-sfg">
      
      

      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Main;
