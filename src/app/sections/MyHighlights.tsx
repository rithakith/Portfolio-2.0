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
      "I was a QA intern at Calcey Technologies for a six-month internship period. Even though QA wasn’t really my thing, the experience taught me a lot. It was tough to balance it with my university workload since it wasn’t during the proper internship period, but I managed. For my next internship, I plan to explore a Software Engineering role — if you want to reach out, feel free!",
    src: "rock.jpg",
    link: "/calceyintern.png",
    color: "#255496",
  },
  {
    title: "DataStorm 5.0 — 2nd Place!",
    description:
      "We won second place in DataStorm 5.0 Analytics Competition out of 150 contestants — and that too during our first year! It was such a memorable win and gave me a lot of confidence in data and team-based competitions.",
    src: "tree.jpg",
    link: "/datastorm.jpg",
    color: "#255496",
  },
  {
    title: "Vice Chairwoman – IEEE WIE UoM",
    description:
      "I'm currently the Vice Chairwoman of the IEEE WIE Affinity Group of UoM. While juggling academics, group projects, and responsibilities isn't always easy, I genuinely love being involved — it helps me grow, connect, and give back.",
    src: "water.jpg",
    link: "/wie.jpg",
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
              src={project?.src}
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
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
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
          <div className="w-full md:w-[50%] text-justify text-base md:text-lg">
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
