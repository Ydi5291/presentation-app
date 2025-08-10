import './Start.css';

const Start = () => {
  return (
    <div className="start-container">
      <h2>Herzlich Willkommen auf meinem Portfolio!</h2>
      <p className="start-text">
        Hallo! Ich bin ein leidenschaftlicher Frontend-Entwickler mit Fokus auf moderne Webtechnologien wie React und Firebase.<br/>
        Erfahrung in der Entwicklung benutzerfreundlicher Webanwendungen, API-Integration und Automatisierung von KI-Chatboten mit Make.com und n8n.<br/>
        Hohe Lernbereitschaft und praxisorientierte Projekte.
      </p>
      <img src="/src/assets/devImg.png" alt="Frontend Entwickler" className="start-img" />
    </div>
  );
};

export default Start;
