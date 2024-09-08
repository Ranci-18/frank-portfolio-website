import '../css/projects.css';
import chess from '../assets/ranci-chess.png';
import todo from '../assets/todo.png';
import cart from '../assets/Shopping Cart.png';
import card from '../assets/Profile Card.png';
import joke from '../assets/joke Generator.png';
import ip from '../assets/IP Finder.png';
import submission from '../assets/Submission Form.png';
import { useEffect } from 'react';


let scrollAmount = 0;
const Projects: React.FC = () => {
    useEffect(() => {
        const projectTiles = document.querySelector('.project-tiles');
        const tiles = document.querySelectorAll('.project-tiles .div');



        function autoScroll() {
            scrollAmount += 1;
            if (projectTiles) {
                projectTiles.scrollLeft = scrollAmount;

                if (scrollAmount >= projectTiles.scrollWidth - projectTiles.clientWidth) {
                    scrollAmount = 0;
                }
            }
            highlightActiveTile();
        }

        function highlightActiveTile() {
            if (projectTiles) {
                const center = projectTiles.scrollLeft + projectTiles.clientWidth / 2

                tiles.forEach(tile => {
                    const tileCenter = (tile as HTMLElement).offsetLeft + tile.clientWidth / 2;

                    if (Math.abs(center - tileCenter) < tile.clientWidth / 2) {
                        tile.classList.add('active');
                    } else {
                        tile.classList.remove('active');
                    }
                });
            }
        }

        const intervalId = setInterval(autoScroll, 50);

        return () => {
            clearInterval(intervalId);}
    }, []);

    return (
        <div id="projects">
            <h2>These are some of my projects</h2>
            <div className="underscore"></div>
            <div className="project-tiles">
                <div className="div">
                    <a href="https://github.com/Ranci-18/ranci-chess" target="_blank"><img className="project-tile profile-link" src={chess} alt="frank's chess app" /></a>
                    <p>Ranci-chess App</p>
                </div>
                <div className="div">
                    <a href="https://todo-app-woad-one-64.vercel.app/" target="_blank"><img className="project-tile profile-link" src={todo} alt="frank's todo app" /></a>
                    <p>Simple todo App</p>
                </div>
                <div className="div">
                    <a href="https://joke-generator-taupe-ten.vercel.app/" target="_blank"><img className="project-tile profile-link" src={joke} alt="frank's todo app" /></a>
                    <p>Joke Generator</p>
                </div>
                <div className="div">
                    <a href="https://ip-address-finder-weld.vercel.app/" target="_blank"><img className="project-tile profile-link" src={ip} alt="frank's todo app" /></a>
                    <p>IP Address Finder</p>
                </div>
                <div className="div">
                    <a href="https://shopping-cart-swart-one.vercel.app/" target="_blank"><img className="project-tile profile-link" src={cart} alt="frank's todo app" /></a>
                    <p>Shopping Cart</p>
                </div>
                <div className="div">
                    <a href="https://profile-card-ten-mauve.vercel.app/" target="_blank"><img className="project-tile profile-link" src={card} alt="frank's todo app" /></a>
                    <p>Profile Card</p>
                </div>
            </div>
    </div>
    );
}

export default Projects;