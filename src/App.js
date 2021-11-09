import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CheckList from "./components/CheckList";
import React, { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.title = "Dark checkList!";
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const getNextMode = () => (!darkMode ? "Dark " : "Light ");
  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <CheckList onToggleDarkMode={toggleDarkMode} getNextMode={getNextMode} />
    </div>
  );
}

export default App;
