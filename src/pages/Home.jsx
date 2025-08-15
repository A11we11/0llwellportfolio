import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import Email from "../components/Email";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import Skill from "../components/Skill";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-background text-foreground 
  overflow-x-hidden font-merriweather  
  "
    >
      {/* <ThemeToggle /> */}
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />

        <AboutMe />
        <Skill />
        <ProjectSection />
        <ContactSection />
        <Email />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
