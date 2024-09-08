import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Proffesional from './components/Proffesional';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div id='app'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/expertise" element={<Proffesional />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}