import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CheckList from "./components/CheckList";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Dark checkList!";
  }, []);
  return <CheckList />;
}

export default App;
