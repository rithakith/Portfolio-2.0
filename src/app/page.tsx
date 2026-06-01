"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import AboutMeContent from "./components/AboutMeContent";
import WorkExperienceSection from "./sections/WorkExperienceSection";
import MyProjectSection from "./sections/MyProjectSection";
import MySkillsSection from "./sections/MySkillsSection";
import AchievementsSection from "./sections/AchievementsSection";
import EducationSection from "./sections/EducationSection";
import MyBlogsSection from "./sections/MyBlogsSection";
import CertificationsSection from "./sections/CertificationsSection";
import VolunteeringSection from "./sections/VolunteeringSection";
import ButtonGetCv from "./components/GetCVButton";
import Blocks from "./components/Blocks";
import { 
  User, Briefcase, Code2, Cpu, Trophy, GraduationCap, BookOpen, 
  Github, Linkedin, Mail, FileDown, Heart
} from "lucide-react";

type TabId = "overview" | "experience" | "projects" | "skills" | "achievements" | "education" | "volunteering" | "blogs";

interface MenuItem {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const containerRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { id: "overview", label: "Overview", icon: <User className="h-4 w-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Code2 className="h-4 w-4" /> },
    { id: "skills", label: "Skills", icon: <Cpu className="h-4 w-4" /> },
    { id: "achievements", label: "Achievements", icon: <Trophy className="h-4 w-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "volunteering", label: "Volunteering", icon: <Heart className="h-4 w-4" /> },
    { id: "blogs", label: "My Blogs", icon: <BookOpen className="h-4 w-4" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <AboutMeContent />;
      case "experience":
        return <WorkExperienceSection />;
      case "projects":
        return <MyProjectSection />;
      case "skills":
        return <MySkillsSection />;
      case "achievements":
        return (
          <div className="flex flex-col gap-4">
            <AchievementsSection />
            <div className="border-t border-white/5 pt-8">
              <CertificationsSection />
            </div>
          </div>
        );
      case "education":
        return <EducationSection />;
      case "volunteering":
        return <VolunteeringSection />;
      case "blogs":
        return <MyBlogsSection />;
      default:
        return <AboutMeContent />;
    }
  };

  return (
    <main 
      ref={containerRef}
      className="relative flex flex-col md:flex-row h-screen w-screen bg-background text-white overflow-hidden font-sans"
    >
      {/* 0. BACKGROUND GRID LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.22] mix-blend-screen">
        <Blocks containerRef={containerRef} />
      </div>

      {/* 1. LEFT PANEL: Profile Sidebar (Desktop) / Top Header (Mobile) */}
      <section className="relative z-10 w-full md:w-80 flex-shrink-0 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] backdrop-blur-md p-5 md:p-6 h-auto md:h-screen md:sticky md:top-0 overflow-y-auto">
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Header Info */}
          <div className="flex flex-row md:flex-col items-center md:items-center md:text-center gap-4 md:gap-5 justify-between w-full">
            <div className="flex items-center md:items-center flex-row md:flex-col gap-4 md:gap-4">
              <div className="relative h-12 w-12 md:h-20 md:w-20 rounded-full overflow-hidden border border-color1/20 flex-shrink-0 bg-white/5 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/aboutmeimg.webp"
                  alt="Rithara Kithmanthie Profile Photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col md:items-center">
                <h1 className="text-base md:text-lg font-bold tracking-tight text-white leading-tight">
                  Rithara Kithmanthie 
                </h1>
                <p className="text-xs text-color1 font-semibold mt-1 tracking-wide">
                  Software Engineering Intern @ WSO2
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  Colombo, Western Sri Lanka
                </p>
              </div>
            </div>

            {/* Compact Mobile Quick Action Buttons */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="/Portfolio-2.0/cv.pdf"
                target="_blank"
                className="flex items-center justify-center p-2 rounded-xl border border-color2/30 bg-color2/10 hover:bg-color2/20 text-color2 transition-all"
                title="Get My CV"
              >
                <FileDown className="h-4 w-4" />
              </a>
              <a
                href="mailto:ritharaedirisinghe@gmail.com"
                className="flex items-center justify-center p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all"
                title="Contact Me"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-5 px-5 md:mx-0 md:px-0 border-t border-b md:border-t-0 md:border-b-0 border-white/5 py-2.5 md:py-0 gap-1.5 scrollbar-none">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 text-xs font-semibold flex-shrink-0 whitespace-nowrap md:w-full transition-all duration-200 border-l-2 border-b-2 md:border-b-transparent ${
                  activeTab === item.id
                    ? "text-white bg-white/[0.05] border-l-color2 border-b-color2 md:border-l-color2 md:border-b-transparent rounded-lg md:rounded-r-lg md:rounded-l-none"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border-transparent"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Footer & Socials Section (Desktop) */}
        <div className="hidden md:flex flex-col gap-5 border-t border-white/5 pt-6 mt-6">
          {/* Contact / CV */}
          <div className="flex flex-col gap-3">
            <ButtonGetCv />
         

          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <a
              href="https://github.com/rithakith"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-color1 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/rithara-edirisinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-color1 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ritharaedirisinghe@gmail.com"
              className="hover:text-color1 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. RIGHT PANEL: Content Viewport (Desktop) / Main Panel (Mobile) */}
      <section className="relative z-10 flex-grow h-full overflow-y-auto p-5 md:p-10 lg:p-12 min-w-0">
        <div className="w-full max-w-5xl mx-auto min-h-full flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
