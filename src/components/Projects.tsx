import '../css/projects.css';
import chess from '../assets/ranci-chess.png';
import todo from '../assets/todo.png';
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
            </div>
    </div>
    );
}

export default Projects;