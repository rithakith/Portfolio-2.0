"use client";

import React from "react";
import AboutMeImageSection from "./AboutMeImageSection";
import { TextGenerateEffect } from "./TextGenerateEffect";
const aboutMeWords = `Hey There 🤪🤪

I’m someone who literally can’t survive without my 💻 — like, it’s basically my emotional support device. I’ve opened it on buses, benches, beds, and borderline every surface that supports gravity.

Whenever I’m bored , I end up experimenting with a new tech stack just for the fun of it. Yes, my GitHub is chaos — and I’m proud of it 😎.

I'm also a die-hard anime fan and I’ve never missed a Marvel movie — no matter how questionable some of them were (yes, I watched She-Hulk too 🥴).

ESTJ in the wild 🌟 I love socializing, hyping people up, and laughing at my own jokes. So hit me up if you're into coding convos, Marvel rants, or just chilling with a laptop nearby 😏
`;

const AboutMeContent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left: Image */}
      <AboutMeImageSection />

      {/* Right: Content */}
      <div className="md:w-2/3 w-full">
        <div className=" p-6 rounded-md h-full">
          <TextGenerateEffect words={aboutMeWords} />
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
