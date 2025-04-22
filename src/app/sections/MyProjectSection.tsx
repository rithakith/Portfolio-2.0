"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function MyProjectSection() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="pt-16">
      <SectionTitle title="My Projects" />
  
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 mt-10 grid place-items-center z-[100]">
  
            <motion.div
  layoutId={`card-${active.title}-${id}`}
  ref={ref}
  className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col 
             bg-white/5 dark:bg-white/10 backdrop-blur-md 
             border border-white/30 shadow-lg 
             sm:rounded-3xl overflow-hidden"
>          <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-color1 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-white dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  {active.ctaText && active.ctaLink && (

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-color1 text-white"
                  >
                    {active.ctaText}
                  </motion.a>)}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-color1 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Cards List */}
      <ul className="max-w-4xl place-items-center mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
  {cards.map((card) => (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={card.title}
      onClick={() => setActive(card)}
      className="p-4 flex flex-col border border-white mx-9 sm:mx-2 
        hover:backdrop-blur-md hover:bg-white/5 dark:hover:bg-white/10 
        hover:shadow-lg hover:ring-1 hover:ring-white/40 
        rounded-xl cursor-pointer transform hover:scale-105 
        transition-all ease-in-out h-full"
    >
      <div className="flex flex-col justify-between h-full">
        {/* Image */}
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={100}
            height={100}
            src={card.src}
            alt={card.title}
            className="h-60 w-full rounded-lg object-cover object-top"
          />
        </motion.div>

        {/* Title + Desc */}
        <div className="flex-grow flex flex-col justify-center items-center mt-4">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-white dark:text-neutral-200 text-center text-base"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="text-color1 dark:text-neutral-400 text-center text-base"
          >
            {card.description}
          </motion.p>
        </div>

        {/* CTA Link */}
        {card.ctaText && card.ctaLink && (
  <div className="mt-4 flex justify-center">
    <a
      href={card.ctaLink}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
      className="px-4 py-2 text-sm rounded-sm width-fit font-bold bg-color1 text-white"
    >
      {card.ctaText}
    </a>
  </div>
)}

      </div>
    </motion.div>
  ))}
</ul>

    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "NEXT JS, TAILWIND, ASCERNITY UI, UI-LAYOUT",
    title: "Portfolio 2.0",
    src: "/projects/portfolio2.webp",
    ctaText: "Visit Site",
    ctaLink: "http://rithara.dev/",
    content: () => {
      return (
        <p>
          As an aspiring developer, I have designed and developed a dynamic showcase of my skills and projects, reflecting my passion for technology and user experience. This portfolio not only highlights my work but also features an integrated AI chatbot, enhancing user interaction and providing personalized assistance.
        </p>
      );
    },
  },
  {
    description: "PYTHON, TKINTER, SQLITE",
    title: "UoM Internal Admin Tool",
    src: "/projects/finance.webp", // Update this with your actual image path
    ctaText: "",
    ctaLink: "#", // Replace with actual link or modal trigger if available
    content: () => {
      return (
        <p>
          This project was developed for an internal administration division at the University of Moratuwa by IES Labs, Faculty of IT.
          Built using Python and Tkinter, it streamlined various admin processes with a user-friendly interface and SQLite database support.
          I was glad to be one of the contributing team members in this collaborative effort.
        </p>
      );
    },
  },
  
  {
    description: "NEXT JS, TURBOPACK, PRISMA, TAILWIND",
    title: "Vertextbms Site",
    src: "/projects/vertextbms.webp",
    ctaText: "Visit Site",
    ctaLink: "https://vertexbms.com/",
    content: () => {
      return (
        <p>
          VertexBMS is a professional service provider specializing in MEP and industrial solutions.
          The website reflects their focus on delivering efficient, reliable, and safe systems for homes,
          offices, and industries — backed by 24/7 availability and a results-driven approach.
        </p>
      );
    },
  },
  {
    description: "MERN STACK",
    title: "Portfolio 1.0",
    src: "/projects/portfolio.webp",
    ctaText: "Visit Site",
    ctaLink: "https://ritharakithmanthie.vercel.app/",
    content: () => {
      return (
        <p>
          As an aspiring developer, I have designed and developed a dynamic showcase of my skills and projects, reflecting my passion for technology and user experience. This portfolio not only highlights my work but also features an integrated AI chatbot, enhancing user interaction and providing personalized assistance.
        </p>
      );
    },
  },
  {
    description: "FIREBASE, REACT.JS, ARDUINO IDE, ESP32, IOT",
    title: "BeeWise",
    src: "/projects/hardware.webp", // make sure to place the correct image at this path
    ctaText: "View Project in LinkedIn",
    ctaLink: "https://www.linkedin.com/in/ritharak/details/projects/", // replace with the actual deployed URL if available
    content: () => {
      return (
        <p>
          BeeWise is an advanced IoT solution transforming beekeeping with real-time monitoring and automation. 
          I developed the web application for this system using React.js and Firebase, enabling real-time tracking of hive conditions through ESP32 microcontrollers.
          The app visualizes sensor data through charts and ensures continuous storage for long-term insights.
        </p>
      );
    },
  }
  
 
];
