import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import ts from '../assets/ts.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import firebase from '../assets/firebase.png';
import webpack from '../assets/webpack.png';
import sass from '../assets/sass.png';

const Skills: React.FC = () => {
    return (
        <div id="skills">
            <h2>Skills</h2>
            <div className="underscore"></div>
            <div className="skills-container">
                <div className="skill">
                    <img src={html} alt="html" />
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <img src={css} alt="css" />
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <img src={js} alt="js" />
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <img src={react} alt="react" />
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src={webpack} alt="webpack" />
                    <p>Webpack</p>
                </div>
                <div className="skill">
                    <img src={sass} alt="sass" />
                    <p>SASS/SCSS</p>
                </div>
                <div className="skill">
                    <img src={git} alt="git" />
                    <p>Git</p>
                </div>
                <div className="skill">
                    <img src={github} alt="github" />
                    <p>GitHub</p>
                </div>
                <div className="skill">
                    <img src={firebase} alt="firebase" />
                    <p>Firebase</p>
                </div>
                <div className="skill">
                    <img src={ts} alt="typescript" />
                    <p>Typescript</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;