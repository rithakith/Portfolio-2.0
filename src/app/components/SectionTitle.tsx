import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h1 className="relative z-10 mx-auto max-w-4xl text-center sm:text-8xl text-4xl my-4 mb-10 px-4 sm:px-0 font-bold text-color1 md:text-4xl lg:text-6xl dark:text-slate-300">
{title}</h1>
  );
};

export default SectionTitle;
