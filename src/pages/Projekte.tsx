import React from 'react';
import './Projekte.css';

const Projekte: React.FC = () => {
  return (
  <div className="projekte-container">
      <h2>Projekte</h2>
  <p className="projekte-text">
        Ich habe bereits mehrere Projekte umgesetzt, darunter:
      </p>
  <ul className="projekte-list">
        <li><strong>Präsentationsseite</strong> – eine moderne Portfolio-Seite mit React und TypeScript</li>
  <li>
          <strong>Geburtstag-App</strong> – eine interaktive App mit HTML, CSS, JavaScript & React<br/>
          <a href="https://ydi5291.github.io/geburtstag-app/" target="_blank" rel="noopener noreferrer">
            <button className="projekte-btn">
              Geburtstag-App ansehen
            </button> 
          </a>
        </li>
  <li>
          <strong>Afroshop-Mara</strong> – ein React-basierter Online-Shop mit Warenkorb und einem automatisierten Bot für Paketmanagement über Make.com<br/>
          <a href="https://ydi5291.github.io/afroshop-mara/" target="_blank" rel="noopener noreferrer">
            <button className="projekte-btn">
              Afroshop-Mara ansehen
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projekte;
