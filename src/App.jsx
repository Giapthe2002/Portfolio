import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
