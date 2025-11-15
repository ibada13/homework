"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { FaEarthEurope } from "react-icons/fa6";
import asset from './assets/pyramids.jpg'
import { VscRobot } from "react-icons/vsc";
type Solution = {
  title: string;
  description: string;
  video?: boolean;
  color: string;
  preview_link?: string;
  preview?: any;  
  asset: any;
};

export default function OurSolutions() {
  const projects: Solution[] = [
    { title: "Portfolio Website", description: "A personal portfolio website showcasing projects and skills.", color: "#4CAF50", preview_link: "https://myportfolio.com", asset: asset },
    { title: "E-commerce App", description: "A full-stack e-commerce application with cart and payment integration.", color: "#FF5722", preview_link: "https://shoponline.com", asset: asset },
    // { title: "Task Manager", description: "A productivity app for managing daily tasks with reminders and deadlines.", color: "#2196F3", preview_link: "https://taskmanager.com", asset: asset },
    { title: "Brand Animation", description: "A logo reveal animation for brand presentation and marketing.", color: "#FFD700", asset: "/homework/logoanim.webm", video: true },
    { title: "Your Telegram Ai Assistant", description: "A logo reveal animation for brand presentation and marketing.", color: "#FFD700", asset: "/homework/TelegramAssistant.webm", video: true , preview:<VscRobot size={90} color="#08c"/> },
    { title: "AI Web Researcher For Sales", description: "A logo reveal animation for brand presentation and marketing.", color: "#FFD700", asset: "/homework/aisales.webm", video: true , preview:<FaEarthEurope size={90} color="#0f0"/> },
    { title: "Weather Dashboard", description: "A web app displaying live weather data and forecasts using APIs.", color: "#03A9F4", preview_link: "https://weatherapp.com", asset: asset },
  ];

  const [project, setProject] = useState<Solution>(projects[0]);

  return (
    <section
      id="solutions"
      className="min-h-screen w-full bg-gradient-to-bl from-bg via-black to-bg px-6 py-12 flex flex-col space-y-20">
      <div className="flex flex-col items-center gap-y-14">
        <p className="text-sfg text-8xl text-left w-full md:text-8xl font-bold md:text-center">Our Solutions</p>
        <a download href="/homework/AUREL CATALOGUE EUROPE.pdf" className="bg-sfg text-black px-6 py-3 rounded-xl hover:bg-black hover:text-sfg transition-all duration-300 border border-transparent hover:border-sfg flex space-x-2 items-center">
         <p> Download Our Catalog</p> <FiDownload className="inline" size={25}/>
        </a>
      </div>

      <div className="flex flex-col space-y-15">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">

          {project.video ? (
            <video
              src={project.asset}
              controls
              loop
              preload="none"
              className="w-full md:w-3/5 h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            />
          ) : (
            <img
              className="w-full md:w-3/5 h-64 md:h-80 object-cover rounded-2xl shadow-xl"
              src={project.asset}
              alt={project.title}
            />
          )}

          <div className="flex-1 p-8 rounded-2xl flex flex-col justify-center space-y-12 text-white shadow-lg">
            <p className="text-3xl font-bold text-sfg text-center">{project.title}</p>
            <p className="text-gray-300">{project.description}</p>
            { project.preview_link &&
              <Link to={project.preview_link} className="bg-gradient-to-bl from-sfg via-black to-sfg hover:bg-gradient-to-bl hover:from-black hover:via-sfg hover:text-black hover:border hover:border-sfg hover:to-black transition-colors duration-300 text-secondary font-bold leading-relaxed text-center py-4 px-6 rounded-xl ">
                View Project
              </Link>
            }
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`relative w-40 h-40 flex items-center justify-center rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:border-secondary border ${proj.title === project.title ? 'border-sfg' :'border-black'} transition-all duration-300`}
              onClick={() => setProject(proj)}
            >
              {proj.video ? proj.preview ? proj.preview : (
                <video
                  className="w-full h-full object-cover"
                  src={proj.asset}
                  muted
                  loop
                  autoPlay
                />
              ) : (
                <div
                  className="w-full h-full"
                  style={{ backgroundImage: `url(${proj.asset})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">{proj.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
