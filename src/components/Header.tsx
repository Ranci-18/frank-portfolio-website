import react from 'react';

const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav id="navbar">
                    <ul>
                    <li><a href="#welcome-section">About</a></li>
                    <li><a href="#projects">Work</a></li>
                    <li><a href="#professional">Expertise</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div id="welcome-section">
                <h1>Hey, I'm Frank</h1>
                <p>Web Developer/ <br />Frontend Developer/<br />React Developer/<br />JavaScript Developer/<br />CyberSecurity Professional</p>
            </div>
        </>
    );
}

export default Header;