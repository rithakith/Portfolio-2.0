"use client";

import React from "react";
import AboutMeImageSection from "./AboutMeImageSection";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

interface SpecItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const specs: SpecItem[] = [
  {
    icon: <Briefcase className="h-4 w-4 text-color2" />,
    label: "Current Role",
    value: "Software Engineering Intern @ WSO2",
  },
  {
    icon: <GraduationCap className="h-4 w-4 text-color2" />,
    label: "Academic Status",
    value: "3rd Year Undergrad @ UOM | CGPA 3.59",
  },
 
  {
    icon: <Code2 className="h-4 w-4 text-color2" />,
    label: "Core Focus",
    value: "Full-Stack Dev, Cloud Native & Open Source, AI & ML",
  },
];

const AboutMeContent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch w-full">
      {/* Left: Image Section */}
      <AboutMeImageSection />

      {/* Right: Content Section */}
      <div className="md:w-2/3 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left gap-3">
        <div className="space-y-4 flex flex-col items-center md:items-start">
          {/* Welcome Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-color2 border border-color2/20 text-white text-[10px] font-bold tracking-wider uppercase">
            <span>Software Engineer / AI,ML enthusiast</span>
          </div>

          {/* Bold Scannable Headline */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
            Building <span className="text-color1">robust full-stack apps</span> and <span className="text-color3">automated cloud systems</span>.
          </h2>

        </div>

        {/* Quick Specs Dashboard Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 hover:bg-white/[0.04] hover:border-color2/20 transition-all duration-300 group cursor-default"
            >
              <div className="p-2 bg-color2/5 rounded-lg border border-color2/15 flex-shrink-0 group-hover:border-color2/40 transition-colors">
                {spec.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                  {spec.label}
                </span>
                <span className="text-xs text-white font-bold mt-0.5 group-hover:text-color2 transition-colors">
                  {spec.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
