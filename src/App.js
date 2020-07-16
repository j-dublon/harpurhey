import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Activities from "./components/Activities";
import News from "./components/News";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router primary={false}>
        <Home path="/" />
        <About path="/about" />
        <Activities path="/activities" />
        <News path="/news" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
