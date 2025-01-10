import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contato";
import "./App.css";
import Conversor from "./components/Conversor";

function App() {
  return (
    <Router> {/* Somente o Router aqui */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Conversor />
    </Router>
  );
}

export default App;
