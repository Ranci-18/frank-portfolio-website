import '../css/projects.css';
import chess from '../assets/ranci-chess.png';
import todo from '../assets/todo.png';

const Projects: React.FC = () => {
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