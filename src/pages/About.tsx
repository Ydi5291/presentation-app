import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="about-intro">
        <h2>Über mich</h2>
        <div className="about-text">
          <p>
            Hier erzähle ich Ihnen mehr über meinen Werdegang und meine Leidenschaft für die Softwareentwicklung.
          </p>
          <button onClick={() => navigate("/kontakt")}>Kontakt aufnehmen</button>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <p >
            Mein Name ist Youssouf Diallo, ich bin 34 Jahre alt und wohne in Werl. Nach meinem Abitur in Guinea habe ich Wirtschaftsinformatik studiert, weil ich schon damals meine Leidenschaft für die Informatik – genauer gesagt im Bereich Softwareentwicklung – entdeckt habe.<br />
            Von 2019 bis 2023 habe ich erfolgreich eine Ausbildung als Fachkraft für Lagerlogistik abgeschlossen. Seit Ende 2024 bin ich bei der Developer Akademie angemeldet und bilde mich intensiv im Bereich Frontend-Softwareentwicklung weiter, um meine Leidenschaft nun beruflich zu verfolgen.<br /><br />
            Ich arbeite mit modernen Technologien wie HTML5, CSS3, JavaScript und React. Auch setze ich zusätzlich Automatisierungstools für effiziente Prozesse ein. <b>Außerdem arbeite ich sicher mit Content-Management-Systemen wie WordPress.</b><br />
            Mein Ziel ist es, innovative digitale Lösungen zu entwickeln und mich ständig weiterzuentwickeln.
          </p>
        </div>

        <button onClick={() => navigate("/Projekte")}>Projekte ansehen</button>
      </div>
    </>
  );
};

export default About;
