// thanks to oliver: https://www.youtube.com/@olivierlarose1
"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { JSX, useRef } from "react";
import Image from "next/image";
const projects = [
  {
    title: "QA Intern at Calcey Technologies",
    description:
    "I got the opportunity to work as a QA Intern at Calcey Technologies for a six-month internship. During that time, I worked on three different projects, guided by three amazing mentors from each project. My work involved UX demos, bug reporting, writing test cases, and performing regression testing. This experience taught me a lot about real-world software processes. It was a bit challenging to juggle it with university since it wasn’t during the official internship period — but I made it work.",
    src: "rock.webp",
    link: "/calceyintern.webp",
    color: "#255496",
  },
  {
    title: "DataStorm 5.0 — 2nd Place!",
    description: "We won second place in the DataStorm 5.0 Analytics Competition out of 150 teams. In the first round, we had to build a supervised model, followed by an unsupervised model in the second. The final round pushed us even further, where we had to use LLMs to create an AI model and pitch it to a panel. A lot of the concepts were new to us, especially as first-years, but we learned fast and managed to implement everything within a tight deadline. It was an intense but unforgettable experience that really boosted our confidence in data science and teamwork.",
    src: "tree.webp",
    link: "/datastorm.webp",
    color: "#255496",
  },
  {
    title: "Vice Chairwoman – IEEE WIE UoM",
    description:
      " I'm currently the Vice Chairwoman of the IEEE WIE Affinity Group of UoM. Alongside academics and group projects, I've chaired events, coordinated and guided members, and mentored several projects as well. It’s been a rewarding experience that’s helped me grow as a leader while giving back to a community I care about.",
    src: "water.jpg",
    link: "/wie.webp",
    color: "#071a38",
  },
];

export default function MyHighlightsSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
  <section id="highlights" className="pt-16">  <ReactLenis root>
      <SectionTitle title="My Highlights" />

      <section className="text-white   w-full   ">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project?.link}
              title={project?.title}
              color={project?.color}
              description={project?.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </ReactLenis>
    </section>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <section
    id="highlights"  ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{
          backgroundColor: `${color}80`,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        className="flex flex-col relative -top-[25%] h-auto md:h-[450px] w-full md:w-[70%] rounded-xl p-6  md:p-10 origin-top border border-white/20 shadow-lg"
      >
        <h2 className="text-2xl md:text-4xl text-center font-semibold mb-4 md:mb-0">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row-reverse h-full mt-4 md:mt-5 gap-6 md:gap-10">
          {/* Image */}
          <div className="relative w-full md:w-[50%] h-[200px] md:h-full flex items-center justify-center">
            <motion.div
              className="relative w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image
                src={url}
                alt="image"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </div>

          {/* Description */}
          <div className="w-full md:w-[50%] text-justify text-base md:text-md lg:text-lg text-sm ">
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
