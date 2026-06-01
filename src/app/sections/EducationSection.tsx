"use client";
import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItem {
  title: string;
  institution: string;
  duration: string;
  details: string;
}

const educationItems: EducationItem[] = [
  {
    title: "BSc (Hons) in Information Technology",
    institution: "University of Moratuwa, Faculty of IT",
    duration: "2023 – 2027 (Expected)",
    details: "CGPA (5 Semesters): 3.59 / 4.00",
  },
  {
    title: "GCE Advanced Level (Physical Science)",
    institution: "Visakha Vidyalaya",
    duration: "2020 – 2022",
    details: "Z-Score: 1.916 | 3 A's (Combined Maths, Physics, Chemistry)",
  },
   {
    title: "GCE Ordinary Level",
    institution: "Sirimavo Bandaranaike Vidyalaya",
    duration: "2018 – 2020",
    details: "Z-Score: 1.916 | 3 A's (Combined Maths, Physics, Chemistry)",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="w-full px-2 py-4 flex flex-col gap-6 max-w-5xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 shadow-sm"
          >
            <div className="flex flex-col gap-4">
          

              {/* Text Info */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-color1 flex-shrink-0" />
                  {item.title}
                </h3>
                <p className="text-color2 font-medium text-xs">{item.institution}</p>
              </div>

             
            </div>

            {/* Bottom Info Badges */}
            <div className="border-t border-white/5 pt-4 mt-4 flex flex-col gap-2">
              <span className="flex items-center gap-2 text-gray-400 text-[11px]">
                <Calendar className="h-3.5 w-3.5 text-color1/60" />
                {item.duration}
              </span>
              <span className="flex items-center gap-2 text-white text-[11px] font-semibold">
                <Award className="h-3.5 w-3.5 text-color1" />
                {item.details}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;