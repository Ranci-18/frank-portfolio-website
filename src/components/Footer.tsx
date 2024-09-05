import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Created by Frank</p>
        </footer>
    );
}

export default Footer;