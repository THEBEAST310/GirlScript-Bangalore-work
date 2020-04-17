import React from "react";
import "./App.css";
import Lazy from "./components/Lazy/Lazy";

// components
const Home = Lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
