"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  bullets: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "WSO2",
    duration: "Feb 2026 – Aug 2026",
    location: "Colombo, Sri Lanka",
    description: "Architected and developed a production-grade Backstage plugin integrating WSO2 API Manager into Internal Developer Portals, allowing enterprise customers to seamlessly manage API catalogs directly from their developer console.",
    bullets: [
      "Designed and scaffolded the plugin's frontend architecture from scratch using React, TypeScript, and Backstage APIs.",
      "Integrated secure communication protocols via OpenAPI specifications, RESTful endpoints, and OAuth2/OIDC standards.",
      "Packaged and prepared the plugin as a highly reusable, publishable npm package with automated unit and regression workflows.",
    ],
    skills: ["Backstage", "React", "TypeScript", "WSO2 API Manager", "REST APIs", "OpenAPI", "OAuth2/OIDC", "Docker"],
  },
  {
    role: "Quality Assurance Intern",
    company: "Calcey Technologies",
    duration: "May 2024 – Nov 2024",
    location: "Colombo, Sri Lanka",
    description: "Drove quality control processes across 3 active client-facing web and mobile applications, ensuring seamless software delivery and aligning UI/UX standards.",
    bullets: [
      "Authored comprehensive regression test suites, system-level manual validation files, and user acceptance reports.",
      "Discovered and categorized UX vulnerabilities and system bugs, tracking them through the complete JIRA resolution lifecycle.",
      "Collaborated tightly with engineering teams to validate hotfixes and execute pre-deployment QA sign-offs.",
    ],
    skills: ["Manual Testing", "UI/UX Analysis", "Bug Tracking", "Jira", "Regression Testing", "System Testing"],
  },
];

const WorkExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="w-full px-2 py-4 flex flex-col gap-6 max-w-5xl mx-auto">

      <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12 py-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 bg-background border border-color1/40 rounded-full h-4 w-4 flex items-center justify-center group-hover:border-color1 transition-colors duration-300">
              <div className="bg-color1 rounded-full h-2 w-2"></div>
            </div>

            {/* Card Content */}
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-md">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-color1" />
                    {exp.role}
                  </h3>
                  <p className="text-color1 font-medium text-sm mt-1">{exp.company}</p>
                </div>
                
                <div className="flex flex-col gap-1 text-gray-400 text-xs md:items-end">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Main Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 text-justify">
                {exp.description}
              </p>

              {/* Bullet Accomplishments */}
              <ul className="list-disc list-outside pl-4 space-y-2 text-gray-400 text-xs mb-5 text-justify">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-0.5 text-[11px] font-semibold rounded bg-color2/5 text-color2 border border-color2/10 hover:border-color2/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
