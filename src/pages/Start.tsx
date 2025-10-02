import { useNavigate } from "react-router-dom";
import './Start.css';
import ydiImg from "../assets/YDi.jpg";

const Start = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-intro">
        <img src={ydiImg} alt="Youssouf Diallo" className="start-photo" />
        <div className="intro-text">
          <h2 className="intro-name">Ich bin Youssouf</h2>
          <p className="intro-profession">Frontend-Entwickler und UI/UX Designer</p>
        </div>
      </div>

      <div className="start-container">
        <p className="start-text">
          Ich bin ein leidenschaftlicher Frontend-Entwickler mit Fokus auf moderne Webtechnologien wie React und Firebase.<br />
          Erfahrung in der Entwicklung benutzerfreundlicher Webanwendungen, API-Integration und Automatisierung von KI-Chatboten mit Make.com .<br />
          Hohe Lernbereitschaft und praxisorientierte Projekte. Außerdem arbeite ich sicher mit Content-Management-Systemen wie WordPress.
        </p>
        <button onClick={() => navigate("/about")}>weiter lesen</button>
      </div>
    </>
  );
};

export default Start;
