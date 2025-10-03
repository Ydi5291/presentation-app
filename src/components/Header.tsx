
import './Header.css';

import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-flex">
      <Link to="/" className="header-name">
        Portfolio
      </Link>
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
