import '../css/header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav id="navbar">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Personal Projects</Link></li>
                        <li><Link to="/expertise">Expertise</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;