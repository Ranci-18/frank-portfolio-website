import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div id='app'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    
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