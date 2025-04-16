import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconClock,
  IconDeviceLaptop,
  IconCoffee,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "20+ Projects",
      description: "A variety of full-stack, mobile, and experimental projects. All powered by caffeine and curiosity.",
      icon: <IconDeviceLaptop size={40} />,
    },
    {
      title: "3+ Years of Experience",
      description: "Been coding since bugs feared me. From hackathons to production apps, I’ve been around.",
      icon: <IconClock size={40} />,
    },
    {
      title: "1000+ Hours of Coding",
      description: "The secret sauce to my skills. Countless hours spent debugging, learning, and creating.",
      icon: <IconTerminal2 size={40} />,
    },
    {
      title: "900+ Cups of Nescafe",
      description: "The real backend of every project. Highly reliable, consistently dark, and mostly Colombian.",
      icon: <IconCoffee size={40} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4 gap-8 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
}
const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 px-6 relative items-center text-center rounded-2xl",
        "bg-white/10 backdrop-blur border border-white/20 shadow-lg",
        "transition hover:scale-105 duration-300 ease-in-out"
      )}
    >
      <div className="mb-4 text-neutral-200 dark:text-neutral-300">{icon}</div>
      <div className="text-lg font-bold mb-2 text-white dark:text-white">
        {title}
      </div>
      <p className="text-sm text-neutral-200 dark:text-neutral-300 max-w-xs">
        {description}
      </p>
    </div>
  );
};
