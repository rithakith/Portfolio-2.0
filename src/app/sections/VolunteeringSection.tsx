"use client";

import React from "react";
import { Calendar } from "lucide-react";

interface VolunteeringRole {
  role: string;
  duration: string;
  skills?: string[];
 
  description: string;
}

const roles: VolunteeringRole[] = [
  {
    role: "Vice Chairwoman",
    duration: "Oct 2024 – Nov 2025 · 1 yr 2 mos",
    description: "Co-led strategic operations, oversaw executive committee workflows, and coordinated with branch leads to drive women in engineering and diversity initiatives across the university.",
 
  },
  {
    role: "Co Chair FestX-5.0",
    duration: "Apr 2024 – Oct 2024 · 7 mos",
    description: "Orchestrated end-to-end planning, logistics management, cross-functional team coordination, and event operations for the signature FestX-5.0 technology campaign.",
  
  },
  {
    role: "Marketing Committee member",
    duration: "Oct 2023 – Oct 2024 · 1 yr 1 mo",
    description: "Formulated creative outreach plans, drafted marketing campaigns, and engaged corporate sponsors to fund and expand student branch activities.",
   
  },
  {
    role: "Partnership Committee member - Nurturenook",
    duration: "Mar 2024 · 1 mo",
    description: "Facilitated external relations and strategic partnership outreach for the community initiative Nurturenook, successfully securing essential sponsorships.",
  
  },
  {
    role: "Publicity Committee member - IEEE Open Week 2024",
    duration: "Feb 2024 · 1 mo",
    description: "Executed comprehensive digital campaigns, crafted public relations assets, and managed social media handles to boost student participation in Open Week.",
  },
];

const VolunteeringSection: React.FC = () => {
  return (
    <section id="volunteering" className="w-full px-2 py-4 flex flex-col gap-6 max-w-5xl mx-auto">
      {/* Club Header Card */}
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
      
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-color1 tracking-tight flex items-center gap-2">
            IEEE WIE Student Branch Affinity Group
          </h2>
          <p className="text-gray-400 text-xs font-medium">University of Moratuwa</p>
          <div className="flex flex-wrap gap-3 mt-2 text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
            <span>2 years 2 months total</span>
          </div>
        </div>
      </div>

      {/* Timeline of Roles */}
      <div className="relative border-l border-white/10 ml-6 md:ml-8 pl-6 md:pl-10 space-y-10 py-4">
        {roles.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Circle Indicator */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 bg-background border border-white/20 rounded-full h-3.5 w-3.5 flex items-center justify-center group-hover:border-color1 transition-colors duration-300">
              <div className="bg-color2 group-hover:bg-color1 rounded-full h-1.5 w-1.5 transition-colors duration-300"></div>
            </div>

            {/* Role Header Info */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-base font-bold text-color2 tracking-tight">
                    {item.role}
                  </h3>
                 
                </div>
                
                <span className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold">
                  <Calendar className="h-3.5 w-3.5 text-gray-500" />
                  {item.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed text-justify">
                {item.description}
              </p>

              

              
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteeringSection;
