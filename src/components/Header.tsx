import '../css/header.css';

const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav id="navbar">
                    <ul>
                    <li><a href="#welcome-section">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Personal Projects</a></li>
                    <li><a href="#professional">Expertise</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;