import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="text-red-500">App</div>;
    </ThemeProvider>
  );
};

export default App;
