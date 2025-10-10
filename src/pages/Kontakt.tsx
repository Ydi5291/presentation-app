import React from 'react';
import './Kontakt.css';
import phoneImg from '../assets/phone_logo.png';
import mailImg from '../assets/Mail.png';
import ydiImg from "../assets/YDi.jpg";

const Kontakt: React.FC = () => {
  return (
    <div className="kontakt-container">
      <div className="kontakt-info-block">
        <a href="tel:+491626291461" className="kontakt-info-card" style={{ textDecoration: "none" }}>
          <div className="iconDes">Telefon</div>
          <img src={phoneImg} alt="Telefon" className="kontakt-icon" />
          <span className="telefon-link">+49 1626291461</span>
        </a>
        <a href="mailto:youssoufdiamaldiallo@gmail.com" className="kontakt-info-card" style={{ textDecoration: "none" }}>
          <div className="iconDes">E-Mail</div>
          <img src={mailImg} alt="E-Mail" className="kontakt-icon" />
          <span className="email-link">youssoufdiamaldiallo@gmail.com</span>
        </a>
      </div>
      <div className="kontakt-form-block">
        <div className="kontakt-form-row">
          <div className="kontakt-form-text">
            <p>
              Sie können mir direkt eine Nachricht senden.<br />
              Ich würde mich sehr freuen, von Ihnen zu hören.
            </p>
            <img src={ydiImg} alt="YDi" className="kontakt-icon" />
          </div>
          <form action="mailto:youssoufdiamaldiallo@gmail.com" method="POST" encType="text/plain" className="kontakt-form">
            <input type="text" name="name" placeholder="Ihr Name" required className="kontakt-input" />
            <input type="email" name="email" placeholder="Ihre E-Mail" required className="kontakt-input" />
            <textarea name="message" placeholder="Ihre Nachricht" required rows={5} className="kontakt-textarea" />
            <button type="submit" className="kontakt-btn">Nachricht senden</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
