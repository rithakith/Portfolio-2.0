import React from 'react';
import ScrollBaseAnimation from './ScrollBasedAnimation';
function ScrollingText() {
  return (
    <>
      <div id='contact' className='sm:h-[300px] h-[150px] w-full  grid place-content-center'>
        <ScrollBaseAnimation
          // delay={500}
          baseVelocity={3}
          scrollDependent={true}
          clasname='font-bold tracking-[-0.07em] sm:text-6xl text-5xl text-color1 leading-[90%]'
        >
Contact Me   </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default ScrollingText;
