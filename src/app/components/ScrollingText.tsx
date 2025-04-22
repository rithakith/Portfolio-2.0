import React from 'react';
import ScrollBaseAnimation from './ScrollBasedAnimation';

function ScrollingText() {
  return (
    <>
      <div id='contact' className='sm:h-[300px] h-[200px] w-full grid place-content-center'>
        <ScrollBaseAnimation
          baseVelocity={3}
          scrollDependent={true}
          clasname='font-bold tracking-[-0.07em] sm:text-6xl text-5xl text-color1 leading-[90%]'
        >
          Contact Me
        </ScrollBaseAnimation>
        <p className='pt-12 text-center text-white lg:text-2xl sm:text-md  text-sm mt-4 px-4 sm:px-0'>
          I’m open to projects, internships, freelancing, or even just a friendly chat — feel free to reach out!
        </p>
      </div>
    </>
  );
}

export default ScrollingText;
