import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />

          <section id="home">
            <Home />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
