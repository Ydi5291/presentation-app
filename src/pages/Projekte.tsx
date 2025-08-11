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
        <li>
          <strong>Geburtstag-App</strong> – eine interaktive App mit HTML, CSS, JavaScript & React<br />
          <a href="https://ydi5291.github.io/geburtstag-app/" target="_blank" rel="noopener noreferrer">
            <span className="projekte-btn-wrapper">
              <button className="projekte-btn">
                Geburtstag-App ansehen
              </button>
              <span className="projekte-btn-hover-text">
                Schön, dass Sie mein
                Geburtstags-App entdecken möchten!
              </span>
            </span>
          </a>
        </li>
        <li>
          <strong>Afroshop-Mara</strong> – ein React-basierter Online-Shop ...<br />
          <a href="https://ydi5291.github.io/afroshop-mara/" target="_blank" rel="noopener noreferrer">
            <span className="projekte-btn-wrapper">
              <button className="projekte-btn">
                Afroshop-Mara ansehen
              </button>
              <span className="projekte-btn-hover-text">
                Schön, dass Sie mein
                Afroshop-Mara entdecken möchten!
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projekte;
