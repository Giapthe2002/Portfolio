import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="">
        <Navbar />
        <IntroSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
