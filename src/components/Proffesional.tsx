import cert from '../assets/certificate-francis-ng-ang-a.png';
import badge from '../assets/ciscoBadge.png';
import '../css/professional.css';

const Proffesional: React.FC = () => {
    return (
        <div id="professional">
        <h2>Tech profile</h2>
        <div className="tech">
            <img src={cert} alt="frank's certificate" className="cert" ></img>
            <img src={badge} alt="cisco junior cyber security badge" className="badge"></img>
        </div>
    </div>
    );
}

export default Proffesional;