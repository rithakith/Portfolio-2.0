import React from "react";
import Image from "next/image";

const AboutMeImageSection: React.FC = () => {
  return (
    <div className="md:w-1/3 w-full">
      <div className="p-6 rounded-md flex items-center justify-center h-full">
        <Image
          src="/Portfolio-2.0/aboutmeimg.jpg"
          alt="About Me"
          width={300}
          height={300}
          className="rounded-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImageSection;
