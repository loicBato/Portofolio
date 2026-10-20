
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Box } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import './Header.css';

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

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="header"
      sx={{
        background: 'rgba(12, 22, 38, 0.95)',
        backdropFilter: 'blur(12px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
      }}
    >
      <Toolbar className="nav-container" sx={{ minHeight: '72px !important', px: { xs: 2, md: 3 }, maxWidth: '100%', width: '100%' }}>
        <NavLink to="/" className="nav-logo">
          Loïc BATO | Portfolio
        </NavLink>

        <Box className="nav-links-desktop" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, ml: 'auto', mr: 2 }}>
          <NavLinks />
        </Box>

        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link contact-button-desktop ${isActive ? 'nav-link-active' : ''}`}
        >
          Contact
        </NavLink>

        <IconButton
          className="nav-mobile-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          sx={{ color: '#fff', p: 0.5, display: { xs: 'inline-flex', md: 'none' } }}
        >
          {isOpen ? <CloseIcon className="nav-icon" /> : <MenuIcon className="nav-icon" />}
        </IconButton>
      </Toolbar>

      <Box id="mobile-navigation" className={`nav-mobile-menu ${isOpen ? 'nav-mobile-menu-open' : 'nav-mobile-menu-closed'}`}>
        <Box className="nav-mobile-content">
          <NavLinks onClick={closeMenu} />
          <NavLink to="/contact" onClick={closeMenu} className="contact-button-mobile">
            Contact
          </NavLink>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
