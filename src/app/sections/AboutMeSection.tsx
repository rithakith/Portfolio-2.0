import React from "react";
import SectionTitle from "../components/SectionTitle";
import AboutMeContent from "../components/AboutMeContent";

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 py-12 space-y-8">
      <SectionTitle title="About Me" />
      <AboutMeContent />
    </section>
  );
};

export default AboutMeSection;
