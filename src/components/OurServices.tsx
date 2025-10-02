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
    <div className="min-h-screen bg-gradient-to-br from-bg via-black to-bg w-full flex flex-col  justify-between items-center px-12 py-22 gap-12">
      
      <div className="flex flex-col gap-6 flex-1 space-y-12">
        <div className="flex flex-col gap-12 text-center">
          <p className="text-secondary text-lg md:text-xl opacity-80 text-center">
            Crafting Prestige at Every Level
          </p>
          <p className="p-1 dance text-7xl  opacity-50
    bg-clip-text text-transparent
    bg-[length:200%_auto]
    bg-[linear-gradient(to_right,#a87a26,#fcefb3,#ac8332,#be9049,#b38d43,#efda99)]
    animate-gradient">
            Because limits don’t exist
          </p>
        </div>

        <div className="flex flex-col gap-12 text-center">
          <h2 className="text-6xl md:text-7xl font-extrabold text-sfg tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg md:text-xl opacity-80">
            At AUREL, we craft tailored marketing, branding, web, and event experiences that reflect your vision and drive impact.
          </p>
        </div>
      </div>

      <div className="flex-1 text-white">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="relative rounded-2xl p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-transparent bg-clip-padding hover:border-gradient-to-r hover:from-purple-500 hover:to-black transition duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col gap-y-6"
            >
              <div className="flex flex-col  md:flex-row items-center gap-y-2 md:space-x-4 mb-4 text-center md:text-left">
                <p className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-bg to-black text-white font-bold text-xl mb-4 md:mb-0">
                  {service.number}
                </p>
                <h3 className="text-xl font-semibold">{service.label}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
