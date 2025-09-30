
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Features/Components/Header/Header';
import Home from './Components/Features/Pages/Home/Home';
import About from './Components/Features/Pages/About/About';
import Skills from './Components/Features/Pages/Skills/Skills';
import Projects from './Components/Features/Pages/Projects/Projects';
import ProjectDetail from './Components/Features/Pages/ProjectDetail/ProjectDetail';
import Companies from './Components/Features/Pages/Companies/Companies';
import Contact from './Components/Features/Pages/Contacts/Contacts';
import Footer from './Components/Features/Components/Footer/Footer';

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
