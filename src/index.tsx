import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Proffesional from './components/Proffesional';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Welcome />
            <Projects />
            <Proffesional />
            <Contact />
            <Footer />
        </>
    );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}