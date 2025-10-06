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
          Ich bin ein motivierter, engagierter Berufseinsteiger und leidenschaftlicher Frontend-Entwickler mit Schwerpunkt auf modernen Webtechnologien wie React und Firebase.
          Ich bringe Erfahrung in der Umsetzung benutzerfreundlicher Webanwendungen mit, einschließlich der Integration von APIs und Schnittstellen sowie der Automatisierung intelligenter Chatbots mit Make.com.
          Hohe Lernbereitschaft, technisches Verständnis und ein Fokus auf praxisnahe Projekte zeichnen mich aus. Zudem arbeite ich routiniert mit Content-Management-Systemen wie WordPress
        </p>
        <button onClick={() => navigate("/about")}>weiter lesen</button>
      </div>
    </>
  );
};

export default Start;
