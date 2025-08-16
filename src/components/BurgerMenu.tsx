import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="burger-menu-container">
      <button className={`burger-btn${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menü öffnen/schließen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`sidebar${open ? ' open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Start</Link>
        <Link to="/about" onClick={() => setOpen(false)}>Über mich</Link>
        <Link to="/projekte" onClick={() => setOpen(false)}>Projekte&Tools</Link>
        <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
      </nav>
      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)}></div>}
    </div>
  );
};

export default BurgerMenu;
