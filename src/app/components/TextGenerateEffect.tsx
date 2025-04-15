"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    const lines = words.split("\n");

    return (
      <motion.div ref={scope}>
        {lines.map((line, lineIdx) => {
          const lineWords = line.split(" ");
          return (
            <div key={lineIdx} className="mb-2">
              {lineWords.map((word, wordIdx) => (
                <motion.span
                  key={`${word}-${lineIdx}-${wordIdx}`}
                  className="dark:text-white text-[#37b1a7] opacity-0 inline-block"
                  style={{
                    filter: filter ? "blur(10px)" : "none",
                  }}
                >
                  {word + "\u00A0"}
                </motion.span>
              ))}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black sm:text-xl text-md  leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
