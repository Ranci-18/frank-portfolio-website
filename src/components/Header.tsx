import '../css/header.css';

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
        </>
    );
}

export default Header;