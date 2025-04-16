import React from "react";

const AboutMeImageSection: React.FC = () => {
  return (
    <div className="md:w-1/3 w-full">
        <div className=" p-6 rounded-md flex items-center justify-center h-full">
            <img
            src="/aboutmeimg.webp" // Replace with your image path
            alt="About Me"
            className="rounded-full w-full object-cover"
            />
        </div>
    </div>
  );
};

export default AboutMeImageSection;
