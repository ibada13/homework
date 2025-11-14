
// import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from './assets/word.png'
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
      <img loading="lazy" src={logo} alt="" className="w-80 md:w-130 "/>
      
      <p className="text-xl"></p>
    </div>
  )
}



const SecondSection = () => {


 

  return (
    <div className="mt-10  text-center ">
      
      
<p
  className="
    text-4xl md:text-7xl font-extrabold
    bg-clip-text text-transparent
    bg-[length:200%_auto]
    bg-[linear-gradient(to_right,#a87a26,#fcefb3,#ac8332,#be9049,#b38d43,#efda99)]
    animate-gradient
  "
>
  Prestiege In Every Detail
</p>



      <p className="text-secondary mt-4 max-w-2xl mx-auto  z-10 font-bold">
       Prestige Marketing & Signature Brand Launches 
Designed for Visionary Brands. 
							
      </p>


    </div>
  );
};


const Main = () => {
  return (
    <div className="w-full min-h-screen pb-25 pt-34  flex flex-col items-center justify-center bg-gradient-to-tr from-black via-bg to-sfg">
      
      

      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Main;
