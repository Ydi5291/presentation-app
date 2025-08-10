
import './Header.css';


import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-flex">
      <div className="header-profile">
        <Link to="/">
          <img
            src={import.meta.env.BASE_URL + "assets/YDi.jpg"}
            alt="Youssouf Diallo"
            className="header-photo"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <span className="header-name">Youssouf Diallo</span>
      </div>
      <nav className="header-nav">
        <Link to="/">Start</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/projekte">Projekte</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
      <BurgerMenu />
    </header>
  );
};

export default Header;
