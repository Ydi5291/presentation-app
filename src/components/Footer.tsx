import React from "react";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <span className="footer-copyright">
        © {new Date().getFullYear()} Youssouf Diallo
      </span>
      <div className="footer-socials">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="/src/assets/facebook.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/src/assets/instagram.jpg" alt="Instagram" />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
          <img src="/src/assets/twitter.png" alt="X" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/src/assets/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
