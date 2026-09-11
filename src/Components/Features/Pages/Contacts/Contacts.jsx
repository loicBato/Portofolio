
import React, { useState } from 'react';
import './Contacts.css';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import { LinkedInIcon } from '../../Icons';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFeedback('Veuillez remplir tous les champs.');
      return;
    }

    const subject = encodeURIComponent(`Demande de contact de ${name}`);
    const body = encodeURIComponent(
      `Bonjour Mr BATO,\n\nJe suis ${name} (${email}).\n\n${message}\n\nCordialement.`
    );

    const mailtoLink = `mailto:loicbato4@gmail.com?subject=${subject}&body=${body}`;
    setFeedback('Ouverture de votre client e-mail...');
    window.location.href = mailtoLink;

    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setFeedback(''), 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <AnimatedSection>
          <h1 className="contact-title">Contactez-moi</h1>
          <p className="contact-description">
            Une idée de projet, une collaboration ou un besoin de conseil ? Je suis ouvert aux discussions autour du digital, des produits et de la donnée.
          </p>
        </AnimatedSection>

        <div className="contact-content">
          <AnimatedSection delay="100ms">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  placeholder="Prénom Nom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Adresse e-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="vous@exemple.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="form-textarea"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                Envoyer par e-mail
              </button>
              {feedback && <p className="form-feedback">{feedback}</p>}
            </form>
          </AnimatedSection>

          <AnimatedSection delay="200ms" className="contact-methods">
            <h3 className="contact-subheading">Autres moyens de contact</h3>
            <p className="contact-text">
              Je suis également disponible par e-mail et via LinkedIn pour les opportunités professionnelles et les collaborations.
            </p>
            <div className="contact-links">
              <a
                href="mailto:loicbato4@gmail.com"
                className="contact-link"
              >
                <span className="contact-icon">@</span>
                <div>
                  <span className="contact-link-title">E-mail</span>
                  <span className="contact-link-subtitle">loicbato4@gmail.com</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/tarekpessou-lo%C3%AFc-bato-980881229/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <LinkedInIcon className="contact-icon-svg" />
                <div>
                  <span className="contact-link-title">LinkedIn</span>
                  <span className="contact-link-subtitle">tarekpessou-loïc-bato</span>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
