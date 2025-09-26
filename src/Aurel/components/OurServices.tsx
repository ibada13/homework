import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LanguageIcon from "@mui/icons-material/Language";
import CampaignIcon from "@mui/icons-material/Campaign";
import BrushIcon from "@mui/icons-material/Brush";
import EventIcon from "@mui/icons-material/Event";

import type { ReactElement } from "react";
type serviceType = {
  label: string, 
  icon:ReactElement<any ,any>,
  color:"primary" | "secondary" | "success" | "warning" | "error" | "inherit" | "grey" | "info"| undefined ,
}
export default function OurServices() {
  const services :serviceType[]= [
    { label: "Business Development", icon: <BusinessCenterIcon fontSize="large" />, color: "primary" },
    { label: "Website Creation", icon: <LanguageIcon fontSize="large" />, color: "secondary" },
    { label: "Marketing", icon: <CampaignIcon fontSize="large" />, color: "success" },
    { label: "Creative & Production", icon: <BrushIcon fontSize="large" />, color: "warning" },
    { label: "Event Management", icon: <EventIcon fontSize="large" />, color: "error" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-black to-bg w-full flex flex-col justify-between md:flex-row items-center px-12 py-22 gap-12 ">
     
      <div  className="flex flex-col gap-6 max-w-lg flex-1">
                <p className="text-secondary text-lg md:text-xl opacity-80 text-left">
          Crafting Prestige at Every Level.
        </p>
        <h2 className="text-6xl md:text-7xl font-extrabold text-sfg tracking-tight text-left">
          Our Services
        </h2>
        <p className="text-gray-400 text-lg md:text-xl opacity-80 text-left">

At AUREL, we craft tailored marketing, branding, web, and event experiences that reflect your vision and drive impact.
        </p>
    </div>
  

      {/* Right Side */}
      <div className="flex-1 text-white">
        <Timeline position="alternate">
          {services.map((service, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                {index !== 0 && <TimelineConnector />}
                <TimelineDot color={service.color}>
                  {service.icon}
                </TimelineDot>
                {index !== services.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent className="flex items-center">
                <h6 className="font-semibold">{service.label}</h6>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
