import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Proffesional from './components/Proffesional';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Welcome />
            <Projects />
            <Proffesional />
            <Contact />
            <Footer />
        </BrowserRouter>
    );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}