import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.jpg";
import twitterImg from "../assets/twitter.png";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <span className="footer-copyright">
        © {new Date().getFullYear()} Youssouf Diallo
      </span>
      <div className="footer-links">
        <Link to="/">Start</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/projekte">Projekte</Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/documents">Documents</Link>
      </div>
      <div className="footer-socials">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src={facebookImg} alt="Facebook" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src={instagramImg} alt="Instagram" />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
          <img src={twitterImg} alt="X" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
