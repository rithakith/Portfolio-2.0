"use client";

import React from "react";
import AboutMeImageSection from "./AboutMeImageSection";
import { TextGenerateEffect } from "./TextGenerateEffect";
const aboutMeWords = `Hi, I'm Rithara Kithmanthie — a third-year student at the University of Moratuwa, pursuing a BSc in Information Technology. I love diving into new technologies just to see what I can create next.

I've worked on various projects using Next.js, Flutter, React, Angular, .NET and Springboot, and I enjoy building full-stack apps with clean architecture and smooth UI. During my internship at Calcey Technologies, I got hands-on experience in QA engineering, and I'm now looking forward to taking on more software engineering roles.

I was selected for the Linux Systems Administration and DevOps Engineering Program conducted by WSO2, where I'm currently deepening my expertise in cloud infrastructure and automation. Additionally, I serve as the Software Co-Lead of IoT & Embedded Systems Labs (IES Labs), where I help drive innovative projects at the intersection of software and hardware.

As the Vice Chairwoman of IEEE Women in Engineering (WIE) – UoM, I've had the privilege of mentoring student-led projects and organizing impactful tech events that bring people together. I also placed second in the DataStorm 5.0 Analytics Competition, competing with over 150 teams from across the country.

On the fun side — I'm an extrovert, a huge Marvel fan, a manga lover, and someone who enjoys connecting with people, whether it's through tech, music, or casual conversation. ✨

Let's connect and create something awesome!


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
