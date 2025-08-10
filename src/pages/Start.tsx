import devImg from "../assets/devImg.png";
import './Start.css';

const Start = () => {
  return (
    <div className="start-container">
      <h2>Herzlich Willkommen auf meinem Portfolio!</h2>
      <p className="start-text">
        Ich bin ein leidenschaftlicher Frontend-Entwickler mit Fokus auf moderne Webtechnologien wie React und Firebase.<br />
        Erfahrung in der Entwicklung benutzerfreundlicher Webanwendungen, API-Integration und Automatisierung von KI-Chatboten mit Make.com und n8n.<br />
        Hohe Lernbereitschaft und praxisorientierte Projekte.
      </p>
      <img
        src={devImg}
        alt="Développeur"
        className="start-photo"
      />
    </div>
  );
};

export default Start;
