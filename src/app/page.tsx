import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutMeSection";
import EducationSection from "./sections/EducationSection";
import MyHighlightsSection from "./sections/MyHighlights";
import MyProjectSection from "./sections/MyProjectSection";
import MyBlogsSection from "./sections/MyBlogsSection";
import MySkillsSection from "./sections/MySkillsSection";
import FooterSection from "./sections/FooterSection";
import ScrollingText from "./components/ScrollingText";
export default function Home() {
  return (
    <>
{/* <BlockOne /> */}
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
<MyHighlightsSection />
<MyProjectSection/>      <MySkillsSection />
      <MyBlogsSection />
      <ScrollingText/>
      <FooterSection />
    </>
  );
}
