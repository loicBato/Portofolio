
import React, { useState } from 'react';
import './Contacts.css';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import { LinkedInIcon, WhatsAppIcon } from '../../Icons';

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

    const whatsappMessage = `Bonjour, je suis ${name} (${email}).\n\n${message}\n\nSource: Site portfolio`;
    const phoneNumber = "22896701572"; // Replace with your number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setFeedback('Redirection vers WhatsApp...');
    window.open(whatsappURL, "_blank");

    // Reset form
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
            Une question, une proposition de projet ou simplement envie de discuter ? N'hésitez pas à me contacter.
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
                Envoyer via WhatsApp
              </button>
              {feedback && <p className="form-feedback">{feedback}</p>}
            </form>
          </AnimatedSection>

          <AnimatedSection delay="200ms" className="contact-methods">
            <h3 className="contact-subheading">Autres moyens de contact</h3>
            <p className="contact-text">
              Je suis également disponible directement par e-mail ou via les réseaux sociaux professionnels.
            </p>
            <div className="contact-links">
              <a
                href="mailto:tarekpessouloicbato@gmail.com"
                className="contact-link"
              >
                <span className="contact-icon">@</span>
                <div>
                  <span className="contact-link-title">E-mail</span>
                  <span className="contact-link-subtitle">contact@exemple.com</span>
                </div>
              </a>
              <a
                href="https://wa.me/22896701572"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <WhatsAppIcon className="contact-icon-svg" />
                <div>
                  <span className="contact-link-title">WhatsApp</span>
                  <span className="contact-link-subtitle">Discussion directe</span>
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
                  <span className="contact-link-subtitle">Mon profil professionnel</span>
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
