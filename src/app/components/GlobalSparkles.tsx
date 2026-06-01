'use client';
import { Sparkles } from './Sparkles';
import React from 'react';

const GlobalSparkles: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden 
        [mask-image:radial-gradient(50%_50%,white,transparent)] 
        before:absolute before:inset-0 
        before:bg-[radial-gradient(circle_at_bottom_center,#c84831,transparent_90%)] 
        before:opacity-30 
        after:absolute after:-left-1/2 after:top-1/2 
        after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%]"
    >
      <Sparkles
        density={500}
        speed={1.0}
        size={1.2}
        direction="bottom"
        opacitySpeed={1.5}
        color="#ffd29d"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};

export default GlobalSparkles;
