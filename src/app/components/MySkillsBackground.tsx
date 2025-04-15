'use client';
import React, { useRef } from 'react';
import Blocks from './Blocks';
import Image from 'next/image';

function BlockOne() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      {/* --- Skill Icons Section --- */}
      <div className="flex flex-wrap justify-center items-center gap-6 py-8 px-4 md:px-10">
        {/* Replace these with your skill icons */}
        <Image src="/skills/html.png" alt="HTML" width={50} height={50} />
        <Image src="/skills/css.png" alt="CSS" width={50} height={50} />
        <Image src="/skills/js.png" alt="JavaScript" width={50} height={50} />
        <Image src="/skills/react.png" alt="React" width={50} height={50} />
        <Image src="/skills/python.png" alt="Python" width={50} height={50} />
        {/* Add more skill icons as needed */}
      </div>

      {/* --- Blocks Layout --- */}
      <div
        className='h-[550px] overflow-hidden dark:bg-black before:absolute before:w-full before:h-full before:z-[1] w-full relative'
        ref={containerRef}
      >
        <Blocks
          activeDivsClass='dark:bg-[#131212] bg-color2'
          divClass='dark:border-[#131212] border-color1'
          classname='w-full'
          containerRef={containerRef}
          activeDivs={{
            0: new Set([2, 4, 6]),
            1: new Set([0, 8]),
            2: new Set([1, 3, 5]),
            4: new Set([0, 5, 8]),
            5: new Set([2, 4]),
            7: new Set([2, 6, 9]),
            8: new Set([0, 4]),
            9: new Set([5]),
            10: new Set([3, 6]),
            11: new Set([1, 5]),
            12: new Set([7]),
            13: new Set([2, 4]),
            14: new Set([5]),
            15: new Set([1, 6]),
          }}
        />
      </div>
    </div>
  );
}

export default BlockOne;
