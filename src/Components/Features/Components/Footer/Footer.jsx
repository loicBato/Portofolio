
// import React from 'react';
// import { GithubIcon, LinkedInIcon } from './icons';
import { GithubIcon, LinkedInIcon } from '../../Icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Loic T. BATO</h3>
            <p className="footer-subtitle">Développeur · Data Analyst · CEO</p>
          </div>
          <div className="footer-social">
            <a
              href="https://github.com/loicBato/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <GithubIcon className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/tarekpessou-lo%C3%AFc-bato-980881229/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <LinkedInIcon className="social-icon" />
            </a>
          </div>
          <div className="footer-links">
            {/* <a
              href="/cv.pdf"
              download
              className="cv-link"
            >
              Télécharger mon CV
            </a> */}
            <p className="footer-copyright">
              &copy; 2025 BAT LAB. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;