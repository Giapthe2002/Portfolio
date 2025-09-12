import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/Skills";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <IntroSection />
        <SkillsSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
