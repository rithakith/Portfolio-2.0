import React from 'react';
import SectionTitle from './SectionTitle';
function ScrollingText() {
  return (
    <>
      <div id='contact' className='sm:h-[300px] h-[200px] w-full grid place-content-center'>
  <SectionTitle title="Contact Me" />
        <p className=' text-center text-white lg:text-2xl sm:text-md  text-sm mt-4 px-4 sm:px-0'>
          I’m open to projects, internships, freelancing or job opportunities — feel free to reach out !
        </p>
      </div>
    </>
  );
}

export default ScrollingText;
