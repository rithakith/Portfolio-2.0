'use client';

import React from 'react';
import { motion } from "motion/react";
import ButtonContactMe from './ContactMeButton';
import ButtonGetCv from './GetCVButton';
import { Sparkles } from './Sparkles';
import { RandomizedTextEffect } from './RandomizedTextEffect';

const HeroContentSection: React.FC = () => {
  return (
    <div className="md:w-3/5 flex items-center justify-center ">
     <div className="relative mx-auto sm:my-10 flex max-w-7xl flex-col items-center justify-center">

<div className=" pt-24  md:py-20">
  <h1 className="relative z-10 mx-auto max-w-4xl text-center sm:text-8xl text-4xl px-4 sm:px-0 font-bold text-color1 md:text-4xl lg:text-7xl dark:text-slate-300">
    {"Hey I'm Rithara "
      .split("  ")
      .map((word, index) => (
<motion.span
  key={index}
  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
  transition={{
    duration: 0.3,
    delay: index * 0.1,
    ease: "easeInOut",
  }}
  className="mr-2 inline-block text-color1 dark:text-slate-300"
 
>
  {word}
</motion.span>


      ))}
  </h1>
  <motion.p
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 0.3,
      delay: 0.8,
    }}
    className="relative z-10 mx-auto px-4 sm:px-0   py-4 text-center sm:text-4xl text-3xl font-bold text-color1 md:text-4xl lg:text-7xl dark:text-slate-300"
    style={{
      WebkitTextStroke: '1px var(--color1)',
      color: 'var(--color2)',
    }} >
             <RandomizedTextEffect text=' This is my portfolio' />

  </motion.p>
  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 0.3,
      delay: 1,
    }}
    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-16 gap-y-4"

  >
    
    <ButtonContactMe />
<ButtonGetCv />
  </motion.div>
</div>
</div>

    </div>
  );
};

export default HeroContentSection;
