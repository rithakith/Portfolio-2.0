"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import { ReactLenis } from "lenis/react";

const EducationSection: React.FC = () => {
  function hexToGlass(hex: string, opacity = 0.2) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return (
    <section id="education" className="w-full px-4 py-12 flex flex-col gap-8">
      {/* Mobile Title */}
      <div className="block lg:hidden">
        <SectionTitle title="My Education" />
      </div>

      <ReactLenis root>
        <section className="text-white w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
            {/* Left Column - Cards */}
            <div className="flex flex-col gap-8 lg:gap-1 w-full lg:w-2/3">
              {educationItems.map((item, idx) => (
                <figure
                  key={idx}
                  className="sticky top-10 h-[90vh] px-2 flex flex-col lg:flex-row items-center justify-center gap-6"
                >
                  <article
                    className={`w-full max-w-md rounded-lg p-6 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-y-4 lg:gap-x-6 ${item.rotateClass}`}
                    style={{
                      background: `${hexToGlass(item.hexColor, 0.75)}`,
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex-1 text-center lg:text-left">
                      <h1 className="text-2xl font-semibold">{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-48 h-auto rounded-lg self-center object-cover"
                    />
                  </article>
                </figure>
              ))}
            </div>

            {/* Desktop Title */}
            <div className="hidden lg:grid sticky top-0 h-screen place-content-center w-full px-4 lg:w-2/5">
              <SectionTitle title="My Education 👩‍🎓" />
            </div>
          </div>
        </section>
      </ReactLenis>
    </section>
  );
};
const educationItems = [
  {
    title: "BSc (Hons) in IT (CGPA:3.66)",
    description:
      "Currently a second year undergraduate of University of Moratuwa.",
    hexColor: "#9b691f", // green-500
    rotateClass: "md:rotate-0",
    image: "/moratuwa.webp",
  },
  {
    title: "G.C.E. Advanced Level (3As)",
    description:
      "Graduated from Visakha Vidyalaya in the Maths stream with excellent results, paving the way into the tech world.",
    hexColor: "#ffe303", // green-400
    rotateClass: "md:-rotate-6",
    image: "/visakha.webp",
  },
   
  {
    title: "Calcey Springboard Scholarship Program",
    description:
      "Completed an intensive year-long program by Calcey Technologies, gaining industry-relevant skills for software engineering.",
    hexColor: "#9c1494", // orange-400
    rotateClass: "md:rotate-6",
    image: "/calcey.webp",
  },
  
  {
    title: "WSO2 DevOps & Linux Systems Training",
    description:
      "Currently engaged in a high-impact training program by WSO2, balancing academics and cutting-edge DevOps skills.",
    hexColor: "#ff7300", // blue-400
    rotateClass: "md:-rotate-6",
    image: "/wso2.webp",
  },
  {
    title: "G.C.E. Ordinary Level (9As)",
    description:
      "Completed with flying colors from Sirimavo Bandaranaike Vidyalaya, securing 9 A's and building a solid academic foundation.",
    hexColor: "#fc9cb8", // red-400
    rotateClass: "md:rotate-0",
    image: "/sirimavo.webp",
  },
];

export default EducationSection;