
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { MenuIcon, CloseIcon } from './icons';
import './Header.css';
import { CloseIcon, MenuIcon } from '../../Icons';
import { IoMdMenu } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

const NavLinks = ({ onClick }) => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
        onClick={onClick}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
        onClick={onClick}
      >
        À Propos
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
        onClick={onClick}
      >
        Compétences
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
        onClick={onClick}
      >
        Projets
      </NavLink>
      <NavLink
        to="/companies"
        className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
        onClick={onClick}
      >
        Entreprises
      </NavLink>
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/" className="nav-logo">
          Mon Portofolio
        </NavLink>

        <div className="nav-links-desktop">
          <NavLinks />
        </div>

        <NavLink to="/contact" className="contact-button-desktop">
          Contact
        </NavLink>

        <div className="nav-mobile-toggle">
          <button onClick={toggleMenu} aria-label="Ouvrir le menu">
            {isOpen ? <IoCloseSharp className="nav-icon" /> : <IoMdMenu className="nav-icon" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${isOpen ? 'nav-mobile-menu-open' : 'nav-mobile-menu-closed'}`}>
        <div className="nav-mobile-content">
          <NavLinks onClick={closeMenu} />
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="contact-button-mobile"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
