import React from 'react';
import './Projekte.css';

// images tools import
import HTMLimg from '../assets/html.jpg';
import CSSimg from '../assets/CSS.jpg';
import JSimg from '../assets/JS.jpg';
import ReactImg from '../assets/React.jpg';
import GitImg from '../assets/git.png';
import firebaseImg from '../assets/firebase.png';
import makeImg from '../assets/make.jpg';
import TSImg from '../assets/TS.jpg';
import AngularImg from '../assets/Angular.jpg';

const Projekte: React.FC = () => {
  return (
    <>
      <div className="tools-list">
        <h2>Tools und Technologien</h2>
        <div className="tools-marquee">
          <ul className="tools-list-items marquee-track">
            <li><img src={HTMLimg} alt="HTML" /></li>
            <li><img src={CSSimg} alt="CSS" /></li>
            <li><img src={JSimg} alt="JavaScript" /></li>
            <li><img src={ReactImg} alt="React" /></li>
            <li><img src={GitImg} alt="Git" /></li>
            <li><img src={firebaseImg} alt="Firebase" /></li>
            <li><img src={makeImg} alt="Make.com" /></li>
            <li><img src={TSImg} alt="TypeScript" /></li>
            <li><img src={AngularImg} alt="Angular" /></li>
          </ul>
        </div>
      </div>
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
                  Schön, dass Sie mein Projekt
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
                  Schön, dass Sie mein Projekt
                  Afroshop-Mara entdecken möchten!
                </span>
              </span>
            </a>
          </li>
          <li>
            <strong>Weather-app</strong> – meine Wetter-App<br />
            <a href="https://ydi5291.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
              <span className="projekte-btn-wrapper">
                <button className="projekte-btn">
                  Weather-app ansehen
                </button>
                <span className="projekte-btn-hover-text">
                  Schön, dass Sie mein Projekt
                  Weather-app entdecken möchten!
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projekte;
