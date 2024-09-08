import '../css/footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Frank's Portfolio</p>
        </footer>
    );
}

export default Footer;