import './Header.css';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header-flex">
      <div className="header-top">
        <Link to="/" className="header-name">Portfolio</Link>
        <div className="header-phone">
          <FiPhone className="phone-icon" />
          <a href="tel:+491626291461" className="phone-number">+49 1626291461</a>
        </div>
      </div>
      <nav className="header-nav">
        <Link to="/">Start</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/projekte">Projekte</Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/documents">Documents</Link>
      </nav>
      <BurgerMenu />
    </header>
  );
};

export default Header;
