"use client";

import React from "react";


interface Achievement {
  title: string;
  rank: string;
  organizer: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Hacktivate Hackathon",
    rank: "2nd Place",
    organizer: "NSBM Green University",
    description: "Built Secura, an AI-powered real-time security tracking & live collaboration platform.",
  },
  {
    title: "DataStorm 5.0",
    rank: "2nd Place",
    organizer: "Octave (John Keells Group)",
    description: "Advanced analytics modeling, unsupervised clustering, and LLM business pitching.",
  },
  {
    title: "Ballerina 2.0 Hackathon",
    rank: "Top 10",
    organizer: "WSO2",
    description: "Developed performant network-aware microservices and cloud integration pipelines.",
  },
 
];

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="w-full px-2 py-4 flex flex-col gap-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/[0.04] hover:border-color2/20 transition-all duration-300 shadow-sm hover:-translate-y-1"
          >
            <div>
              {/* Header Icon + Rank Badge */}
              <div className="flex items-center justify-between mb-4">
              
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-color1/10 text-color1 border border-color1/20">
                  {item.rank}
                </span>
              </div>

              {/* Title & Organizer */}
              <h3 className="text-lg font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-color2 font-semibold text-xs mt-1">
                {item.organizer}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
