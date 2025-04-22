"use client";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const renderWords = () => {
    const lines = words.split("\n");

    return (
      <div>
        {lines.map((line, idx) => (
          <div key={idx} className="mb-4">
            {line}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-[#37b1a7] sm:text-xl text-md leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
