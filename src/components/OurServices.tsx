type serviceType = {
  number: string;
  label: string;
  description: string;
};

export default function OurServices() {
  const services: serviceType[] = [
    { number: "01", label: "Business Development", description: "Helping you expand with smart strategies." },
    { number: "02", label: "Website Creation", description: "Modern and responsive websites tailored for you." },
    { number: "03", label: "Marketing", description: "Boosting brand awareness and customer reach." },
    { number: "04", label: "Creative & Production", description: "Designs and media that stand out." },
    { number: "05", label: "Event Management", description: "Seamless planning and execution of events." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-black to-bg w-full flex flex-col justify-between md:flex-row items-center px-12 py-22 gap-12">
      
      {/* Left Side */}
<div className="flex flex-col gap-6 max-w-lg flex-1 self-start space-y-12">
  {/* First group */}
  <div className="flex flex-col gap-12">
    <p className="text-secondary text-lg md:text-xl opacity-80 text-left">
      Crafting Prestige at Every Level
    </p>
    <p className="p-1 dance text-5xl bg-gradient-to-r from-ssfg via-sfg to-sfg bg-clip-text text-transparent">
      For those who demand more:
    </p>
  </div>

  {/* Second group */}
  <div className="flex flex-col gap-12">
    <h2 className="text-6xl md:text-7xl font-extrabold text-sfg tracking-tight text-left">
      Our Services
    </h2>
    <p className="text-gray-400 text-lg md:text-xl opacity-80 text-left">
      At AUREL, we craft tailored marketing, branding, web, and event experiences that reflect your vision and drive impact.
    </p>
  </div>
</div>


      {/* Right Side */}
      <div className="flex-1 text-white">
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="relative rounded-2xl p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-transparent 
                         bg-clip-padding hover:border-gradient-to-r hover:from-purple-500 hover:to-black
                         transition duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-bg to-black text-white font-bold text-xl">
                  {service.number}
                </span>
                <h3 className="text-xl font-semibold">{service.label}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
