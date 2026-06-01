"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Skill {
  src: string;
  name: string;
}

interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    categoryName: "Languages",
    skills: [
      { src: "/Portfolio-2.0/skills/typescript.png", name: "TypeScript" },
      { src: "/Portfolio-2.0/skills/js.png", name: "JavaScript" },
      { src: "/Portfolio-2.0/skills/python.png", name: "Python" },
      { src: "/Portfolio-2.0/skills/java.png", name: "Java" },
      { src: "/Portfolio-2.0/skills/net.png", name: "C# / .NET" },
      { src: "/Portfolio-2.0/skills/c++.png", name: "C++" },
      { src: "/Portfolio-2.0/skills/c.svg", name: "C" },
      { src: "/Portfolio-2.0/skills/php.png", name: "PHP" },
      { src: "/Portfolio-2.0/skills/ballerina.svg", name: "Ballerina" },
    ],
  },
  {
    categoryName: "Web & Mobile",
    skills: [
      { src: "/Portfolio-2.0/skills/nextjs.svg", name: "Next.js" },
      { src: "/Portfolio-2.0/skills/react.png", name: "React" },
      { src: "/Portfolio-2.0/skills/angular.webp", name: "Angular" },
      { src: "/Portfolio-2.0/skills/flutter.png", name: "Flutter" },
      { src: "/Portfolio-2.0/skills/tailwind.png", name: "Tailwind CSS" },
      { src: "/Portfolio-2.0/skills/nodejs.png", name: "Node.js" },
      { src: "/Portfolio-2.0/skills/spring.png", name: "Spring Boot" },
      { src: "/Portfolio-2.0/skills/html.png", name: "HTML" },
      { src: "/Portfolio-2.0/skills/css.png", name: "CSS" },
    ],
  },
  {
    categoryName: "Databases & ORMs",
    skills: [
      { src: "/Portfolio-2.0/skills/mysql.png", name: "MySQL" },
      { src: "/Portfolio-2.0/skills/sqlite.png", name: "SQLite" },
      { src: "/Portfolio-2.0/skills/mongodb.png", name: "MongoDB" },
      { src: "/Portfolio-2.0/skills/firebase.png", name: "Firebase" },
      { src: "/Portfolio-2.0/skills/prisma.png", name: "Prisma ORM" },
    ],
  },
  {
    categoryName: "DevOps & Tools",
    skills: [
      { src: "/Portfolio-2.0/skills/kubernetes.webp", name: "Kubernetes" },
      { src: "/Portfolio-2.0/skills/docker.webp", name: "Docker" },
      { src: "/Portfolio-2.0/skills/linux.png", name: "Linux" },
      { src: "/Portfolio-2.0/skills/ubuntu.png", name: "Ubuntu" },
      { src: "/Portfolio-2.0/skills/gitlab.png", name: "GitLab" },
      { src: "/Portfolio-2.0/skills/figma.png", name: "Figma" },
      { src: "/Portfolio-2.0/skills/blender.png", name: "Blender" },
      { src: "/Portfolio-2.0/skills/kaggle.svg", name: "Kaggle" },
    ],
  },
];

const MySkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...skillCategories.map(c => c.categoryName)];

  return (
    <section id="skills" className="w-full px-2 py-4 flex flex-col gap-6 max-w-6xl mx-auto">

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
              activeTab === tab
                ? "bg-color1 text-white border-color1 shadow-md"
                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {skillCategories
          .filter(cat => activeTab === "All" || cat.categoryName === activeTab)
          .map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col gap-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-color2 tracking-wide border-b border-white/5 pb-2">
                {cat.categoryName}
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col items-center gap-2 group cursor-default"
                  >
                    <div className="relative h-12 w-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 p-2 group-hover:border-color1/40 group-hover:bg-white/10 transition-all duration-300">
                      <Image
                        src={skill.src}
                        alt={`${skill.name} Icon`}
                        width={40}
                        height={40}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-[11px] text-gray-400 group-hover:text-white text-center font-medium transition-colors whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MySkillsSection;
