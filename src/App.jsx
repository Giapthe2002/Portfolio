import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import IntroSection from "./components/Sections/IntroSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import AboutSection from "./components/Sections/AboutSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
