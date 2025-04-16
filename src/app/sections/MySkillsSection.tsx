import React from "react";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";

const skillImages = [
  { src: "/skills/html.png", alt: "HTML" },
  { src: "/skills/css.png", alt: "CSS" },
  { src: "/skills/js.png", alt: "JavaScript" },
  { src: "/skills/react.png", alt: "React" },
  { src: "/skills/tailwind.png", alt: "React" },
  { src: "/skills/nextjs.svg", alt: "React" },
  { src: "/skills/nodejs.png", alt: "Node.js" },
  { src: "/skills/python.png", alt: "Python" },
  { src: "/skills/php.png", alt: "Git" },
  { src: "/skills/ballerina.svg", alt: "Git" },
  { src: "/skills/java.png", alt: "Git" },
  { src: "/skills/firebase.png", alt: "Git" },
  { src: "/skills/mongodb.png", alt: "Git" },
  { src: "/skills/mysql.png", alt: "Git" },
  { src: "/skills/figma.png", alt: "Git" },
  { src: "/skills/blender.png", alt: "Git" },
  { src: "/skills/kaggle.svg", alt: "Git" },
  { src: "/skills/c++.png", alt: "Git" },
  { src: "/skills/c.svg", alt: "Git" },
  { src: "/skills/angular.webp", alt: "Git" },
  { src: "/skills/gitlab.png", alt: "Git" },
  { src: "/skills/flutter.png", alt: "Git" },
  { src: "/skills/net.png", alt: "Git" },
  { src: "/skills/spring.png", alt: "Git" },
  { src: "/skills/typescript.png", alt: "Git" },
  { src: "/skills/linux.png", alt: "Git" },
  { src: "/skills/ubuntu.png", alt: "Git" },
  { src: "/skills/sqlite.png", alt: "Git" },
  { src: "/skills/docker.webp", alt: "Git" },
  { src: "/skills/kubernetes.webp", alt: "Git" },







];

const MySkillsSection: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen w-full px-4 pt-4 py-12 flex flex-col gap-8 ">
      <SectionTitle title="My Skills" />

      <div className="sm:mx-24 flex-1 rounded-md flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-12">
          {skillImages.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image
                src={skill.src}
                alt={skill.alt}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkillsSection;
