import React from 'react';
import './Kontakt.css';

const Kontakt: React.FC = () => {
  return (
    <div className="kontakt-container">
      <h2>Kontakt</h2>
      <p className="kontakt-text">
        Sie können mich direkt kontaktieren:
      </p>
      <div className="kontakt-details">
        <strong>Telefon:</strong> <a href="tel:01626291461" className="kontakt-link">0162&nbsp;6291461</a><br/>
        <strong>E-Mail:</strong> <a href="mailto:youssoufdiamaldiallo@gmail.com" className="kontakt-link">youssoufdiamaldiallo@gmail.com</a>
      </div>
      <form action="mailto:youssoufdiamaldiallo@gmail.com" method="POST" encType="text/plain" className="kontakt-form">
        <input type="text" name="name" placeholder="Ihr Name" required className="kontakt-input" />
        <input type="email" name="email" placeholder="Ihre E-Mail" required className="kontakt-input" />
        <textarea name="message" placeholder="Ihre Nachricht" required rows={5} className="kontakt-textarea" />
        <button type="submit" style={{ padding: '0.7rem', borderRadius: '8px', border: 'none', background: '#646cff', color: '#fff', fontWeight: 500, fontSize: '1rem', cursor: 'pointer' }}>Nachricht senden</button>
      </form>
    </div>
  );
};

export default Kontakt;
