import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutMeSection";
import EducationSection from "./sections/EducationSection";
import MyHighlightsSection from "./sections/MyHighlights";
import MyProjectSection from "./sections/MyProjectSection";
import MyBlogsSection from "./sections/MyBlogsSection";
import MySkillsSection from "./sections/MySkillsSection";
import FooterSection from "./sections/FooterSection";
import ScrollingText from "./components/ScrollingText";
import BackToTopButton from "./components/BackToTop";
import CertificationsSection from "./sections/CertificationsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <CertificationsSection />
      <MyHighlightsSection />
      <MyProjectSection />
      <MySkillsSection />
      <MyBlogsSection />
      <ScrollingText />
      <FooterSection />
      <BackToTopButton />  {/* Include the BackToTopButton here */}
    </>
  );
}
